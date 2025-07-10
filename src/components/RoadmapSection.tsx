
import React from 'react';
import { Calendar, CheckCircle, Clock, Star } from 'lucide-react';

const RoadmapSection = () => {
  const roadmapItems = [
    {
      phase: "Fase 1",
      title: "Fundação Quântica",
      period: "Q1 2024",
      status: "completed",
      description: "Desenvolvimento da infraestrura core e algoritmos quânticos básicos",
      achievements: [
        "Arquitetura quântica implementada",
        "Primeiros algoritmos de trading",
        "Sistema de segurança básico"
      ]
    },
    {
      phase: "Fase 2",
      title: "IA & Analytics",
      period: "Q2 2024",
      status: "in-progress",
      description: "Integração de inteligência artificial e sistema de análise avançada",
      achievements: [
        "Machine Learning integrado",
        "Análise preditiva ativa",
        "Dashboard de risco"
      ]
    },
    {
      phase: "Fase 3",
      title: "Blockchain Híbrido",
      period: "Q3 2024",
      status: "upcoming",
      description: "Implementação de blockchain quântico e smart contracts avançados",
      achievements: [
        "Blockchain quântico",
        "Smart contracts 2.0",
        "DeFi integration"
      ]
    },
    {
      phase: "Fase 4",
      title: "Expansão Global",
      period: "Q4 2024",
      status: "planned",
      description: "Lançamento global e parcerias estratégicas internacionais",
      achievements: [
        "Multi-região deployment",
        "Parcerias bancárias",
        "Certificações globais"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="text-primary" size={24} />;
      case 'in-progress':
        return <Clock className="text-secondary" size={24} />;
      case 'upcoming':
        return <Calendar className="text-accent" size={24} />;
      default:
        return <Star className="text-muted-foreground" size={24} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-primary bg-primary/10';
      case 'in-progress':
        return 'border-secondary bg-secondary/10';
      case 'upcoming':
        return 'border-accent bg-accent/10';
      default:
        return 'border-muted bg-muted/10';
    }
  };

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-quantum text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient-quantum">
            Roadmap de Inovação
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Acompanhe nossa jornada de transformação do setor financeiro através da computação quântica
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30 hidden md:block"></div>

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <div
                key={item.phase}
                className="scroll-reveal flex flex-col md:flex-row items-start gap-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full glass-phosphor border-2 border-primary/30 relative z-10">
                  {getStatusIcon(item.status)}
                </div>

                {/* Content */}
                <div className={`flex-1 glass-phosphor rounded-xl p-8 hover:quantum-glow transition-all duration-300 ${getStatusColor(item.status)}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-2">
                        {item.phase}
                      </span>
                      <h3 className="font-quantum text-2xl font-bold text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {item.period}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {item.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
