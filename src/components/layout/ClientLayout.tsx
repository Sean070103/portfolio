"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import SideNav from "./SideNav";
import RightRail from "./RightRail";
import { SmoothScroll } from "./SmoothScroll";
import { GrainOverlay } from "@/components/editorial/primitives";
import { IntroProvider } from "@/components/intro/IntroContext";
import CinematicIntro from "@/components/intro/CinematicIntro";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <IntroProvider>
      <SmoothScroll>
        <div className="min-h-screen flex flex-col bg-background relative">
          <GrainOverlay />
          <CinematicIntro />
          <SideNav />
          <RightRail />
          <Navbar />
          <main className="flex-1 xl:pl-32 xl:pr-12">{children}</main>
          <div className="xl:pl-32 xl:pr-12">
            <Footer />
          </div>
        </div>
      </SmoothScroll>
    </IntroProvider>
  );
}
