"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

// Custom X (Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: Github, href: "https://github.com/Sean070103", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/sean-michael-andrew-mendoza-213223324/", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/Arkinnightshade", label: "X (Twitter)" },
  { icon: Mail, href: "mailto:mendozaseanmichaelandrewb2345@gmail.com", label: "Email" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t-[3px] border-border bg-card">
      {/* Top decorative line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight">
                SeanDev
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Full Stack Developer passionate about creating innovative web solutions and exploring Web3 technologies.
            </p>
          </motion.div>

          {/* Quick links */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/70 hover:text-primary transition-colors text-sm w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Connect section */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2.5 bg-background border-[3px] border-border hover:bg-accent transition-all shadow-[4px_4px_0_var(--border)]"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              Open for opportunities and collaborations.
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.p 
            className="text-sm text-muted-foreground flex items-center gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            &copy; {currentYear} Sean Michael Andrew B. Mendoza. Built with{" "}
            <Heart className="w-4 h-4 text-red-500 inline" fill="currentColor" />
          </motion.p>
          
          <motion.div 
            className="flex items-center gap-4 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="flex items-center gap-2 border-[3px] border-border px-3 py-1 bg-background">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for work
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
