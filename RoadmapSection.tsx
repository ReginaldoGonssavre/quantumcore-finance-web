
import React from 'react';
import { CheckCircle, Circle, Clock, Rocket } from 'lucide-react';

const RoadmapSection = () => {
  const phases = [
    {
      phase: "Fase 1",
      title: "Fundação Quântica",
      status: "completed",
      timeline: "Q1 2024",
      description: "Desenvolvimento da infraestrutura base e algoritmos quânticos fundamentais.",
      achievements: [
        "API Gateway implementado",
        "Serviços de autenticação e core banking",
        "Simuladores quânticos básicos",
        "Interface web responsiva"
      ]
    },
    {
      phase: "Fase 2",
      title: "IA Financeira Avançada",
      status: "current",
      timeline: "Q2-Q3 2024",
      description: "Implementação de módulos de IA para análise preditiva e aconselhamento financeiro.",
      achievements: [
        "AI Financial Advisor funcional",
        "Análise de risco quântica",
        "Sistema de recomendações personalizadas",
        "Integração com dados de mercado em tempo real"
      ]
    },
    {
      phase: "Fase 3",
      title: "Ecossistema Completo",
      status: "planned",
      timeline: "Q4 2024",
      description: "Expansão para um ecossistema financeiro completo com todos os módulos integrados.",
      achievements: [
        "Gestão completa de cartões",
        "Sistema de empréstimos P2P",
        "Integração Open Finance completa",
        "Módulos de seguros e investimentos"
      ]
    },
    {
      phase: "Fase 4",
      title: "Hardware Quântico Real",
      status: "future",
      timeline: "2025+",
      description: "Migração para hardware quântico real e escalabilidade global da plataforma.",
      achievements: [
        "Integração com computadores quânticos IBM/Google",
        "Criptografia pós-quântica nativa",
        "Expansão internacional",
        "Parcerias estratégicas globais"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'current':
        return <Clock className="w-6 h-6 text-primary" />;
      case 'planned':
        return <Circle className="w-6 h-6 text-secondary" />;
      case 'future':
        return <Rocket className="w-6 h-6 text-accent" />;
      default:
        return <Circle className="w-6 h-6 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-emerald-500';
      case 'current':
        return 'from-primary to-secondary';
      case 'planned':
        return 'from-secondary to-accent';
      case 'future':
        return 'from-accent to-primary';
      default:
        return 'from-muted to-muted-foreground';
    }
  };

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-quantum text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            Roadmap Tecnológico
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa jornada para revolucionar o mercado financeiro através da computação quântica, 
            desde a fundação até a implementação com hardware quântico real.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`scroll-reveal flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${getStatusColor(phase.status)} rounded-full flex items-center justify-center border-4 border-background shadow-lg`}>
                    {getStatusIcon(phase.status)}
                  </div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="glass-effect rounded-xl p-8 hover:shadow-2xl transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${getStatusColor(phase.status)} text-white rounded-full text-sm font-medium`}>
                        {phase.phase}
                      </span>
                      <span className="text-sm text-muted-foreground font-medium">
                        {phase.timeline}
                      </span>
                    </div>

                    <h3 className="font-quantum text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {phase.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {phase.description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground mb-2">Marcos Principais:</h4>
                      {phase.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getStatusColor(phase.status)} mt-2 flex-shrink-0`}></div>
                          <span className="text-muted-foreground text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mt-20 scroll-reveal">
          <div className="glass-effect rounded-2xl p-8 text-center">
            <h3 className="font-quantum text-2xl font-bold mb-4 text-gradient">
              Nossa Visão de Futuro
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Estamos construindo a ponte entre a computação quântica teórica e aplicações práticas 
              no mercado financeiro. Nossa meta é democratizar o acesso a tecnologias quânticas, 
              oferecendo soluções financeiras mais seguras, eficientes e inteligentes para todos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
