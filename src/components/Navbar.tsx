
import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp, PieChart, Shield, Vault, Zap } from 'lucide-react';
import { BRAND_NAME, BRAND_SUBTITLE, MICROSERVICES } from '@/config/branding';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Microsserviços', href: '#services' },
    { label: 'Tecnologia', href: '#technology' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Sobre', href: '#about' },
    { label: 'Contato', href: '#contact' }
  ];

  const getServiceIcon = (iconName: string) => {
    const icons = {
      TrendingUp,
      PieChart,
      Shield,
      Vault,
      Zap
    };
    return icons[iconName as keyof typeof icons] || TrendingUp;
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-12 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'navbar-phosphor border-b border-primary/30 shadow-lg' 
          : 'navbar-phosphor border-b border-primary/10'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <div className="font-quantum text-2xl font-bold">
                <span className="text-gradient-quantum">{BRAND_NAME}</span>
                <div className="text-xs text-primary/60 font-normal tracking-wider">
                  {BRAND_SUBTITLE}
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-primary/80 hover:text-primary transition-colors duration-300 px-3 py-2 text-sm font-medium relative group"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full quantum-glow"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Microservices Icons */}
            <div className="hidden lg:flex items-center space-x-3">
              {MICROSERVICES.slice(0, 3).map((service) => {
                const IconComponent = getServiceIcon(service.icon);
                return (
                  <div
                    key={service.id}
                    className="p-2 rounded-full glass-phosphor hover:quantum-glow transition-all duration-300 cursor-pointer group"
                    title={service.name}
                  >
                    <IconComponent size={18} className="text-primary group-hover:text-secondary transition-colors" />
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('#contact')}
                className="bg-gradient-to-r from-primary to-secondary text-black px-6 py-2 rounded-full font-medium hover:quantum-glow hover:scale-105 transition-all duration-300"
              >
                Começar Agora
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-primary hover:text-secondary transition-colors duration-300"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden navbar-phosphor border-t border-primary/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-primary/80 hover:text-primary hover:bg-primary/10 rounded-md transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#contact')}
                className="block w-full mt-4 bg-gradient-to-r from-primary to-secondary text-black px-4 py-2 rounded-full font-medium text-center"
              >
                Começar Agora
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Quantum Particles Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="particle-quantum"></div>
        <div className="particle-quantum"></div>
        <div className="particle-quantum"></div>
        <div className="particle-quantum"></div>
        <div className="particle-quantum"></div>
      </div>
    </>
  );
};

export default Navbar;
