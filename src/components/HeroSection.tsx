
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BRAND_NAME, HERO_HEADLINE, HERO_SUBHEADLINE, HERO_BUTTON_SERVICES, HERO_BUTTON_CONTACT } from '@/config/branding';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 25,
        y: (e.clientY - window.innerHeight / 2) / 25
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-96 h-96 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl floating-animation"
          style={{
            left: '10%',
            top: '20%',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-radial from-secondary/20 to-transparent rounded-full blur-3xl floating-animation"
          style={{
            right: '10%',
            bottom: '20%',
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="scroll-reveal">
          <h1 className="font-quantum text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">{BRAND_NAME}</span>
          </h1>
        </div>

        <div className="scroll-reveal" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-foreground">
            {HERO_HEADLINE}
          </h2>
        </div>

        <div className="scroll-reveal" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {HERO_SUBHEADLINE}
          </p>
        </div>

        <div className="scroll-reveal flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToServices}
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 quantum-glow"
          >
            {HERO_BUTTON_SERVICES}
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-effect text-foreground px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 border border-primary/30"
          >
            {HERO_BUTTON_CONTACT}
          </button>
        </div>

        {/* Quantum Circuit Visualization */}
        <div className="mt-16 scroll-reveal" style={{ animationDelay: '0.8s' }}>
          <div className="relative">
            <svg width="300" height="100" className="mx-auto opacity-50">
              <defs>
                <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(258, 90%, 66%)" />
                  <stop offset="50%" stopColor="hsl(193, 100%, 50%)" />
                  <stop offset="100%" stopColor="hsl(290, 100%, 70%)" />
                </linearGradient>
              </defs>
              
              {/* Quantum Circuit Lines */}
              <line x1="50" y1="30" x2="250" y2="30" stroke="url(#quantumGradient)" strokeWidth="2" className="pulse-glow" />
              <line x1="50" y1="50" x2="250" y2="50" stroke="url(#quantumGradient)" strokeWidth="2" className="pulse-glow" />
              <line x1="50" y1="70" x2="250" y2="70" stroke="url(#quantumGradient)" strokeWidth="2" className="pulse-glow" />
              
              {/* Quantum Gates */}
              <rect x="90" y="20" width="20" height="20" fill="none" stroke="url(#quantumGradient)" strokeWidth="2" />
              <rect x="150" y="40" width="20" height="20" fill="none" stroke="url(#quantumGradient)" strokeWidth="2" />
              <rect x="210" y="60" width="20" height="20" fill="none" stroke="url(#quantumGradient)" strokeWidth="2" />
              
              {/* Connection Lines */}
              <line x1="100" y1="40" x2="160" y2="40" stroke="url(#quantumGradient)" strokeWidth="1" strokeDasharray="5,5" />
              <line x1="160" y1="60" x2="220" y2="60" stroke="url(#quantumGradient)" strokeWidth="1" strokeDasharray="5,5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToServices}
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
