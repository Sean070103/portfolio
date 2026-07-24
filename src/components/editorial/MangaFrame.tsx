import { cn } from "@/lib/utils";

/** Magazine masthead / Persona-style chapter bar */
export function MangaFrame({
  chapter,
  label,
  className,
}: {
  chapter: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative border-y-[4px] border-foreground bg-card overflow-hidden",
        className
      )}
      aria-hidden
    >
      <div className="absolute inset-0 intro-halftone opacity-25" />
      <div
        className="absolute inset-y-0 right-0 w-1/3 opacity-40 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(-18deg, transparent, transparent 10px, color-mix(in oklab, var(--foreground) 8%, transparent) 10px, color-mix(in oklab, var(--foreground) 8%, transparent) 11px)",
        }}
      />
      {/* crimson slash strip */}
      <div
        className="absolute left-0 top-0 bottom-0 w-3 md:w-4 bg-accent"
        style={{ clipPath: "polygon(0 0, 100% 0, 40% 100%, 0 100%)" }}
      />

      <div className="container-editorial relative flex items-stretch justify-between gap-4 py-4 md:py-5 pl-4 md:pl-6">
        <div className="flex items-center gap-4 md:gap-6 min-w-0">
          <span className="font-display text-3xl md:text-5xl text-accent leading-none shrink-0 drop-shadow-[3px_3px_0_var(--foreground)]">
            {chapter}
          </span>
          <div className="min-w-0">
            <p className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
              Chapter / Portfolio
            </p>
            <p className="font-display text-lg md:text-2xl truncate mt-0.5">
              {label}
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <div className="flex gap-[3px]" aria-hidden>
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="block h-5 w-[3px] bg-foreground"
                style={{
                  transform: `skewX(-18deg)`,
                  opacity: 0.35 + (i % 3) * 0.2,
                }}
              />
            ))}
          </div>
          <span className="slash-accent">
            <span>VOL. 01</span>
          </span>
        </div>
      </div>
    </div>
  );
}
