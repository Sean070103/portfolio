'use client';

import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaJs, FaLaravel, FaNodeJs, FaBootstrap, FaReact, FaHardHat } from 'react-icons/fa';
import { SiTailwindcss, SiCodeigniter } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" size={40} /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" size={40} /> },
  { name: 'Javascript', icon: <FaJs className="text-yellow-400" size={40} /> },
  { name: 'Laravel', icon: <FaLaravel className="text-red-600" size={40} /> },
  { name: 'Codeigniter', icon: <SiCodeigniter className="text-red-500" size={40} /> },
  { name: 'NodeJS', icon: <FaNodeJs className="text-green-600" size={40} /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-cyan-400" size={40} /> },
  { name: 'Bootstrap', icon: <FaBootstrap className="text-purple-600" size={40} /> },
  { name: 'ReactJS', icon: <FaReact className="text-cyan-300" size={40} /> },
  { name: 'Hardhat', icon: <FaHardHat className="text-yellow-400" size={40} /> },
];

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-12">About Me</h1>
      <div className="card mb-12">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-center">
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-background bg-card">
              <Image
                src="/bebe.jpg"
                alt="About Me"
                width={160}
                height={160}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-lg mb-4">
              Hi everyone! My name is Sean Michael Andrew B. Mendoza. I&apos;m a web developer
              based in Philippines. I have 1 year of experience in front-end web
              development. I really enjoy what I do right now. In my opinion, creating
              programs is not just a job, but also an art that has aesthetic value.
            </p>
            <p className="text-lg">
              My job is to build your website to be functional and user-friendly yet
              attractive. Moreover, I add a personal touch to your product and make sure
              that the website catches attention and is easy to use. My goal is to convey
              your message and identity in the most creative way.
            </p>
          </div>
        </div>
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <span className="border-b-2 border-primary pb-1">Skills</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center border border-yellow-400 rounded-lg p-4 bg-background/80 hover:bg-primary/10 transition shadow-sm"
            >
              {skill.icon}
              <span className="mt-2 font-medium text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 