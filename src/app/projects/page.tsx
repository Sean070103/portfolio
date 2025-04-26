"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Base PH website",
    description:
      "Base Philippines is a dynamic community of Filipino Web3 builders, creators, and innovators, creating opportunities within the blockchain ecosystem.",
    image: "/Base.jpg",
    tech: "Next.js",
    external: "https://basepilipinas-website-base-2025.vercel.app/",
  },
  {
    title: "Posture Detection",
    description:
      "A project for detecting and analyzing human posture using AI. Click to learn more.",
    image: "/projects/test.jpg",
    tech: "AI & Computer Vision",
    detailsPage: "/projects/posture-detection",
  },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12">Past Project Experience</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) =>
          project.detailsPage ? (
            <Link
              key={project.title}
              href={project.detailsPage}
              className="card group transition-shadow hover:shadow-2xl hover:border-primary border-2 border-transparent cursor-pointer flex flex-col"
            >
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-sm text-white mb-2">{project.tech}</p>
            </Link>
          ) : (
            <a
              key={project.title}
              href={project.external}
              target="_blank"
              rel="noopener noreferrer"
              className="card group transition-shadow hover:shadow-2xl hover:border-primary border-2 border-transparent cursor-pointer flex flex-col"
            >
              <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <p className="text-sm text-white mb-2">{project.tech}</p>
            </a>
          )
        )}
      </div>
    </main>
  );
}
