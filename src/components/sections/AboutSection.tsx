"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { site } from "@/content/site";
import { experiences, education } from "@/content/experience";
import { SectionHeading, Panel, Halftone } from "@/components/editorial/primitives";
import { useScrollReveal } from "@/hooks/useAnime";

export default function AboutSection() {
  const ref = useScrollReveal<HTMLElement>({ stagger: 70 });

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 scroll-mt-20">
      <div className="container-editorial">
        <SectionHeading
          number="06"
          label="About"
          title="The person behind the panels."
          subtitle="Full stack craft, AI automation, and a bias toward products that feel expensive for the right reasons."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5" data-reveal>
            <Panel thick className="relative aspect-[4/5] overflow-hidden">
              <Halftone className="z-10" />
              <Image
                src="/seanie.png"
                alt={site.name}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-top"
                priority
              />
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-background to-transparent z-20">
                <p className="index-badge">{site.location}</p>
              </div>
            </Panel>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-8">
            <div data-reveal>
              <h3 className="font-display text-3xl md:text-4xl mb-4">{site.shortName}</h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                I design and engineer digital products for communities, brands, and operators
                who need more than a template. From Next.js applications to AI-assisted
                workflows, I care about clarity, motion, and systems that stay maintainable
                after launch.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={site.resume} download className="btn btn-primary">
                  Download Resume
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Collaborate
                </a>
              </div>
            </div>

            <div data-reveal id="experience" className="scroll-mt-24">
              <p className="index-badge mb-4">Experience</p>
              <ul className="border-2 border-border divide-y-2 divide-border">
                {experiences.map((exp) => (
                  <li key={`${exp.role}-${exp.company}`} className="p-4 md:p-5 bg-card">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="font-display text-xl">{exp.role}</h4>
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        {exp.period}
                        {exp.current ? " · Now" : ""}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-accent">
                      {exp.link ? (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 hover:underline"
                        >
                          {exp.company}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal>
              <p className="index-badge mb-4">Education</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {education.map((ed) => (
                  <li key={ed.school} className="panel p-4">
                    <p className="font-display text-lg">{ed.school}</p>
                    <p className="text-sm text-muted-foreground mt-1">{ed.degree}</p>
                    <p className="text-xs uppercase tracking-wider mt-2 text-muted-foreground">
                      {ed.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
