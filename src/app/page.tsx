// Landing page component with typing animation effect
'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "./context/ThemeContext";

const TITLES = ["Full Stack Developer", "Web3 Developer", "Software Engineer"];
const TYPING_SPEED = 80;
const PAUSE = 1200;

// Fixed star positions
const STARS = [
  { left: '10%', top: '15%', delay: '0s' },
  { left: '20%', top: '25%', delay: '0.5s' },
  { left: '30%', top: '10%', delay: '1s' },
  { left: '40%', top: '35%', delay: '1.5s' },
  { left: '50%', top: '20%', delay: '2s' },
  { left: '60%', top: '30%', delay: '2.5s' },
  { left: '70%', top: '15%', delay: '3s' },
  { left: '80%', top: '25%', delay: '3.5s' },
  { left: '90%', top: '10%', delay: '4s' },
  { left: '15%', top: '40%', delay: '4.5s' },
  { left: '25%', top: '50%', delay: '5s' },
  { left: '35%', top: '45%', delay: '5.5s' },
  { left: '45%', top: '55%', delay: '6s' },
  { left: '55%', top: '40%', delay: '6.5s' },
  { left: '65%', top: '50%', delay: '7s' },
];

export default function Home() {
  const { theme } = useTheme();
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
    <main className="min-h-screen p-4 sm:p-6 md:p-8 relative">
      {theme === 'dark' && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {STARS.map((star, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
              style={{
                left: star.left,
                top: star.top,
                animationDelay: star.delay,
                opacity: 0.7,
              }}
            />
          ))}
        </div>
      )}

      <section className="flex flex-col-reverse md:flex-row justify-between items-center mb-20 relative">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 stickman-target">
            Hello, I&apos;m Sean <span role="img" aria-label="wave">👋</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-4 font-mono stickman-target">
            {displayed}
            <span className="inline-block w-2 h-6 bg-primary align-bottom animate-pulse ml-1" style={{borderRadius:2}}></span>
          </p>
          <p className="text-base sm:text-lg text-gray-400 mb-8 stickman-target">
            I&apos;m an Aspiring Full Stack Developer based in Philippines, passionate about building innovative solutions.
          </p>
        </div>

        <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] bg-card rounded-full overflow-hidden mb-8 md:mb-0">
          <Image
            src="/seanie.png"
            alt="Sean Michael Andrew B. Mendoza"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-center stickman-target">My NFTs</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="w-40 h-40 bg-card rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/nft.png"
              alt="My NFT"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority={false}
            />
            <div className="text-center mt-2 stickman-target">NFT #1</div>
          </div>
          <div className="w-40 h-40 bg-card rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/frog.png"
              alt="My Frog NFT"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority={false}
            />
            <div className="text-center mt-2 stickman-target">Frog NFT</div>
          </div>
          <div className="w-40 h-40 bg-card rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/naruto.png"
              alt="Naruto NFT"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority={false}
            />
            <div className="text-center mt-2 stickman-target">Naruto NFT</div>
          </div>
          <div className="w-40 h-40 bg-card rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
            <Image
              src="/goku.png"
              alt="Goku NFT"
              width={160}
              height={160}
              className="object-cover w-full h-full"
              priority={false}
            />
            <div className="text-center mt-2 stickman-target">Goku NFT</div>
          </div>
        </div>
      </section>
    </main>
  );
}
