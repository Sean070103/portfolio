"use client";

import Image from "next/image";

/** Manga city hero panel — illustration + editorial chrome overlays */
export default function MangaCityPanel({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden border-[4px] border-foreground bg-[#0c0c0c] group ${className}`}
      aria-hidden
    >
      <Image
        src="/projects/manga-city-hero.png"
        alt=""
        fill
        priority
        sizes="(max-width: 1280px) 90vw, 48vw"
        className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.04]"
      />

      {/* Ink / print overlays */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #000 0.7px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/55 via-transparent to-black/25" />

      {/* Corner brackets */}
      <span className="absolute top-3 left-3 w-7 h-7 border-t-[3px] border-l-[3px] border-paper" />
      <span className="absolute top-3 right-3 w-7 h-7 border-t-[3px] border-r-[3px] border-paper" />
      <span className="absolute bottom-3 left-3 w-7 h-7 border-b-[3px] border-l-[3px] border-paper" />
      <span className="absolute bottom-3 right-3 w-7 h-7 border-b-[3px] border-r-[3px] border-paper" />

      {/* Masthead — kept light so it doesn't fight the art */}
      <div className="absolute top-4 left-4 z-10 max-w-[70%]">
        <p className="font-display text-xl sm:text-2xl text-paper leading-none drop-shadow-md">
          開発者
        </p>
        <p className="mt-1 font-mono text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-accent font-bold">
          SeanDev × Skyrant
        </p>
      </div>

      {/* Sound-effect stamp — inset so it doesn't clip */}
      <div className="absolute top-[28%] right-4 rotate-12 z-10">
        <span className="inline-block bg-accent text-accent-foreground font-display text-lg px-2.5 py-1 border-[3px] border-foreground shadow-[3px_3px_0_0_#000]">
          轟
        </span>
      </div>

      <div className="absolute bottom-5 left-5 right-5 z-10 flex items-end justify-between gap-3">
        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-paper/80">
          Panel · Night City
        </p>
        <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-accent">
          Issue 01
        </p>
      </div>
    </div>
  );
}
