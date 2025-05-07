import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import ClientLayout from "@/components/ClientLayout";
import Stickman from "@/components/Stickman";

const font = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sean Michael Andrew B. Mendoza",
  description: "Portfolio website of Sean Michael Andrew B. Mendoza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <ThemeProvider>
          <ClientLayout>
            <Stickman />
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
