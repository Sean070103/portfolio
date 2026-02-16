"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, GraduationCap, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import TechStack from "./TechStack";

const experiences = [
  {
    role: "Freelance Full Stack Developer",
    company: "Self-Employed",
    period: "1+ year",
    description:
      "Freelance developer building full-stack web applications and landing pages for clients, from planning and UI design to deployment.",
    current: true,
    link: undefined,
  },
  {
    role: "Software Engineer Intern",
    company: "THE BLOKC",
    period: "January – March 2025",
    description:
      "Intern Software Engineer focused on planning and building Web3 and Web2 products for clients at THE BLOKC, 16F E/F Burgundy Corporate Tower, 252 Sen. Gil J. Puyat Ave, Makati, Metro Manila.",
    current: false,
    link: "https://theblokc.com/",
  },
  {
    role: "OJT Intern",
    company: "Creotec Inc. Philippines",
    period: "March 2021",
    description:
      "On-the-job trainee contributing to software and technology projects while learning industry workflows and best practices.",
    current: false,
    link: "https://www.linkedin.com/company/creotec-philippines-inc/",
  },
  {
    role: "Contributor",
    company: "Base PH",
    period: "Present",
    description:
      "Community contributor helping build and maintain Base PH experiences for Filipino Web3 builders and creators.",
    current: true,
    link: "https://basepilipinas-website-base-2025.vercel.app/",
  },
  {
    role: "Front-End Developer",
    company: "Filipino Web3 Manila",
    period: "Present",
    description:
      "Front-end developer for a community of Web3 builders, developers, and innovators in Manila, focusing on polished, performant interfaces.",
    current: true,
    link: "https://filipinoweb3.org/",
  },
];

const education = [
  {
    school: "University of Cabuyao (UC-PNC)",
    degree: "Bachelor of Science in Computer Science",
    period: "2021 - 2025",
    current: true,
  },
  {
    school: "San Pablo Colleges",
    degree: "Senior High School - STEM",
    period: "2019 - 2021",
  },
];

const stats = [
  { value: "3+", label: "Projects Completed" },
  { value: "1+", label: "Years Experience" },
  { value: "5+", label: "Happy Clients" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-12 pb-16 sm:pt-16 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              className="relative order-1 lg:order-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Background decoration */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-2xl"
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                
                {/* Main image container */}
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-border">
                  <Image
                    src="/bebe.jpg"
                    alt="Sean Michael Andrew B. Mendoza"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  
                  {/* Location badge */}
                  <motion.div
                    className="absolute bottom-4 left-4 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full flex items-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium">Philippines</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="order-2 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span
                className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                About Me
              </motion.span>

              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Sean Mendoza
                </span>
              </h1>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                A passionate Full Stack Developer based in the Philippines with over a year of
                freelance experience building modern web applications for real clients. I
                specialize in creating beautiful, functional, and user-centric digital
                experiences for communities and startups in the local tech ecosystem.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Beyond freelance work, I&apos;ve contributed to Web3 communities like Base PH and
                Filipino Web3 Manila, and worked as a Software Engineer Intern at THE BLOKC and
                an OJT intern at Creotec Inc. Philippines. With a strong foundation in React,
                Next.js, and blockchain technologies, I bridge the gap between design and
                development to create applications that are both visually stunning and
                technically robust.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <motion.button
                    className="group px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get in Touch
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
                <a
                  href="/Sean_Michael_Andrew_Mendoza_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    className="px-6 py-3 border-2 border-border hover:border-primary rounded-xl font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Download CV
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Experience</h2>
              </div>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.role}
                    className="relative pl-8 pb-6 border-l-2 border-border last:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${exp.current ? 'bg-primary border-primary' : 'bg-background border-border'}`} />
                    
                    {/* Content */}
                    <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          Visit site
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.school}
                    className="relative pl-8 pb-6 border-l-2 border-border last:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 ${edu.current ? 'bg-primary border-primary' : 'bg-background border-border'}`} />
                    
                    {/* Content */}
                    <div className="bg-card p-6 rounded-2xl border border-border hover:border-primary/30 transition-colors">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                        {edu.current && (
                          <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{edu.school}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>
          
          <TechStack />
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
              Want to Work Together?
            </h2>
            <p className="text-muted-foreground mb-8">
              I&apos;m always interested in hearing about new projects and opportunities.
              Let&apos;s create something amazing together.
            </p>
            <Link href="/contact">
              <motion.button
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold inline-flex items-center gap-2"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
