// Landing page component with typing animation effect
'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTheme } from "./context/ThemeContext";
import Link from "next/link";

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
    <main className="min-h-screen relative">
      {/* Background stars */}
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 relative bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* centered radial orb */}
        <div className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-primary/20 blur-3xl opacity-40" />
        
        {/* Terminal commands background */}
        <div className="absolute inset-0 -z-40 opacity-[0.8]">
          <div className="absolute left-8 top-16 font-mono text-base text-white bg-black/40 px-3 py-2 rounded shadow-lg" style={{textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)'}}>
            $ npm install web3
          </div>
          <div className="absolute left-8 top-24 font-mono text-base text-white bg-black/40 px-3 py-2 rounded shadow-lg" style={{textShadow: '0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.3)'}}>
            $ git commit -m &quot;deploy smart contract&quot;
          </div>
          <div className="absolute left-16 top-40 font-mono text-lg text-white font-semibold" style={{textShadow: '0 0 15px rgba(255,255,255,0.6), 0 0 30px rgba(255,255,255,0.4)'}}>
            blockchain
          </div>
          <div className="absolute right-8 top-20 w-16 h-16 border border-white/40 rounded-full bg-white/5 flex items-center justify-center shadow-lg" style={{boxShadow: '0 0 20px rgba(255,255,255,0.3)'}}>
            <div className="w-2 h-2 bg-white/80 rounded-full" style={{boxShadow: '0 0 10px rgba(255,255,255,0.6)'}}></div>
          </div>
          <div className="absolute right-12 top-32 w-12 h-12 border border-white/30 rounded-full bg-white/5 flex items-center justify-center shadow-lg" style={{boxShadow: '0 0 15px rgba(255,255,255,0.2)'}}>
            <div className="w-1 h-1 bg-white/70 rounded-full" style={{boxShadow: '0 0 8px rgba(255,255,255,0.5)'}}></div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold stickman-target bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                  Hello, I&apos;m Sean
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-8 stickman-target">
                  I&apos;m an aspiring Full Stack Developer based in the Philippines, passionate about building innovative solutions.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] mx-auto">
                {/* glowing orb layers centered */}
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 via-primary/10 to-transparent blur-2xl opacity-60" />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                <div className="pointer-events-none absolute inset-0 rounded-full ring-[1px] md:ring-2 ring-primary/30 animate-pulse" />
                <div className="relative bg-card rounded-full overflow-hidden border-4 border-primary/20 shadow-lg w-full h-full">
          <Image
                    src="/seanie.png"
            alt="Sean Michael Andrew B. Mendoza"
            fill
            className="object-cover"
            priority
          />
                </div>
                {/* small orbiting dot */}
                <span className="absolute -right-3 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary animate-ping" />
              </div>
              {/* typing line below the orb */}
              <p className="mt-6 text-lg sm:text-xl md:text-2xl font-mono text-center w-[280px] sm:w-[340px] md:w-[400px]">
                {displayed}
                <span className="inline-block w-0.5 sm:w-1 h-7 align-bottom animate-pulse ml-1 bg-primary rounded" style={{ verticalAlign: '-0.2em' }}></span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold mb-2">Projects</h3>
              <p className="text-muted-foreground mb-4">Check out my latest projects and work</p>
              <Link href="/projects" className="text-primary hover:underline">View Projects →</Link>
            </div>
            <div className="card hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold mb-2">About Me</h3>
              <p className="text-muted-foreground mb-4">Learn more about my journey and skills</p>
              <Link href="/about" className="text-primary hover:underline">About Me →</Link>
            </div>
            <div className="card hover:scale-105 transition-transform">
              <h3 className="text-xl font-bold mb-2">Contact</h3>
              <p className="text-muted-foreground mb-4">Let&apos;s connect and discuss opportunities</p>
              <Link href="/contact" className="text-primary hover:underline">Get in Touch →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
