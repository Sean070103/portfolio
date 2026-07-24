import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import ClientLayout from "@/components/layout/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SeanDev — Full Stack Developer",
  description:
    "Portfolio of Sean Michael Andrew B. Mendoza — Full Stack Developer crafting premium web applications and digital products.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
    "Philippines",
  ],
  authors: [{ name: "Sean Michael Andrew B. Mendoza" }],
  openGraph: {
    title: "SeanDev — Full Stack Developer",
    description:
      "Premium web applications and editorial digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
