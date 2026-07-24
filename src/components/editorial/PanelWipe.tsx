"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

/** One-shot manga gutter wipe when a section enters view */
export default function PanelWipe({
  targetId = "work",
  className,
}: {
  targetId?: string;
  className?: string;
}) {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(false);
  const fired = useRef(false);

  useEffect(() => {
    if (reduced) return;
    const target = document.getElementById(targetId);
    if (!target) return;

    let hideTimer = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting || fired.current) return;
        fired.current = true;
        setActive(true);
        hideTimer = window.setTimeout(() => setActive(false), 780);
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(target);
    return () => {
      observer.disconnect();
      window.clearTimeout(hideTimer);
    };
  }, [targetId, reduced]);

  if (reduced || !active) return null;

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-[70] overflow-hidden",
        className
      )}
      aria-hidden
    >
      <div className="panel-wipe-bar absolute inset-y-[-10%] -left-[20%] w-[55%] bg-ink origin-left" />
      <div className="panel-wipe-accent absolute inset-y-[-10%] -left-[8%] w-[10%] bg-accent origin-left" />
      <div className="panel-wipe-flash absolute inset-0 bg-paper opacity-0" />
    </div>
  );
}
