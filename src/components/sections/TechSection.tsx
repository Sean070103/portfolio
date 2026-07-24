"use client";

import { techCategories, techMarquee } from "@/content/tech";
import { SectionHeading, Panel } from "@/components/editorial/primitives";
import { useScrollReveal } from "@/hooks/useAnime";

export default function TechSection() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 80 });
  const loop = [...techMarquee, ...techMarquee];

  return (
    <section id="skills" ref={ref} className="py-16 md:py-24 scroll-mt-20 overflow-hidden">
      <div className="container-editorial">
        <SectionHeading
          number="05"
          label="Tech Stack"
          title="Tools with intent."
          subtitle="Editorial blocks—not logo soup. The stack behind premium apps and AI automation."
        />
      </div>

      <div className="border-y-2 border-border bg-card py-5 mb-12 overflow-hidden" aria-hidden>
        <div className="marquee-track gap-10 px-6">
          {loop.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-display text-3xl md:text-4xl whitespace-nowrap text-foreground/80"
            >
              {item}
              <span className="text-accent mx-6">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-editorial grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {techCategories.map((cat) => (
          <Panel key={cat.label} data-reveal className="p-6 md:p-8" thick>
            <p className="index-badge mb-6">{cat.label}</p>
            <ul className="space-y-3">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="font-display text-2xl border-b border-border/60 pb-2 last:border-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Panel>
        ))}
      </div>
    </section>
  );
}
