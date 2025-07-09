
import React from 'react';
import Navbar from '@/components/Navbar';
import TopNavbar from '@/components/TopNavbar'; // Import TopNavbar
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TechnologySection from '@/components/TechnologySection';
import RoadmapSection from '@/components/RoadmapSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Index = () => {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNavbar /> {/* Render TopNavbar */}
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TechnologySection />
        <RoadmapSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
