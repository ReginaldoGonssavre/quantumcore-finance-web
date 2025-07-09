
import React, { useEffect, useState } from 'react';
import { ChevronDown, Sparkles, Zap } from 'lucide-react';
import { BRAND_NAME, BRAND_SUBTITLE, HERO_HEADLINE, HERO_SUBHEADLINE, HERO_BUTTON_SERVICES, HERO_BUTTON_CONTACT } from '@/config/branding';

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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Dynamic Background Elements */}
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
        <div 
          className="absolute w-64 h-64 bg-gradient-radial from-accent/15 to-transparent rounded-full blur-3xl floating-animation"
          style={{
            left: '50%',
            top: '30%',
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="scroll-reveal">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="text-primary mr-3" size={32} />
            <span className="text-primary font-quantum text-sm tracking-wider">NOVA GERAÇÃO</span>
            <Sparkles className="text-primary ml-3" size={32} />
          </div>
          
          <h1 className="font-quantum text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-gradient-quantum">{BRAND_NAME}</span>
          </h1>
          
          <div className="text-lg sm:text-xl text-primary/60 mb-8 font-quantum tracking-wider">
            {BRAND_SUBTITLE}
          </div>
        </div>

        <div className="scroll-reveal" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            {HERO_HEADLINE}
          </h2>
        </div>

        <div className="scroll-reveal" style={{ animationDelay: '0.4s' }}>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-4xl mx-auto leading-relaxed">
            {HERO_SUBHEADLINE}
          </p>
        </div>

        <div className="scroll-reveal flex flex-col sm:flex-row gap-6 justify-center items-center mb-16" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={scrollToServices}
            className="bg-gradient-to-r from-primary to-secondary text-black px-10 py-4 rounded-full font-semibold text-lg hover:quantum-glow hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Zap size={20} />
            {HERO_BUTTON_SERVICES}
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-phosphor text-primary px-10 py-4 rounded-full font-semibold text-lg hover:quantum-glow-cyan hover:scale-105 transition-all duration-300 border border-primary/30"
          >
            {HERO_BUTTON_CONTACT}
          </button>
        </div>

        {/* Quantum Circuit Visualization - Enhanced */}
        <div className="scroll-reveal" style={{ animationDelay: '0.8s' }}>
          <div className="relative">
            <svg width="400" height="120" className="mx-auto opacity-60">
              <defs>
                <linearGradient id="quantumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(120, 100%, 50%)" />
                  <stop offset="50%" stopColor="hsl(180, 100%, 60%)" />
                  <stop offset="100%" stopColor="hsl(280, 100%, 70%)" />
                </linearGradient>
                
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Quantum Circuit Lines */}
              <line x1="50" y1="30" x2="350" y2="30" stroke="url(#quantumGradient)" strokeWidth="2" filter="url(#glow)" className="pulse-quantum" />
              <line x1="50" y1="60" x2="350" y2="60" stroke="url(#quantumGradient)" strokeWidth="2" filter="url(#glow)" className="pulse-quantum" />
              <line x1="50" y1="90" x2="350" y2="90" stroke="url(#quantumGradient)" strokeWidth="2" filter="url(#glow)" className="pulse-quantum" />
              
              {/* Quantum Gates */}
              <rect x="100" y="20" width="20" height="20" fill="none" stroke="url(#quantumGradient)" strokeWidth="2" filter="url(#glow)" />
              <rect x="180" y="50" width="20" height="20" fill="none" stroke="url(#quantumGradient)" strokeWidth="2" filter="url(#glow)" />
              <rect x="260" y="80" width="20" height="20" fill="none" stroke="url(#quantumGradient)" strokeWidth="2" filter="url(#glow)" />
              
              {/* Connection Lines */}
              <line x1="110" y1="40" x2="190" y2="50" stroke="url(#quantumGradient)" strokeWidth="1" strokeDasharray="5,5" filter="url(#glow)" />
              <line x1="190" y1="70" x2="270" y2="80" stroke="url(#quantumGradient)" strokeWidth="1" strokeDasharray="5,5" filter="url(#glow)" />
              
              {/* Quantum Entanglement Symbols */}
              <circle cx="150" cy="30" r="3" fill="hsl(120, 100%, 50%)" filter="url(#glow)" />
              <circle cx="230" cy="60" r="3" fill="hsl(180, 100%, 60%)" filter="url(#glow)" />
              <circle cx="310" cy="90" r="3" fill="hsl(280, 100%, 70%)" filter="url(#glow)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToServices}
          className="text-primary/60 hover:text-primary transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
