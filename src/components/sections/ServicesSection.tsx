"use client";

import { services } from "@/content/services";
import { SectionHeading } from "@/components/editorial/primitives";
import { useScrollReveal } from "@/hooks/useAnime";

export default function ServicesSection() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 120 });

  return (
    <section id="services" ref={ref} className="py-16 md:py-24 scroll-mt-20">
      <div className="container-editorial">
        <SectionHeading
          number="04"
          label="Services"
          title="What I engineer."
          subtitle="Three focused offerings. No icon grids. No filler retainers."
        />

        <div className="space-y-5">
          {services.map((service, i) => (
            <article
              key={service.index}
              data-reveal
              className={`group relative border-[3px] border-foreground bg-card paper-sheet p-8 md:p-12 md:grid md:grid-cols-12 md:gap-10 hover:border-accent transition-colors ${
                i === 1 ? "md:translate-x-4 lg:translate-x-8" : ""
              } ${i === 2 ? "md:-translate-x-2" : ""}`}
            >
              <div
                className="absolute top-0 left-0 w-2 h-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"
                aria-hidden
              />
              <div className="md:col-span-2 mb-4 md:mb-0">
                <span className="font-display text-6xl md:text-7xl text-accent leading-none">
                  {service.index}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-3xl md:text-5xl leading-[0.95] group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <span className="accent-rule" />
              </div>
              <p className="md:col-span-6 mt-4 md:mt-0 text-muted-foreground leading-relaxed text-base md:text-lg md:border-l md:border-foreground/20 md:pl-8">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
