"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { createTimeline, utils } from "animejs";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIntro } from "./IntroContext";
import InkOverlay from "./InkOverlay";
import MangaPanelCollage from "./MangaPanelCollage";
import Image from "next/image";
import type { CrtSceneProps } from "./CrtScene3D";

const CrtScene3D = dynamic(() => import("./CrtScene3D"), {
  ssr: false,
  loading: () => null,
});

/**
 * Anime opening:
 * Black → Title card → Rapid manga spreads → CRT slam → Boot/type → Ink burst → Portfolio
 */
export default function CinematicIntro() {
  const rootRef = useRef<HTMLDivElement>(null);
  const typeRef = useRef<HTMLPreElement>(null);
  const reduced = useReducedMotion();
  const { introComplete, skipIntro, markComplete, hydrated } = useIntro();
  const [phase, setPhase] = useState<CrtSceneProps["phase"]>("idle");
  const [screenOn, setScreenOn] = useState(false);
  const [show3d, setShow3d] = useState(false);
  const [webglOk, setWebglOk] = useState(true);

  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      setWebglOk(!!(c.getContext("webgl") || c.getContext("experimental-webgl")));
    } catch {
      setWebglOk(false);
    }
  }, []);

  useEffect(() => {
    if (!hydrated || introComplete || reduced) return;
    const root = rootRef.current;
    if (!root) return;

    document.body.style.overflow = "hidden";

    const black = root.querySelector<HTMLElement>("[data-scene='black']");
    const title = root.querySelector<HTMLElement>("[data-scene='title']");
    const spreads = Array.from(
      root.querySelectorAll<HTMLElement>("[data-manga-spread]")
    );
    const sceneCrt = root.querySelector<HTMLElement>("[data-scene='crt']");
    const scene3d = root.querySelector<HTMLElement>("[data-scene='3d']");
    const sceneDesktop = root.querySelector<HTMLElement>("[data-scene='desktop']");
    const sceneOutro = root.querySelector<HTMLElement>("[data-scene='outro']");
    const bootLines = root.querySelectorAll<HTMLElement>("[data-boot-line]");
    const bootProgress = root.querySelector<HTMLElement>("[data-boot-progress]");
    const cursor = root.querySelector<HTMLElement>("[data-cursor]");
    const screenOnEl = root.querySelector<HTMLElement>("[data-screen-on]");
    const typeEl = typeRef.current;
    const outroBits = root.querySelectorAll<HTMLElement>("[data-outro-bit]");
    const outroPanel = root.querySelector<HTMLElement>("[data-outro-panel]");
    const flash = root.querySelector<HTMLElement>("[data-white-flash]");
    const redFlash = root.querySelector<HTMLElement>("[data-red-flash]");
    const sfx = root.querySelectorAll<HTMLElement>("[data-sfx]");
    const speed = root.querySelectorAll<HTMLElement>("[data-speed]");
    const particles = root.querySelectorAll<HTMLElement>("[data-particle]");
    const titleBits = root.querySelectorAll<HTMLElement>("[data-title]");

    utils.set(black!, { opacity: 1 });
    utils.set(title!, { opacity: 0 });
    utils.set(titleBits, { opacity: 0, scale: 0.8, y: 24 });
    utils.set(spreads, { opacity: 0, scale: 1.15 });
    utils.set(sceneCrt!, { opacity: 0 });
    if (scene3d) utils.set(scene3d, { opacity: 0 });
    utils.set(sceneDesktop!, { opacity: 0 });
    utils.set(sceneOutro!, { opacity: 0 });
    utils.set(bootLines, { opacity: 0 });
    utils.set(cursor!, { opacity: 0 });
    utils.set(outroBits, { opacity: 0, y: 28 });
    if (outroPanel) utils.set(outroPanel, { opacity: 0, scale: 1.12, y: 40 });
    utils.set(flash!, { opacity: 0 });
    utils.set(redFlash!, { opacity: 0 });
    utils.set(sfx, { opacity: 0, scale: 0.6, rotate: -12 });
    utils.set(root.querySelectorAll("[data-panel-sfx]"), {
      opacity: 0,
      scale: 1.6,
      rotate: -10,
    });
    utils.set(speed, { opacity: 0, scaleX: 0 });
    utils.set(particles, { opacity: 0 });
    if (screenOnEl) utils.set(screenOnEl, { opacity: 0 });
    if (bootProgress) utils.set(bootProgress, { width: "0%" });
    if (typeEl) typeEl.textContent = "";

    setPhase("idle");
    setScreenOn(false);
    setShow3d(false);

    const typeTimers: number[] = [];

    const tl = createTimeline({
      defaults: { ease: "outExpo" },
      onComplete: () => {
        typeTimers.forEach((id) => window.clearTimeout(id));
        document.body.style.overflow = "";
        markComplete();
      },
    });

    // 0 — BLACK / BOOT DUST
    tl.add(particles, { opacity: [0, 0.7], duration: 900, delay: utils.stagger(35) }, 0)
      .add(black!, { opacity: [1, 1] }, 0)

      // 1 — TITLE CARD slam (hold so it lands)
      .add(black!, { opacity: [1, 0], duration: 350 }, 900)
      .add(title!, { opacity: [0, 1], duration: 280 }, 940)
      .add(
        titleBits,
        {
          opacity: [0, 1],
          scale: [1.35, 1],
          y: [28, 0],
          duration: 700,
          delay: utils.stagger(110),
          ease: "outBack",
        },
        980
      )
      .add(redFlash!, { opacity: [0, 0.5, 0], duration: 420, ease: "linear" }, 980)
      .add(sfx[0]!, { opacity: [0, 1], scale: [1.6, 1], rotate: [-18, -8], duration: 520 }, 1100)
      .add(title!, { opacity: [1, 0], duration: 320 }, 2800)

      // 2 — MANGA SPREADS (readable cuts, not flashes)
      .call(() => setPhase("reveal"), 2900);

    const spreadGap = 1450;
    const spreadHold = 1180;

    spreads.forEach((spread, i) => {
      const t = 2950 + i * spreadGap;
      const panelSfx = spread.querySelectorAll<HTMLElement>("[data-panel-sfx]");

      tl.add(flash!, { opacity: [0, 0.85, 0], duration: 220, ease: "linear" }, t)
        .add(
          spread,
          {
            opacity: [0, 1],
            scale: [1.12, 1],
            duration: 480,
            ease: "outQuart",
          },
          t
        )
        .add(
          speed,
          {
            opacity: [0, 0.75, 0],
            scaleX: [0, 1.05],
            duration: 520,
            delay: utils.stagger(28),
            ease: "outQuad",
          },
          t + 60
        );

      if (panelSfx.length) {
        tl.add(
          panelSfx,
          {
            opacity: [0, 1],
            scale: [1.55, 1],
            rotate: [i % 2 === 0 ? -14 : 10, i % 2 === 0 ? -6 : 4],
            duration: 560,
            delay: utils.stagger(100),
            ease: "outBack",
          },
          t + 160
        );
      }

      if (sfx[i + 1]) {
        tl.add(
          sfx[i + 1]!,
          {
            opacity: [0, 1, 1, 0],
            scale: [1.6, 1],
            rotate: [i % 2 === 0 ? -12 : 8, i % 2 === 0 ? -5 : 3],
            duration: 700,
            ease: "outBack",
          },
          t + 120
        );
      }

      // Hold then cut away (except last)
      if (i < spreads.length - 1) {
        tl.add(spread, { opacity: [1, 0], scale: [1, 1.04], duration: 220 }, t + spreadHold);
      }
    });

    const afterManga = 2950 + spreads.length * spreadGap + 200;

    // 3 — CRT PUSH / BOOT
    tl.call(() => {
      setPhase("push");
      setShow3d(true);
    }, afterManga)
      .add(spreads[spreads.length - 1]!, { opacity: [1, 0], duration: 500 }, afterManga)
      .add(sceneCrt!, { opacity: [0, 1], duration: 600 }, afterManga)
      .add(scene3d!, { opacity: [0, 1], duration: 900 }, afterManga + 280)
      .add(sceneDesktop!, { opacity: [0, 1], duration: 700 }, afterManga + 450)
      .add(redFlash!, { opacity: [0, 0.3, 0], duration: 400 }, afterManga)

      .call(() => {
        setPhase("boot");
        setScreenOn(true);
      }, afterManga + 850)
      .add(screenOnEl!, { opacity: [0, 1], duration: 550 }, afterManga + 900)
      .add(cursor!, { opacity: [0, 1], duration: 200 }, afterManga + 1300)
      .add(
        bootLines,
        { opacity: [0, 1], duration: 360, delay: utils.stagger(480) },
        afterManga + 1400
      )
      .add(
        bootProgress!,
        { width: ["0%", "100%"], duration: 1800, ease: "inOutQuad" },
        afterManga + 1800
      );

    const typeAt = afterManga + 3200;

    tl.call(() => {
      if (!typeEl) return;
      typeEl.textContent = "";
      const full = "> whoami\n\nSean Michael Andrew Mendoza_";
      let i = 0;
      const step = () => {
        if (i > full.length) return;
        typeEl.textContent = full.slice(0, i);
        const ch = full[i - 1];
        i += 1;
        const delay = ch === "\n" ? 160 : ch === " " ? 55 : 38 + Math.random() * 28;
        typeTimers.push(window.setTimeout(step, delay));
      };
      step();
    }, typeAt);

    const burstAt = typeAt + 3200;

    // 4 — CHAPTER GATE (manga city cut → portfolio)
    tl.call(() => setPhase("outro"), burstAt)
      .add(flash!, { opacity: [0, 1, 0], duration: 420, ease: "inOutQuad" }, burstAt)
      .add(redFlash!, { opacity: [0, 0.4, 0], duration: 380 }, burstAt + 40)
      .add(sceneDesktop!, { opacity: [1, 0], duration: 280 }, burstAt + 80)
      .add(scene3d!, { opacity: [1, 0], duration: 280 }, burstAt + 80)
      .add(sceneCrt!, { opacity: [1, 0], duration: 280 }, burstAt + 80)
      .add(sceneOutro!, { opacity: [0, 1], duration: 200 }, burstAt + 100)
      .add(
        outroPanel!,
        {
          opacity: [0, 1],
          scale: [1.14, 1],
          y: [48, 0],
          duration: 900,
          ease: "outQuart",
        },
        burstAt + 140
      )
      .add(
        speed,
        {
          opacity: [0, 0.7, 0],
          scaleX: [0, 1.05],
          duration: 600,
          delay: utils.stagger(22),
          ease: "outQuad",
        },
        burstAt + 180
      )
      .add(
        outroBits,
        {
          opacity: [0, 1],
          y: [24, 0],
          duration: 700,
          delay: utils.stagger(120),
          ease: "outBack",
        },
        burstAt + 420
      )
      .add(
        sfx[sfx.length - 1]!,
        {
          opacity: [0, 1],
          scale: [1.7, 1],
          rotate: [12, 6],
          duration: 650,
          ease: "outBack",
        },
        burstAt + 520
      )
      .add(
        outroPanel!,
        { scale: [1, 1.06], duration: 1400, ease: "inOutQuad" },
        burstAt + 1100
      )
      .add(root, { opacity: [1, 0], duration: 1000, ease: "inOutQuad" }, burstAt + 2400);

    return () => {
      tl.pause();
      typeTimers.forEach((id) => window.clearTimeout(id));
      document.body.style.overflow = "";
    };
  }, [hydrated, introComplete, reduced, markComplete]);

  if (!hydrated || introComplete || reduced) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] bg-black overflow-hidden text-white"
      role="dialog"
      aria-modal="true"
      aria-label="Anime opening sequence"
    >
      <div className="intro-grain absolute inset-0 z-40 pointer-events-none" aria-hidden />
      <InkOverlay active />

      <div data-white-flash className="absolute inset-0 z-[55] bg-white pointer-events-none opacity-0" />
      <div data-red-flash className="absolute inset-0 z-[54] bg-accent pointer-events-none opacity-0 mix-blend-screen" />

      {/* Speed lines layer */}
      <div className="absolute inset-0 z-[45] pointer-events-none overflow-hidden" aria-hidden>
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            data-speed
            className="absolute h-[2px] origin-left bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              top: `${6 + i * 7}%`,
              left: `${(i * 11) % 30}%`,
              width: `${55 + (i % 5) * 8}%`,
              transform: `skewY(${i % 2 === 0 ? -3 : 2}deg)`,
            }}
          />
        ))}
      </div>

      {/* SFX stamps */}
      <div className="absolute inset-0 z-[48] pointer-events-none" aria-hidden>
        {[
          { t: "ドン", x: "12%", y: "18%", r: -12 },
          { t: "ガシャン", x: "62%", y: "22%", r: 8 },
          { t: "ビーー", x: "18%", y: "68%", r: -6 },
          { t: "バン", x: "70%", y: "62%", r: 14 },
          { t: "ズドン", x: "40%", y: "40%", r: -4 },
          { t: "次へ", x: "58%", y: "28%", r: 8 },
        ].map((s, i) => (
          <span
            key={i}
            data-sfx
            className="absolute font-display text-4xl sm:text-6xl md:text-7xl text-accent drop-shadow-[4px_4px_0_#000] opacity-0"
            style={{ left: s.x, top: s.y, transform: `rotate(${s.r}deg)` }}
          >
            {s.t}
          </span>
        ))}
      </div>

      {/* Particles */}
      <div className="absolute inset-0 z-[5]" aria-hidden>
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            data-particle
            className="absolute w-1 h-1 rounded-full bg-white/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* BLACK */}
      <div data-scene="black" className="absolute inset-0 z-[8] bg-black flex items-end p-8">
        <p className="font-mono text-[10px] sm:text-xs tracking-[0.4em] uppercase text-white/60">
          The system is booting...
        </p>
      </div>

      {/* TITLE CARD */}
      <div
        data-scene="title"
        className="absolute inset-0 z-[20] flex flex-col items-center justify-center bg-black opacity-0"
      >
        <div className="intro-halftone absolute inset-0 opacity-30" />
        <p data-title className="font-mono text-[10px] tracking-[0.5em] uppercase text-accent mb-4">
          Episode 01
        </p>
        <h2
          data-title
          className="font-display font-bold uppercase text-5xl sm:text-7xl md:text-8xl leading-none text-center px-4"
        >
          Opening
        </h2>
        <div data-title className="mt-5 flex items-center gap-3">
          <span className="h-1 w-10 bg-accent skew-x-[-20deg]" />
          <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-white/50">
            SeanDev Production
          </span>
          <span className="h-1 w-10 bg-white/40 skew-x-[-20deg]" />
        </div>
      </div>

      {/* MANGA SPREAD 1 — Overlapping desk panels */}
      <div data-manga-spread className="absolute inset-0 z-[22] opacity-0">
        <MangaPanelCollage variant="desk" />
      </div>

      {/* MANGA SPREAD 2 — Action cut / burst */}
      <div data-manga-spread className="absolute inset-0 z-[23] opacity-0">
        <MangaPanelCollage variant="burst" />
      </div>

      {/* MANGA SPREAD 3 — Extreme close / impact */}
      <div data-manga-spread className="absolute inset-0 z-[24] opacity-0">
        <MangaPanelCollage variant="impact" />
      </div>

      {/* CRT STAGE */}
      <div data-scene="crt" className="absolute inset-0 z-[26] opacity-0 pointer-events-none">
        <div data-scene="3d" className="absolute inset-0 opacity-0">
          {show3d && webglOk ? (
            <CrtScene3D phase={phase} screenOn={screenOn} className="absolute inset-0" />
          ) : null}
        </div>

        <div
          data-scene="desktop"
          className="absolute inset-0 z-10 flex items-center justify-center opacity-0"
        >
          <div className="relative w-[min(92vw,640px)] aspect-[16/10] border-[4px] border-white bg-black/70 overflow-hidden shadow-[0_0_0_4px_#E11D48]">
            <div className="absolute top-0 inset-x-0 h-8 border-b-[3px] border-white/40 flex items-center px-3 gap-2 bg-black/90 z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              <span className="font-mono text-[10px] tracking-[0.25em] text-white/60">
                SEANDEV — TERMINAL
              </span>
            </div>
            <div data-screen-on className="absolute inset-0 top-8 opacity-0 overflow-hidden">
              <div className="crt-scanlines absolute inset-0 pointer-events-none opacity-50" />
              <div className="relative z-10 p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed text-[#9dffb0]">
                <p data-boot-line className="opacity-0">
                  &gt; INITIALIZING...
                </p>
                <p data-boot-line className="opacity-0">
                  &gt; LOADING PORTFOLIO...
                </p>
                <p data-boot-line className="opacity-0">
                  &gt; PLEASE WAIT...
                </p>
                <div
                  data-boot-line
                  className="mt-3 h-2.5 w-full max-w-xs border-2 border-[#9dffb0]/50 opacity-0 overflow-hidden"
                >
                  <div data-boot-progress className="h-full w-0 bg-[#9dffb0]" />
                </div>
                <pre
                  ref={typeRef}
                  className="mt-4 whitespace-pre-wrap text-[#c8ffd4] min-h-[6rem]"
                  aria-live="polite"
                />
                <span
                  data-cursor
                  className="inline-block w-2.5 h-4 bg-[#9dffb0] align-middle animate-pulse opacity-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CHAPTER GATE — manga city cut into portfolio */}
      <div
        data-scene="outro"
        className="absolute inset-0 z-[30] flex items-center justify-center opacity-0 bg-[#0a0a0a]"
      >
        <div className="intro-halftone absolute inset-0 opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#000_90%)]" />

        <div
          data-outro-panel
          className="relative z-10 w-[min(92vw,820px)] aspect-[16/10] border-[5px] border-white bg-black overflow-hidden shadow-[12px_12px_0_0_#E11D48] -rotate-1"
        >
          <Image
            src="/projects/manga-city-hero.png"
            alt=""
            fill
            className="object-cover opacity-90"
            sizes="90vw"
            priority
          />
          <div className="absolute inset-0 intro-halftone opacity-40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3 z-10">
            <span
              data-outro-bit
              className="slash-accent text-[10px] sm:text-[11px]"
            >
              <span>Chapter 01</span>
            </span>
            <span
              data-outro-bit
              className="font-mono text-[9px] tracking-[0.3em] uppercase text-white/70 border border-white/40 px-2 py-1 bg-black/50"
            >
              Portfolio Online
            </span>
          </div>

          <div className="absolute bottom-5 left-5 right-5 z-10">
            <p
              data-outro-bit
              className="font-mono text-[10px] tracking-[0.4em] uppercase text-accent mb-2"
            >
              End of opening · Start of build
            </p>
            <p
              data-outro-bit
              className="font-display font-bold uppercase text-3xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight text-white"
            >
              Enter the
              <br />
              <span className="text-accent">Build</span>
            </p>
            <p
              data-outro-bit
              className="mt-3 font-mono text-[10px] sm:text-xs tracking-[0.22em] uppercase text-white/60"
            >
              Full Stack · Digital Products · SeanDev
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={skipIntro}
        className="absolute bottom-5 right-5 z-[60] text-[10px] uppercase tracking-[0.25em] text-white/50 hover:text-accent border-2 border-white/25 hover:border-accent px-3 py-2 transition-colors bg-black/40"
      >
        Skip Intro
      </button>
    </div>
  );
}
