"use client";

import Image from "next/image";

import { FaReact, FaPython, FaRobot } from "react-icons/fa";
import { SiNextdotjs, SiEthereum, SiTailwindcss, SiOpencv } from "react-icons/si";

const projects = [
  {
    title: "Fundchain",
    description: "Fundchain is a blockchain-based fundraising platform. Explore the live demo.",
    image: "/fundchain.jpg",
    tech: [
      {
        icon: <SiNextdotjs className="text-muted-foreground hover:text-primary transition-colors" size={24} />,
        name: "Next.js"
      },
      {
        icon: <SiEthereum className="text-muted-foreground hover:text-primary transition-colors" size={24} />,
        name: "Ethereum"
      },
      {
        icon: <SiTailwindcss className="text-muted-foreground hover:text-primary transition-colors" size={24} />,
        name: "Tailwind CSS"
      }
    ]
  },
  {
    title: "Base PH website",
    description:
      "Base Philippines is a dynamic community of Filipino Web3 builders, creators, and innovators, creating opportunities within the blockchain ecosystem.",
    image: "/Base.jpg",
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
  {
    title: "Posture Detection",
    description:
      "A project for detecting and analyzing human posture using AI. Click to learn more.",
    image: "/projects/test.jpg",
    tech: [
      {
        icon: <FaPython className="text-muted-foreground hover:text-primary transition-colors" size={24} />,
        name: "Python"
      },
      {
        icon: <FaRobot className="text-muted-foreground hover:text-primary transition-colors" size={24} />,
        name: "YOLOv8"
      },
      {
        icon: <SiOpencv className="text-muted-foreground hover:text-primary transition-colors" size={24} />,
        name: "OpenCV"
      }
    ]
  },
  {
    title: "Components",
    description: "A modern web components library built with Next.js and Tailwind CSS, featuring beautiful, responsive, and accessible UI components.",
    image: "/components.jpg",
    url: "https://components-six-sigma.vercel.app/",
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
      <h1 className="text-4xl font-bold mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a 
            key={idx} 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="card group block"
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex items-center gap-4">
              {project.tech.map((tech, index) => (
                <div key={index} className="tooltip" data-tip={tech.name}>
                  {tech.icon}
                </div>
              ))}
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}
