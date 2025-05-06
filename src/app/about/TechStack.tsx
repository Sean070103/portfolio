import React from "react";
import { AboutIcons } from "./AboutIcons";

const techStack = [
  { icon: AboutIcons.python, name: "Python" },
  { icon: AboutIcons.html, name: "HTML5" },
  { icon: AboutIcons.css, name: "CSS3" },
  { icon: AboutIcons.js, name: "JavaScript" },
  { icon: AboutIcons.ts, name: "TypeScript" },
  { icon: AboutIcons.react, name: "React" },
  { icon: AboutIcons.next, name: "Next.js" },
  { icon: AboutIcons.tailwind, name: "Tailwind CSS" },
  { icon: AboutIcons.figma, name: "Figma" },
  { icon: AboutIcons.yolov8, name: "YOLOv8" },
  { icon: AboutIcons.github, name: "GitHub" },
  { icon: AboutIcons.node, name: "Node.js" },
];

export default function TechStack() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold mb-2 text-center">My Tech Stack</h2>
      <p className="text-gray-500 mb-8 text-center text-lg">Technologies I use most often</p>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {techStack.map(({ icon, name }, idx) => (
          <div key={idx} className="flex flex-col items-center gap-2">
            {icon &&
              // Render icon with larger size by cloning with new props if possible
              typeof icon === 'object' && icon.type
                ? (
                  // @ts-ignore
                  React.cloneElement(icon, { size: 48 })
                )
                : icon
            }
            <span className="text-xs text-gray-500 mt-1">{name}</span>
          </div>
        ))}
      </div>
      {/* Centered MongoDB row */}
      <div className="flex justify-center gap-8 mt-8">
        <div className="flex flex-col items-center">
          {AboutIcons.mongodb && typeof AboutIcons.mongodb === 'object' && AboutIcons.mongodb.type
            ? (
              // @ts-ignore
              React.cloneElement(AboutIcons.mongodb, { size: 48 })
            ) : AboutIcons.mongodb}
          <span className="text-xs text-gray-500 mt-1">MongoDB</span>
        </div>
      </div>
    </section>
  );
}
