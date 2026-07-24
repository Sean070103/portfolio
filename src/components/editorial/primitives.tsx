import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("slash-accent", className)} data-reveal>
      <span>{children}</span>
    </span>
  );
}

export function Panel({
  children,
  className,
  thick,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  thick?: boolean;
}) {
  return (
    <div
      className={cn(
        "panel relative overflow-hidden paper-sheet",
        thick && "panel-thick",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function Halftone({ className }: { className?: string }) {
  return <div className={cn("halftone absolute inset-0", className)} aria-hidden />;
}

export function GrainOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[60] opacity-[var(--grain-opacity)]"
      aria-hidden
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        mixBlendMode: "overlay",
      }}
    />
  );
}

export function SpeedLine({ className }: { className?: string }) {
  return <div className={cn("speed-line my-8 md:my-12", className)} aria-hidden />;
}

export function InkSplash({ className }: { className?: string }) {
  return (
    <svg
      className={cn("pointer-events-none absolute text-foreground/10", className)}
      viewBox="0 0 200 200"
      fill="currentColor"
      aria-hidden
    >
      <path d="M100 12c18 22 48 18 62 38 14 20 8 48-6 68-12 16-34 28-56 34-28 8-58-2-74-24-14-20-12-50 4-70 14-18 42-32 70-46z" />
      <circle cx="42" cy="58" r="6" />
      <circle cx="158" cy="48" r="4" />
      <circle cx="168" cy="132" r="8" />
      <circle cx="36" cy="140" r="3" />
    </svg>
  );
}

export function SectionHeading({
  label,
  title,
  subtitle,
  number,
}: {
  label: string;
  title: string;
  subtitle?: string;
  number?: string;
}) {
  return (
    <div className="mb-14 md:mb-20 relative">
      {number ? (
        <span
          className="ghost-type absolute -top-8 md:-top-14 -right-2 md:right-0 text-[clamp(5rem,18vw,12rem)]"
          aria-hidden
          data-reveal
        >
          {number}
        </span>
      ) : null}
      <div className="relative max-w-3xl">
        <SectionLabel>{label}</SectionLabel>
        <h2
          className="mt-5 font-display text-[clamp(2.75rem,7vw,5.75rem)] tracking-[-0.035em]"
          data-reveal
        >
          {title}
        </h2>
        {subtitle ? (
          <p
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed border-l-4 border-accent pl-4"
            data-reveal
          >
            {subtitle}
          </p>
        ) : null}
        <span className="accent-rule" data-reveal />
      </div>
    </div>
  );
}
