"use client";

import { processSteps } from "@/content/process";
import { SectionHeading, SpeedLine } from "@/components/editorial/primitives";
import { useScrollReveal } from "@/hooks/useAnime";

export default function ProcessSection() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 100 });

  return (
    <section id="process" ref={ref} className="py-16 md:py-24 scroll-mt-20">
      <div className="container-editorial">
        <SectionHeading
          number="03"
          label="Process"
          title="From brief to ship."
          subtitle="A deliberate sequence—discover, design, build, automate, ship—without the theatre of fake timelines."
        />

        <SpeedLine />

        <ol className="grid md:grid-cols-5 gap-0 border-[3px] border-foreground">
          {processSteps.map((step, i) => (
            <li
              key={step.index}
              data-reveal
              className={`relative p-6 md:p-8 bg-card ${
                i < processSteps.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-border" : ""
              }`}
            >
              <span className="font-display text-5xl text-foreground/15">{step.index}</span>
              <h3 className="mt-4 font-display text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
              {i < processSteps.length - 1 && (
                <span
                  className="hidden md:block absolute top-1/2 -right-3 w-5 h-[2px] bg-accent z-10"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
