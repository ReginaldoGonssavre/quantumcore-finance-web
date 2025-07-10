
import React from 'react';
import { TrendingUp, PieChart, Shield, Vault, Zap, ArrowRight } from 'lucide-react';
import { MICROSERVICES } from '@/config/branding';

const ServicesSection = () => {
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

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-quantum text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient-quantum">
            Microsserviços Quânticos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubra nossa suíte completa de soluções financeiras potencializadas por computação quântica e inteligência artificial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MICROSERVICES.map((service, index) => {
            const IconComponent = getServiceIcon(service.icon);
            return (
              <div
                key={service.id}
                className="scroll-reveal glass-phosphor rounded-xl p-8 hover:quantum-glow transition-all duration-300 group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 glass-phosphor rounded-lg flex items-center justify-center mb-4 group-hover:quantum-glow-cyan transition-all duration-300">
                    <IconComponent size={32} className="text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <h3 className="font-quantum text-xl font-bold text-foreground mb-3">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex items-center text-primary group-hover:text-secondary transition-colors duration-300">
                  <span className="text-sm font-medium mr-2">Saiba mais</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:quantum-glow hover:scale-105 transition-all duration-300">
            Explorar Todos os Serviços
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
