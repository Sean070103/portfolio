"use client";

import { testimonials } from "@/content/testimonials";
import { SectionHeading, Panel } from "@/components/editorial/primitives";
import { useScrollReveal } from "@/hooks/useAnime";

export default function TestimonialsSection() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 100 });

  return (
    <section id="testimonials" ref={ref} className="py-16 md:py-24 scroll-mt-20">
      <div className="container-editorial">
        <SectionHeading
          number="07"
          label="Testimonials"
          title="Signals from collaborators."
          subtitle="Editable quotes from recent contexts—replace with verified client lines anytime."
        />

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((t, i) => (
            <Panel
              key={t.name}
              thick
              data-reveal
              className={`p-6 md:p-8 flex flex-col justify-between min-h-[300px] ${
                i === 1 ? "md:-translate-y-8 md:border-accent" : ""
              } ${i === 2 ? "md:translate-y-4" : ""}`}
            >
              <div>
                <span className="font-display text-6xl text-accent leading-none">&ldquo;</span>
                <blockquote className="mt-2 font-display text-xl md:text-2xl leading-snug">
                  {t.quote}
                </blockquote>
              </div>
              <footer className="mt-8 pt-4 border-t-2 border-border">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  {t.role}
                </p>
              </footer>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}
