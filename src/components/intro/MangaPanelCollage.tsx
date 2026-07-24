"use client";

import Image from "next/image";
import type { ReactNode } from "react";

/** Overlapping irregular manga panels — matches anime opening board energy */
export default function MangaPanelCollage({
  variant = "desk",
}: {
  variant?: "desk" | "burst" | "impact";
}) {
  if (variant === "desk") {
    return (
      <div className="absolute inset-0 bg-[#0a0a0a] overflow-hidden">
        <div className="absolute inset-0 intro-halftone opacity-40" />

        {/* Background full art */}
        <div className="absolute inset-3 sm:inset-5 border-[5px] border-white overflow-hidden -rotate-1 shadow-[8px_8px_0_0_#E11D48]">
          <Image
            src="/projects/intro-manga-spread.png"
            alt=""
            fill
            className="object-cover scale-105"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 mix-blend-multiply opacity-25 bg-[radial-gradient(circle,#000_0.8px,transparent_1.1px)] [background-size:5px_5px]" />
        </div>

        {/* Floating skewed panels over art */}
        <InkPanel
          className="absolute top-[8%] left-[4%] w-[38%] h-[42%] -rotate-3 z-20 skew-y-1"
          label="TYPE"
        >
          <Image
            src="/projects/intro-manga-spread.png"
            alt=""
            fill
            className="object-cover object-[15%_35%]"
            sizes="40vw"
          />
        </InkPanel>

        <InkPanel
          className="absolute top-[12%] right-[6%] w-[34%] h-[36%] rotate-2 z-20 -skew-x-2"
          label="CODE"
          accent
        >
          <Image
            src="/projects/intro-manga-spread.png"
            alt=""
            fill
            className="object-cover object-[75%_25%]"
            sizes="35vw"
          />
        </InkPanel>

        <InkPanel
          className="absolute bottom-[10%] left-[10%] w-[32%] h-[34%] rotate-1 z-20"
          label="NOTES"
        >
          <Image
            src="/projects/intro-manga-spread.png"
            alt=""
            fill
            className="object-cover object-[40%_80%]"
            sizes="35vw"
          />
        </InkPanel>

        <InkPanel
          className="absolute bottom-[8%] right-[8%] w-[40%] h-[38%] -rotate-2 z-20 skew-x-1"
          label="FOCUS"
        >
          <div className="absolute inset-0 bg-black" />
          <RadialBurst />
          <span className="relative z-10 font-display text-4xl sm:text-6xl text-white">集中</span>
        </InkPanel>

        {/* SFX crossing gutters */}
        <Sfx className="top-[6%] left-[36%] -rotate-12 text-5xl sm:text-7xl z-30">カチャ</Sfx>
        <Sfx className="top-[48%] right-[18%] rotate-6 text-4xl sm:text-6xl z-30">ガガ</Sfx>
        <Sfx className="bottom-[22%] left-[38%] -rotate-3 text-5xl sm:text-7xl z-30 text-accent">ドン</Sfx>

        <div className="absolute top-2 left-2 z-40 slash-accent">
          <span>02 · Manga Panels</span>
        </div>
      </div>
    );
  }

  if (variant === "burst") {
    return (
      <div className="absolute inset-0 bg-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <RadialBurst dense />
        </div>

        <InkPanel className="absolute top-[10%] left-[8%] w-[48%] h-[55%] -rotate-2 z-10" label="CRT" thick>
          <Image
            src="/projects/intro-manga-spread.png"
            alt=""
            fill
            className="object-cover object-[70%_40%]"
            sizes="50vw"
          />
        </InkPanel>

        <InkPanel className="absolute top-[18%] right-[5%] w-[36%] h-[28%] rotate-3 z-20" accent label="SFX">
          <span className="font-display text-5xl sm:text-7xl leading-none">轟</span>
        </InkPanel>

        <InkPanel className="absolute bottom-[12%] right-[10%] w-[42%] h-[40%] -rotate-1 z-20" label="STACK">
          <div className="relative z-10 font-mono text-[11px] sm:text-sm leading-relaxed text-left p-4 text-white">
            <p>&gt; next.js</p>
            <p>&gt; typescript</p>
            <p>&gt; anime.js</p>
            <p className="text-accent mt-2">&gt; building_</p>
          </div>
          <div className="absolute inset-0 intro-halftone opacity-30" />
        </InkPanel>

        <InkPanel className="absolute bottom-[8%] left-[6%] w-[28%] h-[24%] rotate-2 z-20" label="COFFEE">
          <Image
            src="/projects/intro-manga-spread.png"
            alt=""
            fill
            className="object-cover object-[55%_20%]"
            sizes="30vw"
          />
        </InkPanel>

        <Sfx className="top-[40%] left-[42%] rotate-12 text-6xl sm:text-8xl z-30">バン</Sfx>
        <Sfx className="bottom-[28%] left-[30%] -rotate-6 text-4xl sm:text-5xl z-30 text-accent">ビー</Sfx>

        <div className="absolute top-2 left-2 z-40 slash-accent">
          <span>03 · Action Cut</span>
        </div>
      </div>
    );
  }

  // impact
  return (
    <div className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center">
      <RadialBurst dense />
      <div className="relative z-10 w-[min(92vw,760px)] aspect-[16/10] border-[6px] border-white bg-[#0d0d0d] -rotate-1 shadow-[14px_14px_0_0_#E11D48] overflow-hidden">
        <Image
          src="/projects/intro-manga-spread.png"
          alt=""
          fill
          className="object-cover object-center opacity-90"
          sizes="90vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 intro-halftone opacity-35" />
        <div className="absolute bottom-6 left-6 right-6 z-10">
          <p className="font-mono text-[10px] tracking-[0.4em] text-accent mb-2">CLOSE-UP</p>
          <p className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-white">
            Initialize
          </p>
        </div>
      </div>
      <Sfx className="bottom-[12%] right-[6%] rotate-6 text-6xl sm:text-8xl z-30 text-accent">起動</Sfx>
      <div className="absolute top-2 left-2 z-40 slash-accent">
        <span>04 · Impact</span>
      </div>
    </div>
  );
}

function InkPanel({
  children,
  className = "",
  label,
  accent,
  thick,
}: {
  children: ReactNode;
  className?: string;
  label?: string;
  accent?: boolean;
  thick?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden border-white shadow-[5px_5px_0_0_#000] flex items-center justify-center ${
        thick ? "border-[5px]" : "border-[4px]"
      } ${accent ? "bg-accent border-black" : "bg-[#111]"} ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center">{children}</div>
      <div className="absolute inset-0 pointer-events-none intro-halftone opacity-20" />
      {label && (
        <span className="absolute bottom-1.5 right-2 z-10 font-mono text-[8px] tracking-[0.2em] uppercase text-white/70 mix-blend-difference">
          {label}
        </span>
      )}
    </div>
  );
}

function Sfx({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      data-panel-sfx
      className={`absolute font-display font-bold leading-none text-white drop-shadow-[5px_5px_0_#000] pointer-events-none select-none ${className}`}
      style={{ WebkitTextStroke: "1.5px #000" }}
    >
      {children}
    </span>
  );
}

function RadialBurst({ dense }: { dense?: boolean }) {
  const n = dense ? 28 : 16;
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40" aria-hidden>
      {Array.from({ length: n }).map((_, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 h-[2px] w-[95vmax] origin-left bg-gradient-to-r from-white via-white/50 to-transparent"
          style={{ transform: `rotate(${(i / n) * 360}deg)` }}
        />
      ))}
    </div>
  );
}
