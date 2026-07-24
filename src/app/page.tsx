import CinematicHero from "@/components/hero/CinematicHero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechSection from "@/components/sections/TechSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import { MangaFrame } from "@/components/editorial/MangaFrame";

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <MangaFrame chapter="02" label="Featured Work — Case Studies" />
      <FeaturedWork />
      <MangaFrame chapter="03" label="Process — From Brief to Ship" />
      <ProcessSection />
      <MangaFrame chapter="04" label="Services — What I Engineer" />
      <ServicesSection />
      <MangaFrame chapter="05" label="Tech Stack — Tools with Intent" />
      <TechSection />
      <MangaFrame chapter="06" label="About — The Person Behind the Panels" />
      <AboutSection />
      <MangaFrame chapter="07" label="Testimonials — Collaborator Signals" />
      <TestimonialsSection />
      <MangaFrame chapter="08" label="Contact — Next Panel" />
      <ContactSection />
    </>
  );
}
