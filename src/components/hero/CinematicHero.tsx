"use client";

import { useEffect, useMemo, useRef } from "react";
import { animate, createTimeline, utils } from "animejs";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Halftone } from "@/components/editorial/primitives";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMouseParallax } from "@/hooks/useMouseParallax";
import { useIntro } from "@/components/intro/IntroContext";
import MangaCityPanel from "./MangaCityPanel";

/** One name word per line — never mid-word wrap */
function LetterLine({ text }: { text: string }) {
  const chars = useMemo(() => text.split(""), [text]);
  return (
    <span className="block w-full whitespace-nowrap">
      {chars.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          data-letter
          className="inline-block will-change-transform"
        >
          {ch}
        </span>
      ))}
    </span>
  );
}

export default function CinematicHero() {
  const stageRef = useRef<HTMLElement>(null);
  const mouseRef = useMouseParallax<HTMLDivElement>(8);
  const reduced = useReducedMotion();
  const { introComplete } = useIntro();
  const livingRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    if (!introComplete) return;
    const root = stageRef.current;
    if (!root) return;

    const letters = root.querySelectorAll<HTMLElement>("[data-letter]");
    const support = root.querySelectorAll<HTMLElement>("[data-support]");
    const art = root.querySelector<HTMLElement>("[data-hero-art]");

    if (reduced) {
      [...letters, ...support].forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
      if (art) {
        art.style.opacity = "1";
        art.style.transform = "none";
      }
      return;
    }

    utils.set(letters, { opacity: 0, y: 36 });
    utils.set(support, { opacity: 0, y: 20 });
    if (art) utils.set(art, { opacity: 0, scale: 1.04, x: 32 });

    const tl = createTimeline({ defaults: { ease: "outExpo" } });
    tl.add(
      art!,
      {
        opacity: [0, 1],
        scale: [1.04, 1],
        x: [32, 0],
        duration: 1000,
      },
      0
    )
      .add(
        letters,
        {
          opacity: [0, 1],
          y: [36, 0],
          duration: 650,
          delay: utils.stagger(12),
          ease: "outQuart",
        },
        120
      )
      .add(
        support,
        {
          opacity: [0, 1],
          y: [20, 0],
          duration: 700,
          delay: utils.stagger(60),
        },
        360
      );

    livingRef.current = animate(art!, {
      y: [0, -4],
      duration: 5200,
      alternate: true,
      loop: true,
      ease: "inOutSine",
    });

    return () => {
      tl.pause();
      livingRef.current?.pause();
    };
  }, [introComplete, reduced]);

  return (
    <section
      id="home"
      ref={stageRef}
      className="relative min-h-[100svh] flex items-center pt-20 xl:pt-12 pb-20 xl:pb-16"
      aria-label="Introduction"
      style={{
        opacity: introComplete ? 1 : 0,
        pointerEvents: introComplete ? "auto" : "none",
      }}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 opacity-[0.28] paper-hero-wash" />
        <Halftone className="opacity-[0.05]" />
      </div>

      <div className="container-editorial w-full relative z-10">
        <div className="grid xl:grid-cols-12 gap-10 xl:gap-12 items-center">
          <div className="xl:col-span-6 order-2 xl:order-1 min-w-0">
            <p
              data-support
              className="mb-5 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.28em] uppercase text-muted-foreground"
            >
              <span className="inline-block w-8 h-[3px] bg-accent shrink-0" />
              開発者 · Issue 01
            </p>

            <h1 className="font-display font-bold uppercase text-[clamp(2.35rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.03em] [text-wrap:unset]">
              <LetterLine text="Sean" />
              <LetterLine text="Michael" />
              <LetterLine text="Andrew" />
              <LetterLine text="Mendoza" />
            </h1>

            <div data-support className="mt-6 max-w-full">
              <span className="slash-accent text-[10px] sm:text-[11px] max-w-full">
                <span className="whitespace-normal sm:whitespace-nowrap">
                  Full Stack Developer | Digital Product Engineer
                </span>
              </span>
            </div>

            <p
              data-support
              className="mt-6 max-w-md text-base md:text-lg text-muted-foreground leading-relaxed border-l-4 border-accent pl-4"
            >
              I build digital experiences and web applications that help
              businesses grow.
            </p>

            <div data-support className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="btn btn-primary">
                View Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="btn btn-accent">
                Start a Project
              </a>
            </div>

            <a
              href="#work"
              data-support
              className="mt-10 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowDown className="w-4 h-4 animate-bounce" />
              Turn the page
            </a>
          </div>

          <div className="xl:col-span-6 order-1 xl:order-2 min-w-0">
            <div
              ref={mouseRef}
              data-hero-art
              className="relative will-change-transform mx-auto w-full max-w-md xl:max-w-none"
            >
              <MangaCityPanel className="aspect-[4/5] w-full shadow-[10px_10px_0_0_var(--foreground)]" />
              <span className="absolute bottom-4 left-4 slash-accent z-20 pointer-events-none">
                <span>Panel 01 · Home</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
