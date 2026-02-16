"use client";

import React from "react";
import { motion } from "framer-motion";
import { AboutIcons } from "./AboutIcons";

const techStack = [
  { icon: AboutIcons.python, name: "Python", category: "Language" },
  { icon: AboutIcons.html, name: "HTML5", category: "Frontend" },
  { icon: AboutIcons.css, name: "CSS3", category: "Frontend" },
  { icon: AboutIcons.js, name: "JavaScript", category: "Language" },
  { icon: AboutIcons.ts, name: "TypeScript", category: "Language" },
  { icon: AboutIcons.react, name: "React", category: "Framework" },
  { icon: AboutIcons.next, name: "Next.js", category: "Framework" },
  { icon: AboutIcons.tailwind, name: "Tailwind", category: "Styling" },
  { icon: AboutIcons.figma, name: "Figma", category: "Design" },
  { icon: AboutIcons.yolov8, name: "YOLOv8", category: "AI/ML" },
  { icon: AboutIcons.github, name: "GitHub", category: "Tools" },
  { icon: AboutIcons.node, name: "Node.js", category: "Backend" },
  { icon: AboutIcons.mongodb, name: "MongoDB", category: "Database" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function TechStack() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
    >
      {techStack.map(({ icon, name, category }, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="group relative"
        >
          <motion.div
            className="flex flex-col items-center gap-3 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-all cursor-pointer"
            whileHover={{ 
              y: -5, 
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          >
            {/* Icon */}
            <div className="relative">
              {icon &&
                typeof icon === "object" && icon.type
                  ? React.cloneElement(icon, { 
                      size: 40,
                      className: "text-muted-foreground group-hover:text-primary transition-colors duration-300"
                    })
                  : icon}
            </div>
            
            {/* Name */}
            <span className="text-sm font-medium group-hover:text-primary transition-colors">
              {name}
            </span>
            
            {/* Category badge */}
            <span className="text-[10px] px-2 py-0.5 bg-primary/10 text-muted-foreground rounded-full">
              {category}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
