"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TITLES = ["Full Stack Developer", "Web3 Developer", "Software Engineer"];
const TYPING_SPEED = 80;
const PAUSE = 1200;

import TechStackExp from "./TechStackExp";
import TechStack from "./TechStack";

export default function AboutPage() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = TITLES[titleIndex];

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), PAUSE);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length - 1));
        }, TYPING_SPEED / 2);
      } else {
        setTyping(true);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex]);

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">About Me</h1>
        <p className="text-muted-foreground text-lg">
          Get to know more about my journey, skills, and experience
        </p>
      </div>

      <div className="card mb-12 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex-shrink-0 flex items-center justify-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 bg-card hover:border-primary/40 transition-colors duration-300">
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
          <div className="flex-1 text-center md:text-left space-y-6">
            <div className="space-y-4">
              <p className="text-lg">
                Hi, I&apos;m Sean Michael Andrew B. Mendoza, a passionate Python
                Developer with a strong background in modern technologies. I
                specialize in YOLOv8 object detection, front-end development using
                HTML, CSS, and JavaScript, and UI/UX design with Figma and
                Tailwind CSS. I have a versatile skill set that bridges design and
                development, allowing me to create dynamic, responsive, and
                visually appealing web applications.
              </p>
              <p className="text-lg">
                My job is to build your website to be functional and user-friendly
                yet attractive. Moreover, I add a personal touch to your product
                and make sure that the website catches attention and is easy to
                use. My goal is to convey your message and identity in the most
                creative way.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Experience (left) */}
        <div className="lg:col-span-2">
          <TechStackExp />
        </div>
        {/* Education (right) */}
        <div className="lg:col-span-1">
          <section className="card hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="border-b-2 border-primary pb-1">Education</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    University of Cabuyao (UC-PNC)
                  </h3>
                  <p className="text-muted-foreground">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-sm text-muted-foreground">2021–2025</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    San Pablo Colleges
                  </h3>
                  <p className="text-muted-foreground">Secondary Education</p>
                  <p className="text-sm text-muted-foreground">2019–2021</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    Col. Lauro D. Dizon Memorial National High School
                  </h3>
                  <p className="text-muted-foreground">Secondary Education</p>
                  <p className="text-sm text-muted-foreground">2019–2021</p>
                </div>
              </div>
              <div className="flex items-start gap-4 group">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2 group-hover:scale-150 transition-transform"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                    San Lucas 1 Elementary School
                  </h3>
                  <p className="text-muted-foreground">Elementary Education</p>
                  <p className="text-sm text-muted-foreground">2009–2015</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-16">
        <TechStack />
      </div>
    </main>
  );
}

