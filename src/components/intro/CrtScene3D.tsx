"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import * as THREE from "three";

type Phase = "idle" | "reveal" | "push" | "boot" | "outro";

function CRTMonitor({ phase, screenOn }: { phase: Phase; screenOn: boolean }) {
  const group = useRef<THREE.Group>(null);
  const screenMat = useRef<THREE.MeshStandardMaterial>(null);
  const glow = useRef<THREE.MeshStandardMaterial>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;

    // Subtle living sway
    group.current.rotation.y = Math.sin(t * 0.35) * 0.04;
    group.current.rotation.x = Math.sin(t * 0.25) * 0.02;

    if (phase === "push") {
      group.current.position.z = THREE.MathUtils.lerp(
        group.current.position.z,
        0.6,
        0.04
      );
      group.current.scale.setScalar(
        THREE.MathUtils.lerp(group.current.scale.x, 1.15, 0.04)
      );
    } else if (phase === "boot" || phase === "reveal") {
      group.current.position.z = THREE.MathUtils.lerp(
        group.current.position.z,
        0,
        0.06
      );
      group.current.scale.setScalar(
        THREE.MathUtils.lerp(group.current.scale.x, 1, 0.06)
      );
    }

    if (screenMat.current) {
      const target = screenOn ? 1.8 : 0.05;
      screenMat.current.emissiveIntensity = THREE.MathUtils.lerp(
        screenMat.current.emissiveIntensity,
        target,
        0.08
      );
    }
    if (glow.current) {
      glow.current.opacity = THREE.MathUtils.lerp(
        glow.current.opacity,
        screenOn ? 0.35 : 0,
        0.08
      );
    }
  });

  const chassis = useMemo(() => new THREE.Color("#1a1a1a"), []);
  const accent = useMemo(() => new THREE.Color("#e11d48"), []);
  const phosphor = useMemo(() => new THREE.Color("#9dffb0"), []);

  return (
    <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.15}>
      <group ref={group} position={[0, -0.15, 0]}>
        {/* Monitor body */}
        <mesh castShadow position={[0, 0.55, 0]}>
          <boxGeometry args={[2.4, 1.55, 0.35]} />
          <meshStandardMaterial color={chassis} roughness={0.55} metalness={0.2} />
        </mesh>

        {/* Bezel inset */}
        <mesh position={[0, 0.55, 0.185]}>
          <boxGeometry args={[2.15, 1.3, 0.04]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.8} />
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0.55, 0.22]}>
          <planeGeometry args={[1.95, 1.1]} />
          <meshStandardMaterial
            ref={screenMat}
            color="#07110a"
            emissive={phosphor}
            emissiveIntensity={0.05}
            roughness={0.35}
            metalness={0.1}
          />
        </mesh>

        {/* Soft screen glow plane */}
        <mesh position={[0, 0.55, 0.23]}>
          <planeGeometry args={[2.05, 1.2]} />
          <meshStandardMaterial
            ref={glow}
            color={phosphor}
            transparent
            opacity={0}
            depthWrite={false}
          />
        </mesh>

        {/* Power LED */}
        <mesh position={[1.05, -0.1, 0.2]}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshStandardMaterial
            color={accent}
            emissive={accent}
            emissiveIntensity={screenOn ? 2 : 0.4}
          />
        </mesh>

        {/* Stand neck */}
        <mesh position={[0, -0.35, 0]}>
          <cylinderGeometry args={[0.08, 0.1, 0.35, 12]} />
          <meshStandardMaterial color="#222" roughness={0.5} metalness={0.3} />
        </mesh>

        {/* Base */}
        <mesh position={[0, -0.55, 0.05]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[1.1, 0.08, 0.7]} />
          <meshStandardMaterial color="#141414" roughness={0.6} metalness={0.25} />
        </mesh>

        {/* Keyboard */}
        <mesh position={[0, -0.72, 0.55]} castShadow>
          <boxGeometry args={[1.8, 0.08, 0.65]} />
          <meshStandardMaterial color="#111" roughness={0.7} />
        </mesh>
        {/* Keycaps row suggestion */}
        {[-0.6, -0.3, 0, 0.3, 0.6].map((x) => (
          <mesh key={x} position={[x, -0.66, 0.55]}>
            <boxGeometry args={[0.2, 0.04, 0.2]} />
            <meshStandardMaterial color="#2a2a2a" roughness={0.5} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

function MangaPlanes({ visible }: { visible: boolean }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    ref.current.visible = visible;
  });

  const panels = useMemo(
    () =>
      [
        { pos: [-2.8, 1.2, -1.5] as [number, number, number], rot: 0.4, w: 1.4, h: 1.8 },
        { pos: [2.6, 0.8, -1.2] as [number, number, number], rot: -0.35, w: 1.6, h: 1.2 },
        { pos: [-2.2, -0.9, -0.8] as [number, number, number], rot: 0.25, w: 1.2, h: 1.4 },
        { pos: [2.4, -1.0, -1.6] as [number, number, number], rot: -0.5, w: 1.5, h: 1.5 },
      ] as const,
    []
  );

  return (
    <group ref={ref}>
      {panels.map((p, i) => (
        <mesh key={i} position={p.pos} rotation={[0, p.rot, 0]}>
          <planeGeometry args={[p.w, p.h]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? "#111" : "#1a1a1a"}
            roughness={0.9}
            side={THREE.DoubleSide}
            transparent
            opacity={visible ? 0.85 : 0}
          />
        </mesh>
      ))}
    </group>
  );
}

function SceneLights({ boot }: { boot: boolean }) {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[4, 6, 4]}
        intensity={1.1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight
        position={[0, 0.6, 1.5]}
        intensity={boot ? 1.4 : 0.2}
        color="#9dffb0"
        distance={6}
      />
      <pointLight position={[-3, 2, 2]} intensity={0.4} color="#e11d48" />
    </>
  );
}

export type CrtSceneProps = {
  phase: Phase;
  screenOn: boolean;
  className?: string;
};

export default function CrtScene3D({ phase, screenOn, className }: CrtSceneProps) {
  const showPanels = phase === "idle" || phase === "reveal" || phase === "push";

  return (
    <div className={className} aria-hidden>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0.3, 4.2], fov: 42, near: 0.1, far: 40 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ width: "100%", height: "100%", background: "transparent" }}
      >
        <color attach="background" args={["#000000"]} />
        <fog attach="fog" args={["#000000", 6, 14]} />
        <SceneLights boot={screenOn} />
        <MangaPlanes visible={showPanels} />
        <CRTMonitor phase={phase} screenOn={screenOn} />
        <Environment preset="city" environmentIntensity={0.25} />
      </Canvas>
    </div>
  );
}
