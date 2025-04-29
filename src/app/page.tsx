'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

const TITLES = ["Full Stack Developer", "Web3 Developer", "Software Engineer"];
const TYPING_SPEED = 80;
const PAUSE = 1200;

export default function Home() {
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
    <main className="min-h-screen p-4 sm:p-6 md:p-8">
      <section className="flex flex-col-reverse md:flex-row justify-between items-center mb-20">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            Hello, I&apos;m Sean <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-4 font-mono">
            {displayed}
            <span className="inline-block w-2 h-6 bg-primary align-bottom animate-pulse ml-1" style={{borderRadius:2}}></span>
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-8">
            I&apos;m an Aspiring Full Stack Developer based in Philippines, passionate about building innovative solutions.
          </p>
          
          <div className="space-y-4">
            <h2 className="text-lg font-medium text-gray-300">Contact Info</h2>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">mendozaseanmichaelandrewb2345@gmail.com</p>
              <p className="text-sm text-gray-500">09636533613</p>
            </div>
          </div>
        </div>

        <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] bg-card rounded-full overflow-hidden mb-8 md:mb-0">
          <Image
            src="/bebe.jpg"
            alt="Sean Michael Andrew B. Mendoza"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>
    </main>
  );
}
