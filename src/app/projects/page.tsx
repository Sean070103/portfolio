"use client";

import Image from "next/image";

import { FaReact, FaPython, FaRobot } from "react-icons/fa";
import {
  SiNextdotjs,
  SiEthereum,
  SiTailwindcss,
  SiOpencv,
} from "react-icons/si";

const projects = [
  {
    title: "Fundchain",
    description:
      "Fundchain is a blockchain-based fundraising platform. Explore the live demo.",
    image: "/fundchain.jpg",
    url: "https://fundchain.vercel.app/",
    tech: [
      {
        icon: (
          <SiNextdotjs
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "Next.js",
      },
      {
        icon: (
          <SiEthereum
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "Ethereum",
      },
      {
        icon: (
          <SiTailwindcss
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Base PH website",
    description:
      "Base Philippines is a dynamic community of Filipino Web3 builders, creators, and innovators, creating opportunities within the blockchain ecosystem.",
    image: "/Base.jpg",
    url: "https://basepilipinas-website-base-2025.vercel.app/",
    tech: [
      {
        icon: (
          <SiNextdotjs
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "Next.js",
      },
      {
        icon: (
          <FaReact
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "React",
      },
      {
        icon: (
          <SiTailwindcss
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Posture Detection",
    description:
      "A project for detecting and analyzing human posture using AI. Click to learn more.",
    image: "/projects/test.jpg",
    url: "/projects/posture-detection",
    tech: [
      {
        icon: (
          <FaPython
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "Python",
      },
      {
        icon: (
          <FaRobot
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "YOLOv8",
      },
      {
        icon: (
          <SiOpencv
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "OpenCV",
      },
    ],
  },
  {
    title: "Components",
    description:
      "A modern web components library built with Next.js and Tailwind CSS, featuring beautiful, responsive, and accessible UI components.",
    image: "/components.jpg",
    url: "https://components-six-sigma.vercel.app/",
    tech: [
      {
        icon: (
          <SiNextdotjs
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "Next.js",
      },
      {
        icon: (
          <FaReact
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "React",
      },
      {
        icon: (
          <SiTailwindcss
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "TV",
    description:
      "A retro-style TV interface with channel controls and volume adjustment. Experience the nostalgic TV interface design.",
    image: "/tv.png",
    url: "https://tv-mu-ivory.vercel.app/",
    tech: [
      {
        icon: (
          <SiNextdotjs
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "Next.js",
      },
      {
        icon: (
          <FaReact
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "React",
      },
      {
        icon: (
          <SiTailwindcss
            className="text-muted-foreground hover:text-primary transition-colors"
            size={24}
          />
        ),
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "Master Base Blockchain",
    description: "Learn how to use Base, the secure and low-cost Ethereum L2 built by Coinbase. From wallet setup to your first transaction, we've got you covered.",
    image: "/basee.png",
    url: "https://base-ashy.vercel.app/",
    tech: [
      {
        icon: <SiNextdotjs className="text-muted-foreground hover:text-primary transition-colors" size={24} />,
        name: "Next.js"
      },
      {
        icon: <FaReact className="text-muted-foreground hover:text-primary transition-colors" size={24} />,
        name: "React"
      },
      {
        icon: <SiTailwindcss className="text-muted-foreground hover:text-primary transition-colors" size={24} />,
        name: "Tailwind CSS"
      }
    ]
  },
];

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
          Projects
        </h1>
        <p className="text-muted-foreground text-lg">
          Here are some of my recent projects. Each one represents a unique
          challenge and learning experience.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.url}
            target={project.url.startsWith("http") ? "_blank" : undefined}
            rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
            className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h2>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex items-center gap-4">
                {project.tech.map((tech, index) => (
                  <div 
                    key={index} 
                    className="tooltip" 
                    data-tip={tech.name}
                  >
                    {tech.icon}
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/0 group-hover:bg-primary transition-colors duration-300" />
          </a>
        ))}
      </div>
    </main>
  );
}
