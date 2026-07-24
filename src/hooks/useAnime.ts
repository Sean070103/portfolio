"use client";

import { useEffect, useRef } from "react";
import { animate, createTimeline } from "animejs";
import type { Timeline } from "animejs";
import { useReducedMotion } from "./useReducedMotion";

type RevealOptions = {
  y?: number;
  scale?: number;
  rotate?: number;
  duration?: number;
  delay?: number;
  stagger?: number;
  once?: boolean;
  /** Camera-style: slight scale + translate instead of plain fade */
  camera?: boolean;
};

export function useScrollReveal<T extends HTMLElement>(
  options: RevealOptions = {}
) {
  const {
    y = 56,
    scale = 0.96,
    rotate = 0,
    duration = 1000,
    delay = 0,
    stagger: staggerMs = 90,
    once = true,
    camera = true,
  } = options;
  const ref = useRef<T>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!targets.length) return;

    if (reduced) {
      targets.forEach((t) => {
        t.style.opacity = "1";
        t.style.transform = "none";
      });
      return;
    }

    const items = Array.from(targets);

    items.forEach((t, i) => {
      t.style.opacity = "0";
      t.style.willChange = "transform, opacity";
      const rot = camera ? (i % 2 === 0 ? -rotate || -1.2 : rotate || 1.2) : 0;
      const sc = camera ? scale : 1;
      t.style.transform = `translate3d(0, ${y}px, 0) scale(${sc}) rotate(${rot}deg)`;
    });

    // Observe each reveal target (not the tall section). A section with many
    // case studies never hits threshold 0.12 of its full height, so items
    // stayed stuck at opacity 0.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          const index = items.indexOf(target);
          animate(target, {
            opacity: [0, 1],
            y: [y, 0],
            scale: camera ? [scale, 1] : 1,
            rotate: 0,
            duration,
            delay: delay + Math.max(0, index) * (staggerMs * 0.35),
            ease: "outExpo",
          });
          if (once) observer.unobserve(target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [reduced, y, scale, rotate, duration, delay, staggerMs, once, camera]);

  return ref;
}

export function useAnimeTimeline(
  factory: () => Timeline | null | undefined,
  deps: unknown[] = []
) {
  const reduced = useReducedMotion();
  const timelineRef = useRef<Timeline | null>(null);

  useEffect(() => {
    if (reduced) return;
    const tl = factory();
    timelineRef.current = tl ?? null;
    return () => {
      timelineRef.current?.pause();
      timelineRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, ...deps]);

  return timelineRef;
}

export { animate, createTimeline };
