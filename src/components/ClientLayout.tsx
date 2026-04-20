"use client";

import { ThemeProvider } from "@/app/context/ThemeContext";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background">
        {/* Monochrome grid background */}
        <div className="fixed inset-0 -z-50 overflow-hidden">
          <div className="absolute inset-0 bg-background" />
          <div 
            className="absolute inset-0 opacity-[0.08] dark:opacity-[0.14]"
            style={{
              backgroundImage: `
                linear-gradient(var(--primary) 1px, transparent 1px),
                linear-gradient(90deg, var(--primary) 1px, transparent 1px)
              `,
              backgroundSize: "28px 28px"
            }}
          />
        </div>

        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 pt-16"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}
