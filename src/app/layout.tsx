import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Sean Michael Andrew B. Mendoza | Full Stack Developer",
  description: "Portfolio website of Sean Michael Andrew B. Mendoza - Full Stack Developer, Web3 Developer, and Software Engineer based in the Philippines.",
  keywords: ["Full Stack Developer", "Web3", "React", "Next.js", "Portfolio", "Philippines"],
  authors: [{ name: "Sean Michael Andrew B. Mendoza" }],
  openGraph: {
    title: "Sean Michael Andrew B. Mendoza | Full Stack Developer",
    description: "Full Stack Developer, Web3 Developer, and Software Engineer based in the Philippines.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
