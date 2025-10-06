// Landing page component with typing animation effect
'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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
  const matrixCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const matrixAnimRef = useRef<number | null>(null);
  const [fxEnabled, setFxEnabled] = useState(true);

  // Respect reduced motion
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) setFxEnabled(false);
  }, []);

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

  // Matrix background animation
  useEffect(() => {
    const canvas = matrixCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const context: CanvasRenderingContext2D = ctx;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      initDrops();
    };
    window.addEventListener('resize', onResize);

    const chars = 'アカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const baseFont = 14; // px
    const getFontSize = () => (width < 768 ? baseFont * 1.15 : baseFont);

    let columns = Math.floor(width / getFontSize());
    let drops: number[] = new Array(columns).fill(0).map(() => Math.random() * -100);

    function initDrops() {
      columns = Math.floor(width / getFontSize());
      drops = new Array(columns).fill(0).map(() => Math.random() * -100);
    }

    function clearCanvas() {
      context.clearRect(0, 0, width, height);
    }

    function draw() {
      if (!fxEnabled) {
        clearCanvas();
        return; // stop until re-enabled
      }

      const fontSize = getFontSize();
      // Trail fade
      context.fillStyle = theme === 'dark' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';
      context.fillRect(0, 0, width, height);

      // Color and opacity
      const emerald = theme === 'dark' ? '#10b981' : '#334155';
      const baseAlpha = theme === 'dark' ? 0.65 : 0.35;
      context.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head glow
        context.globalAlpha = baseAlpha + 0.2;
        context.shadowBlur = 8;
        context.shadowColor = emerald;
        context.fillStyle = emerald;
        context.fillText(chars[Math.floor(Math.random() * chars.length)], x, y);

        // Trail glyph (less bright)
        context.globalAlpha = baseAlpha;
        context.shadowBlur = 0;

        // reset drop randomly for infinite rain
        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }

      context.globalAlpha = 1;
      matrixAnimRef.current = requestAnimationFrame(draw);
    }

    if (fxEnabled) {
      draw();
    } else {
      clearCanvas();
    }

    return () => {
      if (matrixAnimRef.current) cancelAnimationFrame(matrixAnimRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, [theme, fxEnabled]);

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
        {/* matrix canvas background */}
        <div className="absolute inset-0 -z-30">
          <canvas ref={matrixCanvasRef} className="h-full w-full" />
        </div>
        {/* Remove static code overlay for cleanliness */}
        {/* centered radial orb */}
        <div className="pointer-events-none absolute -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-primary/20 blur-3xl opacity-40" />

        {/* FX Toggle */}
        <button
          onClick={() => setFxEnabled((v) => !v)}
          className="absolute right-4 top-4 z-10 rounded-full border border-primary/30 bg-background/60 px-3 py-1 text-xs backdrop-blur hover:bg-background/80"
          aria-label="Toggle background effects"
        >
          {fxEnabled ? 'FX: On' : 'FX: Off'}
        </button>

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
