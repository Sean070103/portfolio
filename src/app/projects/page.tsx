"use client";

import { FaReact, FaPython, FaRobot } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiOpencv } from "react-icons/si";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

type Tech = { icon: ReactNode; name: string };

type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  tech: Tech[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Daily Base",
    description: "Daily Base is a playful Base miniapp interface with wallet connect.",
    image: "/Dailybase.webp",
    url: "https://miniapp-dailybase.vercel.app/",
    tech: [
      { icon: <SiNextdotjs size={20} />, name: "Next.js" },
      { icon: <FaReact size={20} />, name: "React" },
      { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Base PH website",
    description:
      "Base Philippines is a dynamic community of Filipino Web3 builders, creators, and innovators, creating opportunities within the blockchain ecosystem.",
    image: "/Base.jpg",
    url: "https://basepilipinas-website-base-2025.vercel.app/",
    featured: true,
    tech: [
      { icon: <SiNextdotjs size={20} />, name: "Next.js" },
      { icon: <FaReact size={20} />, name: "React" },
      { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Tabuko Energy Network",
    description:
      "Corporate site for Tabuko Energy Network Corp., covering energy-generation partners, industrial products, and service offerings from installation to maintenance.",
    image: "/tabuko.png",
    url: "https://tabuko-website-wmxu.vercel.app/",
    tech: [
      { icon: <SiNextdotjs size={20} />, name: "Next.js" },
      { icon: <FaReact size={20} />, name: "React" },
      { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Filipino Web3 Hub",
    description:
      "Landing experience for Filipino Web3 highlighting its mission, Bayanihan-driven values, builder community, and featured core team members.",
    image: "/fw3.png",
    url: "https://filipinoweb3.org/",
    featured: true,
    tech: [
      { icon: <SiNextdotjs size={20} />, name: "Next.js" },
      { icon: <FaReact size={20} />, name: "React" },
      { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Beany Avenue",
    description:
      "A place where friends make the perfect blend. Beany Avenue is a cozy coffee shop experience with modern web design.",
    image: "/beanyy.png",
    url: "https://www.beanyavenue.space/",
    featured: true,
    tech: [
      { icon: <SiNextdotjs size={20} />, name: "Next.js" },
      { icon: <FaReact size={20} />, name: "React" },
      { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Posture Detection",
    description: "A project for detecting and analyzing human posture using AI. Click to learn more.",
    image: "/projects/test.jpg",
    url: "/projects/posture-detection",
    tech: [
      { icon: <FaPython size={20} />, name: "Python" },
      { icon: <FaRobot size={20} />, name: "YOLOv8" },
      { icon: <SiOpencv size={20} />, name: "OpenCV" },
    ],
  },
  {
    title: "Components",
    description:
      "A modern web components library built with Next.js and Tailwind CSS, featuring beautiful, responsive, and accessible UI components.",
    image: "/components.jpg",
    url: "https://components-six-sigma.vercel.app/",
    tech: [
      { icon: <SiNextdotjs size={20} />, name: "Next.js" },
      { icon: <FaReact size={20} />, name: "React" },
      { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "TV",
    description:
      "A retro-style TV interface with channel controls and volume adjustment. Experience the nostalgic TV interface design.",
    image: "/tv.png",
    url: "https://tv-mu-ivory.vercel.app/",
    tech: [
      { icon: <SiNextdotjs size={20} />, name: "Next.js" },
      { icon: <FaReact size={20} />, name: "React" },
      { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
    ],
  },
  {
    title: "Master Base Blockchain",
    description:
      "Learn how to use Base, the secure and low-cost Ethereum L2 built by Coinbase. From wallet setup to your first transaction, we've got you covered.",
    image: "/basee.png",
    url: "https://base-ashy.vercel.app/",
    tech: [
      { icon: <SiNextdotjs size={20} />, name: "Next.js" },
      { icon: <FaReact size={20} />, name: "React" },
      { icon: <SiTailwindcss size={20} />, name: "Tailwind CSS" },
    ],
  },
];

export default function ProjectsPage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              My Work
            </motion.span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Projects &{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Creations
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A collection of projects I&apos;ve built, from full-stack web applications 
              to Web3 experiences. Each project represents unique challenges and learning opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Featured
          </motion.h2>

          <div className="grid gap-8">
            {featuredProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : undefined}
                rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group grid md:grid-cols-2 gap-6 lg:gap-12 p-6 lg:p-8 bg-card rounded-3xl border border-border hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
              >
                {/* Image */}
                <div className={`relative h-64 md:h-80 rounded-2xl overflow-hidden ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    {project.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="p-2 bg-background rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                        whileHover={{ scale: 1.1, y: -2 }}
                        title={tech.name}
                      >
                        {tech.icon}
                      </motion.div>
                    ))}
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-primary font-medium">
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="pb-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <motion.h2
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            More Projects
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.url}
                target={project.url.startsWith("http") ? "_blank" : undefined}
                rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  >
                    <span className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm flex items-center gap-2">
                      View <ExternalLink className="w-3 h-3" />
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex items-center gap-2">
                    {project.tech.map((tech, i) => (
                      <div
                        key={i}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title={tech.name}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Have a Project in Mind?
            </h2>
            <p className="text-muted-foreground mb-8">
              I&apos;m always open to discussing new projects and creative ideas.
              Let&apos;s create something amazing together.
            </p>
            <Link href="/contact">
              <motion.button
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Let&apos;s Talk
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
