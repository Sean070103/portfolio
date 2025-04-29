'use client';

import { ThemeProvider } from "@/app/context/ThemeContext";
import { Toaster } from "react-hot-toast";
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
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
} 