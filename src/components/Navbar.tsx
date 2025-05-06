"use client";

import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "unset";
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-out
        ${
          isScrolled
            ? "bg-background/80 backdrop-blur-md shadow-lg"
            : "bg-background/50 backdrop-blur-sm"
        }
      `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10">
            <Link href="/" className="text-xl font-bold relative group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
                SeanDev
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative group py-1
                    transition-colors duration-300
                    ${
                      pathname === link.href
                        ? "text-primary"
                        : "hover:text-primary"
                    }
                  `}
                >
                  {link.label}
                  <span
                    className={`
                    absolute -bottom-1 left-0 w-0 h-0.5 bg-primary 
                    transition-all duration-300 
                    ${pathname === link.href ? "w-full" : "group-hover:w-full"}
                  `}
                  ></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-card hover:bg-card/80 transition-all duration-300 hover:scale-105"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              {/* Mobile menu button */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-card transition-all duration-300"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span
                    className={`
                    block w-5 h-0.5 bg-current transition-all duration-300
                    ${
                      isMenuOpen
                        ? "rotate-45 translate-y-0.5"
                        : "-translate-y-1"
                    }
                  `}
                  ></span>
                  <span
                    className={`
                    block w-5 h-0.5 bg-current transition-all duration-300
                    ${isMenuOpen ? "opacity-0" : "opacity-100"}
                  `}
                  ></span>
                  <span
                    className={`
                    block w-5 h-0.5 bg-current transition-all duration-300
                    ${
                      isMenuOpen
                        ? "-rotate-45 -translate-y-1.5"
                        : "translate-y-1"
                    }
                  `}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Backdrop */}
        <div
          className={`
            fixed inset-0 bg-background/50 backdrop-blur-sm
            transition-opacity duration-500 ease-out md:hidden
            ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
          onClick={toggleMenu}
        />

        {/* Mobile menu */}
        <div
          className={`
            fixed top-16 right-0 h-[calc(100vh-4rem)] w-72 
            bg-background/95 backdrop-blur-sm
            border-l border-border shadow-xl
            transform transition-all duration-500 ease-out
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
            md:hidden
          `}
        >
          <div className="px-4 py-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  block w-full text-left px-4 py-3 
                  rounded-lg transition-all duration-300
                  ${
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-card hover:pl-6"
                  }
                `}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
