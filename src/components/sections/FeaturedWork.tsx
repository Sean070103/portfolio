"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getFeaturedProjects } from "@/content/projects";
import { SectionHeading, Panel, Halftone } from "@/components/editorial/primitives";
import InkStamp from "@/components/editorial/InkStamp";
import PanelWipe from "@/components/editorial/PanelWipe";
import { useScrollReveal } from "@/hooks/useAnime";

export default function FeaturedWork() {
  const projects = getFeaturedProjects();
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="work" ref={ref} className="py-16 md:py-24 scroll-mt-20">
      <PanelWipe targetId="work" />

      <div className="container-editorial">
        <SectionHeading
          number="02"
          label="Featured Work"
          title="Case studies, not cards."
          subtitle="Immersive storytelling for products that needed presence, performance, and point of view."
        />

        <div className="space-y-10 md:space-y-16">
          {projects.map((project, i) => {
            const odd = i % 2 === 1;
            return (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                data-reveal
                className="group block relative"
              >
                <span
                  className={`ghost-type hidden lg:block absolute -top-10 text-[8rem] z-0 ${
                    odd ? "left-0" : "right-0"
                  }`}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <Panel
                  thick
                  className={`relative z-10 grid md:grid-cols-12 min-h-[340px] md:min-h-[480px] ${
                    odd ? "md:-rotate-[0.5deg]" : "md:rotate-[0.5deg]"
                  } group-hover:rotate-0 transition-transform duration-500 shadow-[8px_8px_0_0_transparent] group-hover:shadow-[8px_8px_0_0_var(--accent)]`}
                >
                  <div
                    className={`relative md:col-span-7 overflow-hidden bg-charcoal min-h-[220px] ${
                      odd ? "md:order-2" : ""
                    }`}
                  >
                    <Halftone className="z-10 opacity-[0.18]" />
                    <Image
                      src={project.heroImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="project-crt-glitch absolute inset-0 z-[12]" aria-hidden />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 slash-accent z-20">
                      <span>{String(i + 1).padStart(2, "0")}</span>
                    </span>
                    <InkStamp
                      index={i}
                      className={odd ? "top-6 right-5" : "bottom-8 right-6"}
                    />
                  </div>

                  <div
                    className={`md:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between ${
                      odd ? "md:order-1" : ""
                    }`}
                  >
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">
                        {project.client} · {project.year}
                      </p>
                      <h3 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-[0.95] group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed border-l-4 border-foreground/20 pl-4">
                        {project.overview}
                      </p>
                    </div>

                    <div className="mt-8 flex items-end justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {project.stack.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] uppercase tracking-wider border-2 border-foreground/40 px-2 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] font-semibold text-accent shrink-0">
                        Open
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Panel>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
