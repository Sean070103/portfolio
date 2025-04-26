'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

const TITLES = ["Front End Developer", "Software Engineer"];
const TYPING_SPEED = 80; // ms per character
const PAUSE = 1200; // ms to pause at end of word

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
      {/* Hero Section */}
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
            I&apos;m a Front End Developer based in Philippines and I&apos;m very
            passionate and dedicated to my work.
          </p>
          {/* Contact Info Section (moved and aligned) */}
          <section className="w-full flex flex-col items-center md:items-start mb-8">
            <div className="bg-background/80 rounded-xl p-6 flex flex-col items-center md:items-start gap-4 shadow-lg w-full max-w-md">
              <h2 className="text-xl font-bold mb-2">Contact Info</h2>
              <a href="mailto:mendozaseanmichaelandrewb2345@gmail.com" className="flex items-center gap-3 text-base hover:text-primary transition">
                <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16v16H4z" fill="none"/><path d="M22 6l-10 7L2 6" /></svg>
                mendozaseanmichaelandrewb2345@gmail.com
              </a>
              <a href="tel:09636533613" className="flex items-center gap-3 text-base hover:text-primary transition">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V19a2 2 0 0 1-2 2A17.91 17.91 0 0 1 3 5a2 2 0 0 1 2-2h2.09a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.34a2 2 0 0 1-.45 2.11l-.7.7a16 16 0 0 0 6.29 6.29l.7-.7a2 2 0 0 1 2.11-.45c.74.34 1.53.57 2.34.7A2 2 0 0 1 22 16.92z" /></svg>
                09636533613
              </a>
            </div>
          </section>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* Removed Contact Info and Download CV buttons */}
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
