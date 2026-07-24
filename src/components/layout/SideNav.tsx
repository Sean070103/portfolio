"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { useIntro } from "@/components/intro/IntroContext";
import { cn } from "@/lib/utils";

export default function SideNav() {
  const { introComplete } = useIntro();
  const [active, setActive] = useState("#home");
  const [punch, setPunch] = useState(false);

  useEffect(() => {
    const ids = site.nav.map((n) => n.href.replace("#", ""));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -45% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const chapter = String(
    Math.max(1, site.nav.findIndex((n) => n.href === active) + 1)
  ).padStart(2, "0");

  useEffect(() => {
    setPunch(true);
    const t = window.setTimeout(() => setPunch(false), 400);
    return () => window.clearTimeout(t);
  }, [chapter]);

  return (
    <aside
      className={cn(
        "hidden xl:flex fixed left-0 top-0 bottom-0 z-50 w-32 flex-col bg-ink text-paper transition-all duration-700",
        introComplete
          ? "opacity-100 translate-x-0"
          : "opacity-0 -translate-x-full pointer-events-none"
      )}
      aria-label="Primary"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.12) 0.6px, transparent 1px), radial-gradient(circle at 70% 60%, rgba(255,255,255,0.08) 0.5px, transparent 1px), radial-gradient(circle at 40% 80%, rgba(255,255,255,0.1) 0.7px, transparent 1px)",
          backgroundSize: "48px 64px, 36px 52px, 60px 40px",
        }}
        aria-hidden
      />

      <svg
        className="pointer-events-none absolute top-0 bottom-0 -right-[18px] h-full w-[22px] text-ink"
        viewBox="0 0 22 1000"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0 0 H10 L14 18 L9 36 L16 58 L8 82 L15 108 L7 130 L17 158 L9 184 L14 210 L6 238 L15 268 L8 294 L16 322 L7 350 L14 378 L9 406 L17 436 L8 462 L15 492 L6 520 L14 548 L9 576 L16 606 L7 634 L15 662 L8 690 L14 720 L6 748 L16 778 L9 804 L14 834 L7 860 L15 890 L8 918 L13 946 L9 972 L12 1000 H0 Z"
        />
      </svg>

      <div className="relative z-10 flex h-full flex-col px-5 py-8">
        <a
          href="#home"
          className={cn(
            "inline-block font-display text-[42px] leading-none font-bold tracking-tight text-accent hover:opacity-80 transition-opacity origin-left",
            punch && "chapter-punch"
          )}
          aria-label="Chapter home"
        >
          {chapter}
        </a>

        <nav className="mt-10 flex flex-1 flex-col gap-4">
          {site.nav.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
                  isActive
                    ? "font-bold text-paper"
                    : "font-medium text-paper/55 hover:text-paper"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto flex items-stretch gap-2.5 pt-8">
          <div className="relative flex w-[2px] shrink-0 flex-col items-center" aria-hidden>
            <span className="w-px flex-1 bg-accent" />
            <span className="mt-0 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          </div>
          <p className="font-mono text-[8px] leading-[1.45] tracking-[0.16em] uppercase text-paper/75">
            Available
            <br />
            for new
            <br />
            projects
          </p>
        </div>
      </div>
    </aside>
  );
}
