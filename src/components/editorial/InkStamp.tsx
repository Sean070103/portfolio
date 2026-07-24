"use client";

import { cn } from "@/lib/utils";

const STAMPS = ["VIEW", "ガ", "!!", "開", "見ろ", "OPEN"] as const;

/** Manga SFX that stamp in on project card hover */
export default function InkStamp({
  index = 0,
  className,
}: {
  index?: number;
  className?: string;
}) {
  const label = STAMPS[index % STAMPS.length];
  const rotate = index % 2 === 0 ? -12 : 9;

  return (
    <span
      aria-hidden
      className={cn("ink-stamp pointer-events-none absolute z-30 select-none", className)}
      style={{ ["--stamp-rot" as string]: `${rotate}deg` }}
    >
      <span className="inline-block border-[3px] border-ink bg-accent px-2.5 py-1 font-display text-2xl font-bold leading-none text-paper shadow-[4px_4px_0_0_#0a0a0a] sm:text-3xl">
        {label}
      </span>
    </span>
  );
}
