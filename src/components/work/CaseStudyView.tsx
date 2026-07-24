"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink, ArrowLeft } from "lucide-react";
import type { CaseStudy } from "@/content/projects";
import {
  Panel,
  Halftone,
  SpeedLine,
  InkSplash,
} from "@/components/editorial/primitives";
import { useScrollReveal } from "@/hooks/useAnime";

type Props = {
  project: CaseStudy;
  prev: CaseStudy | null;
  next: CaseStudy | null;
};

export function CaseStudyHero({ project }: { project: CaseStudy }) {
  return (
    <header className="container-editorial mb-12 md:mb-16 relative">
      <InkSplash className="w-48 h-48 -top-8 -right-4 md:right-12 opacity-40" />
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted-foreground hover:text-accent mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to work
      </Link>

      <p className="index-badge mb-4">
        {project.client} · {project.year} · {project.role}
      </p>
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-5xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
        {project.overview}
      </p>
      {project.liveUrl.startsWith("http") ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-8"
        >
          View Live <ExternalLink className="w-4 h-4" />
        </a>
      ) : null}
    </header>
  );
}

export function CaseStudyBody({ project, prev, next }: Props) {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 70 });

  return (
    <div ref={ref} className="container-editorial">
      <Panel
        thick
        data-reveal
        className="relative aspect-[16/9] md:aspect-[21/9] mb-16 overflow-hidden"
      >
        <Halftone className="z-10 opacity-10" />
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
      </Panel>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-16">
        <Panel className="p-8 md:p-10" data-reveal>
          <p className="index-badge mb-4">Problem</p>
          <h2 className="font-display text-3xl mb-4">The brief</h2>
          <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
        </Panel>
        <Panel className="p-8 md:p-10 border-accent/30" data-reveal>
          <p className="index-badge mb-4">Solution</p>
          <h2 className="font-display text-3xl mb-4">The approach</h2>
          <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
        </Panel>
      </div>

      <div className="mb-16" data-reveal>
        <p className="index-badge mb-4">Technology</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <span
              key={t}
              className="font-display text-xl md:text-2xl border-2 border-border px-4 py-2"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <SpeedLine />

      <div className="mb-16" data-reveal>
        <p className="index-badge mb-4">Process</p>
        <h2 className="font-display text-4xl mb-8">How it came together</h2>
        <ol className="grid sm:grid-cols-2 gap-4">
          {project.process.map((step, i) => (
            <li key={step} className="panel p-6 flex gap-4">
              <span className="font-display text-3xl text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-muted-foreground leading-relaxed pt-1">{step}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="mb-16" data-reveal>
        <p className="index-badge mb-4">Key Features</p>
        <ul className="grid sm:grid-cols-2 gap-3">
          {project.features.map((f) => (
            <li
              key={f}
              className="border-l-4 border-accent pl-4 py-2 text-base md:text-lg"
            >
              {f}
            </li>
          ))}
        </ul>
      </div>

      {project.screenshots.length > 0 && (
        <div className="mb-16" data-reveal>
          <p className="index-badge mb-4">Screens</p>
          <div className="grid md:grid-cols-2 gap-4">
            {project.screenshots.map((src) => (
              <Panel key={src} className="relative aspect-video overflow-hidden">
                <Image
                  src={src}
                  alt={`${project.title} screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  loading="lazy"
                />
              </Panel>
            ))}
          </div>
        </div>
      )}

      {project.mobilePreviews && project.mobilePreviews.length > 0 ? (
        <div className="mb-16" data-reveal>
          <p className="index-badge mb-4">Mobile</p>
          <div className="flex flex-wrap justify-center gap-6">
            {project.mobilePreviews.map((src) => (
              <Panel
                key={src}
                className="relative w-[220px] aspect-[9/19] overflow-hidden"
              >
                <Image
                  src={src}
                  alt={`${project.title} mobile preview`}
                  fill
                  sizes="220px"
                  className="object-cover"
                  loading="lazy"
                />
              </Panel>
            ))}
          </div>
        </div>
      ) : null}

      <Panel thick className="p-8 md:p-12 mb-20 bg-card" data-reveal>
        <p className="index-badge mb-4">Outcomes</p>
        <h2 className="font-display text-4xl mb-8">What it delivered</h2>
        <ul className="space-y-4">
          {project.outcomes.map((o) => (
            <li key={o} className="flex gap-3 text-lg">
              <ArrowUpRight className="w-5 h-5 text-accent shrink-0 mt-1" />
              {o}
            </li>
          ))}
        </ul>
      </Panel>

      <div className="grid sm:grid-cols-2 gap-4 border-t-2 border-border pt-12" data-reveal>
        {prev ? (
          <Link
            href={`/work/${prev.slug}`}
            className="group panel p-6 hover:border-accent transition-colors"
          >
            <p className="index-badge mb-2">Previous</p>
            <p className="font-display text-2xl group-hover:text-accent transition-colors">
              {prev.title}
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="group panel p-6 hover:border-accent transition-colors sm:text-right"
          >
            <p className="index-badge mb-2">Next</p>
            <p className="font-display text-2xl group-hover:text-accent transition-colors">
              {next.title}
            </p>
          </Link>
        ) : null}
      </div>
    </div>
  );
}
