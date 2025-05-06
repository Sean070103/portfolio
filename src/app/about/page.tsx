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
  const [showCopied, setShowCopied] = useState(false);

  const handleScheduleCall = () => {
    window.open("https://calendly.com/your-calendly-link", "_blank");
  };

  const handleEmail = async () => {
    const email = "mendozaseanmichaelandrewb2345@gmail.com";

    try {
      await navigator.clipboard.writeText(email);
      setShowCopied(true);
      setTimeout(() => setShowCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

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
              Hi, I&apos;m Sean Michael Andrew B. Mendoza, a passionate Python
              Developer with a strong background in modern technologies. I
              specialize in YOLOv8 object detection, front-end development using
              HTML, CSS, and JavaScript, and UI/UX design with Figma and
              Tailwind CSS. I have a versatile skill set that bridges design and
              development, allowing me to create dynamic, responsive, and
              visually appealing web applications.
            </p>
            <p className="text-lg mb-6">
              My job is to build your website to be functional and user-friendly
              yet attractive. Moreover, I add a personal touch to your product
              and make sure that the website catches attention and is easy to
              use. My goal is to convey your message and identity in the most
              creative way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={handleScheduleCall}
                className="px-6 py-2 bg-white text-black border border-black rounded-lg hover:bg-black hover:text-white transition-colors font-semibold shadow-sm"
              >
                Schedule a Call
              </button>
              <button
                onClick={handleEmail}
                className="px-6 py-2 bg-card hover:bg-card/90 rounded-lg transition-colors relative"
              >
                Contact via Email
                {showCopied && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-background px-2 py-1 rounded text-sm">
                    Email copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 mt-12">
        {/* Experience (left) */}
        <div className="flex-1">
          <TechStackExp />
        </div>
        {/* Education (right) */}
        <aside className="w-full md:w-1/3">
          <section>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="border-b-2 border-primary pb-1">Education</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    University of Cabuyao (UC-PNC)
                  </h3>
                  <p className="text-gray-400">
                    Bachelor of Science in Computer Science
                  </p>
                  <p className="text-sm text-gray-500">2021–2025</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">San Pablo Colleges</h3>
                  <p className="text-gray-400">Secondary Education</p>
                  <p className="text-sm text-gray-500">2019–2021</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    Col. Lauro D. Dizon Memorial National High School
                  </h3>
                  <p className="text-gray-400">Secondary Education</p>
                  <p className="text-sm text-gray-500">2019–2021</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2"></div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    San Lucas 1 Elementary School
                  </h3>
                  <p className="text-gray-400">Elementary Education</p>
                  <p className="text-sm text-gray-500">2009–2015</p>
                </div>
              </div>
            </div>
            {/* Tech Stack at the bottom of education */}
            <div className="mt-12">
              <TechStack />
            </div>
          </section>
        </aside>
      </div>
    </main>
  );
}
