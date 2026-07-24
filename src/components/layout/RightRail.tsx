"use client";

import { useIntro } from "@/components/intro/IntroContext";
import { cn } from "@/lib/utils";

export default function RightRail() {
  const { introComplete } = useIntro();

  return (
    <aside
      className={cn(
        "hidden xl:flex fixed right-0 top-0 bottom-0 z-40 w-12 items-center justify-center bg-ink text-paper border-l-[3px] border-ink transition-all duration-700 overflow-hidden",
        introComplete
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-full pointer-events-none"
      )}
      aria-hidden
    >
      <div className="absolute inset-y-0 right-0 w-1 bg-accent" />
      <p
        className="text-[9px] font-bold uppercase tracking-[0.32em] whitespace-nowrap px-1"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
        }}
      >
        Let&apos;s build something exceptional.
      </p>
    </aside>
  );
}
