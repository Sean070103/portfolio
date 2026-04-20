"use client";

import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

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

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    document.body.style.overflow = "unset";
  }, [pathname]);

  const navLinks = [
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.4 }
    })
  };

  const mobileMenuVariants = {
    closed: { x: "100%" },
    open: { x: 0 }
  };

  const mobileLinkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.4 }
    })
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-500 ease-out
          ${
            isScrolled
              ? "bg-background border-b-[3px] border-border py-2"
              : "bg-background border-b-[3px] border-border py-4"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="relative group">
              <motion.span 
                className="text-xl font-black tracking-tight"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SeanDev
              </motion.span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-1 bg-primary"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={link.href}
                    className={`
                      relative group py-2 block
                      transition-colors duration-300
                      ${pathname === link.href ? "text-primary" : "text-foreground hover:text-primary"}
                    `}
                  >
                    {link.label}
                    <span
                      className={`
                        absolute -bottom-1 left-0 h-0.5 bg-primary rounded-full transition-all duration-300
                        ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              {/* Theme toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 bg-card hover:bg-accent transition-all duration-300 border-[3px] border-border shadow-[4px_4px_0_var(--border)]"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={theme}
                    initial={{ opacity: 0, rotate: -90, scale: 0 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark" ? "🌞" : "🌙"}
                  </motion.span>
                </AnimatePresence>
              </motion.button>

              {/* GitHub link */}
              <motion.a
                href="https://github.com/Sean070103"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>

              {/* Mobile menu button */}
              <motion.button
                className="md:hidden p-2 border-[3px] border-border bg-card hover:bg-accent transition-all duration-300 shadow-[4px_4px_0_var(--border)]"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    className="block w-5 h-0.5 bg-current rounded-full"
                    animate={{
                      rotate: isMenuOpen ? 45 : 0,
                      y: isMenuOpen ? 2 : -4
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="block w-5 h-0.5 bg-current rounded-full"
                    animate={{
                      opacity: isMenuOpen ? 0 : 1,
                      scaleX: isMenuOpen ? 0 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    className="block w-5 h-0.5 bg-current rounded-full"
                    animate={{
                      rotate: isMenuOpen ? -45 : 0,
                      y: isMenuOpen ? -2 : 4
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Backdrop */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-background/70 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMenu}
              style={{ top: "56px" }}
            />
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed top-14 right-0 h-[calc(100vh-3.5rem)] w-72 bg-background border-l-[3px] border-border md:hidden"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="px-6 py-8 space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    custom={i}
                    variants={mobileLinkVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    <Link
                      href={link.href}
                      className={`
                        block w-full text-left px-4 py-3 
                        border-[3px] border-border transition-all duration-300
                        ${
                          pathname === link.href
                            ? "bg-primary text-primary-foreground"
                            : "bg-card hover:bg-accent hover:pl-6"
                        }
                      `}
                      onClick={toggleMenu}
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {link.label}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Mobile menu decoration */}
                <motion.div 
                  className="mt-8 pt-8 border-t border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="text-sm text-muted-foreground px-4">
                    Let&apos;s build something amazing together.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
