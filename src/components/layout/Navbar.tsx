"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Github } from "lucide-react";
import { createTimeline, utils } from "animejs";
import { site } from "@/content/site";
import { useTheme } from "@/app/context/ThemeContext";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIntro } from "@/components/intro/IntroContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const reduced = useReducedMotion();
  const { introComplete } = useIntro();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open || reduced) return;
    const links = document.querySelectorAll("[data-menu-link]");
    createTimeline({ defaults: { ease: "outExpo" } }).add(links, {
      opacity: [0, 1],
      y: [40, 0],
      duration: 700,
      delay: utils.stagger(70),
    });
  }, [open, reduced]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 xl:left-32 xl:right-12",
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b-2 border-border"
            : "bg-transparent",
          introComplete
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <nav className="container-editorial flex items-center justify-between h-16 md:h-20">
          <Link
            href="/#home"
            className="font-display text-xl md:text-2xl tracking-tight hover:text-accent transition-colors flex items-center gap-2 xl:hidden"
          >
            <span className="inline-block w-2.5 h-2.5 bg-accent" aria-hidden />
            {site.brand}
          </Link>
          <span className="hidden xl:inline font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            SeanDev · Portfolio
          </span>

          <ul className="hidden lg:flex xl:hidden items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[10px] uppercase tracking-[0.2em] font-semibold px-3 py-2 border border-transparent hover:border-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 border-2 border-border hover:border-accent hover:text-accent transition-colors"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="https://github.com/Sean070103"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden sm:inline-flex p-2 border-2 border-border hover:border-accent hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              type="button"
              className="lg:hidden p-2 border-2 border-border hover:border-accent transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile panel menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-opacity duration-300",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!open}
      >
        <div className="absolute inset-0 bg-background grain" />
        <div className="relative h-full flex flex-col justify-center container-editorial pt-20">
          <ul className="space-y-2">
            {site.nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  data-menu-link
                  onClick={() => setOpen(false)}
                  className="block font-display text-5xl sm:text-6xl border-b-2 border-border py-3 hover:text-accent transition-colors"
                  style={reduced ? undefined : { opacity: 0 }}
                >
                  <span className="index-badge mr-4">{String(i + 1).padStart(2, "0")}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-muted-foreground text-sm">{site.availability}</p>
        </div>
      </div>
    </>
  );
}
