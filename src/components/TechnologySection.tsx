
import React from 'react';
import { Cpu, Shield, Zap, Brain, Network, Database } from 'lucide-react';

const TechnologySection = () => {
  const technologies = [
    {
      icon: Cpu,
      title: "Computação Quântica",
      description: "Processamento quântico para análises financeiras ultra-rápidas",
      features: ["Algoritmos Quânticos", "Processamento Paralelo", "Otimização Avançada"]
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "IA avançada para predições e análises de mercado",
      features: ["Machine Learning", "Deep Learning", "Análise Preditiva"]
    },
    {
      icon: Shield,
      title: "Segurança Quântica",
      description: "Criptografia quântica para proteção máxima de dados",
      features: ["Criptografia Quântica", "Proteção de Dados", "Auditoria Contínua"]
    },
    {
      icon: Network,
      title: "Blockchain Híbrido",
      description: "Tecnologia blockchain otimizada com computação quântica",
      features: ["Smart Contracts", "Transações Seguras", "Descentralização"]
    },
    {
      icon: Database,
      title: "Big Data Analytics",
      description: "Análise de grandes volumes de dados financeiros",
      features: ["Data Mining", "Análise em Tempo Real", "Insights Avançados"]
    },
    {
      icon: Zap,
      title: "Performance Ultra-Rápida",
      description: "Velocidade quântica para execução instantânea",
      features: ["Baixa Latência", "Alta Throughput", "Escalabilidade"]
    }
  ];

  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-quantum text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient-quantum">
            Tecnologia de Ponta
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Revolucionando o mercado financeiro com as mais avançadas tecnologias quânticas e de inteligência artificial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="scroll-reveal glass-phosphor rounded-xl p-8 hover:quantum-glow transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="w-16 h-16 glass-phosphor rounded-lg flex items-center justify-center mb-4 group-hover:quantum-glow-cyan transition-all duration-300">
                  <tech.icon size={32} className="text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                <h3 className="font-quantum text-xl font-bold text-foreground mb-3">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="space-y-2">
                {tech.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
