
import React from 'react';
import { Cpu, Database, Cloud, Shield, Zap, Code } from 'lucide-react';

const TechnologySection = () => {
  const technologies = [
    {
      icon: <Cpu className="w-12 h-12" />,
      title: "Computação Quântica",
      description: "Algoritmos quânticos para otimização de portfólios e análise de risco em tempo real.",
      details: ["Algoritmos de Grover", "Simulação Quântica", "Criptografia Pós-Quântica"]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Inteligência Artificial",
      description: "IA avançada para análise preditiva e aconselhamento financeiro personalizado.",
      details: ["Machine Learning", "Deep Learning", "Natural Language Processing"]
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Backend Robusto",
      description: "Arquitetura escalável com Python/FastAPI, PostgreSQL e Redis para alta performance.",
      details: ["Python/FastAPI", "PostgreSQL", "Redis Cache"]
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Microsserviços",
      description: "Arquitetura distribuída com Docker/Kubernetes para escalabilidade máxima.",
      details: ["Docker Containers", "Kubernetes", "Service Mesh"]
    }
  ];

  return (
    <section id="technology" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-quantum text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            Tecnologia Avançada
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma combina computação quântica, inteligência artificial e arquitetura 
            moderna para resolver problemas financeiros complexos de forma inovadora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={tech.title}
              className="scroll-reveal flex gap-6 glass-effect p-8 rounded-xl hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex-shrink-0">
                <div className="p-4 bg-gradient-to-r from-primary to-secondary rounded-lg text-white">
                  {tech.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-quantum text-2xl font-bold mb-3 text-foreground">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {tech.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.details.map((detail, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted/50 text-foreground rounded-full text-sm border border-primary/20"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="scroll-reveal">
          <div className="text-center mb-12">
            <h3 className="font-quantum text-3xl font-bold mb-4 text-foreground">
              Como Funciona
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Processo simplificado de como nossa tecnologia quântica revoluciona as finanças
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="font-quantum text-xl font-bold mb-3 text-foreground">
                1. Coleta de Dados
              </h4>
              <p className="text-muted-foreground">
                Coletamos e processamos dados financeiros em tempo real de múltiplas fontes
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="font-quantum text-xl font-bold mb-3 text-foreground">
                2. Processamento Quântico
              </h4>
              <p className="text-muted-foreground">
                Algoritmos quânticos analisam padrões complexos e otimizam decisões financeiras
              </p>
            </div>

            <div className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>
              <h4 className="font-quantum text-xl font-bold mb-3 text-foreground">
                3. Resultados Instantâneos
              </h4>
              <p className="text-muted-foreground">
                Entregamos insights precisos e recomendações personalizadas em milissegundos
              </p>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-20 scroll-reveal">
          <div className="glass-effect rounded-2xl p-8 text-center">
            <h3 className="font-quantum text-2xl font-bold mb-8 text-foreground">
              Stack Tecnológico
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {['React.js', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'].map((tech, index) => (
                <div key={tech} className="group">
                  <div className="p-4 bg-muted/30 rounded-lg hover:bg-primary/20 transition-colors duration-300">
                    <Code className="w-8 h-8 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    <div className="text-sm font-medium text-foreground">{tech}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
