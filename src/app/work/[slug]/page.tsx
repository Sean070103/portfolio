import { notFound } from "next/navigation";
import {
  getAdjacentProjects,
  getFeaturedProjects,
  getProject,
  projects,
} from "@/content/projects";
import { CaseStudyBody, CaseStudyHero } from "@/components/work/CaseStudyView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: `${project.title} — SeanDev Case Study`,
    description: project.overview,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);
  const featured = getFeaturedProjects();
  const navPrev = prev ?? featured[featured.length - 1] ?? null;
  const navNext = next ?? featured[0] ?? null;

  return (
    <article className="pt-24 pb-24">
      <CaseStudyHero project={project} />
      <CaseStudyBody project={project} prev={navPrev} next={navNext} />
    </article>
  );
}
