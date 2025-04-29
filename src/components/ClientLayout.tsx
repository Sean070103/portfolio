'use client';

import { ThemeProvider } from "@/app/context/ThemeContext";
import Navbar from "./Navbar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="pt-16">
        {children}
      </div>
    </ThemeProvider>
  );
} 