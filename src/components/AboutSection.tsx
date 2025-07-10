
import React from 'react';
import { Users, Award, Globe, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Users, label: "Especialistas", value: "50+" },
    { icon: Award, label: "Prêmios", value: "15+" },
    { icon: Globe, label: "Países", value: "25+" },
    { icon: Lightbulb, label: "Patentes", value: "30+" }
  ];

  const team = [
    {
      name: "Dr. Marcus Silva",
      role: "CEO & Quantum Architect",
      description: "PhD em Computação Quântica, 15 anos em fintech"
    },
    {
      name: "Ana Rodriguez",
      role: "CTO & AI Specialist",
      description: "Especialista em IA, ex-Google e Microsoft"
    },
    {
      name: "Prof. João Santos",
      role: "Chief Scientist",
      description: "Professor MIT, pioneiro em criptografia quântica"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-quantum text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient-quantum">
            Sobre a AigroNovaTech
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pioneiros em computação quântica aplicada ao mercado financeiro, transformando o futuro das finanças digitais
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="scroll-reveal text-center glass-phosphor rounded-xl p-6 hover:quantum-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 mx-auto mb-4 glass-phosphor rounded-lg flex items-center justify-center">
                <stat.icon size={24} className="text-primary" />
              </div>
              <div className="font-quantum text-2xl font-bold text-gradient-quantum mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="scroll-reveal glass-phosphor rounded-xl p-8 mb-16 hover:quantum-glow transition-all duration-300">
          <h3 className="font-quantum text-2xl font-bold text-foreground mb-6 text-center">
            Nossa Missão
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-4xl mx-auto">
            Democratizar o acesso à computação quântica no setor financeiro, fornecendo soluções inovadoras 
            que combinam velocidade quântica, segurança absoluta e inteligência artificial avançada para 
            revolucionar a forma como o mundo interage com as finanças digitais.
          </p>
        </div>

        {/* Team */}
        <div className="scroll-reveal">
          <h3 className="font-quantum text-2xl font-bold text-foreground mb-8 text-center">
            Liderança Visionária
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="glass-phosphor rounded-xl p-6 text-center hover:quantum-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-quantum text-xl font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h4 className="font-quantum text-lg font-bold text-foreground mb-2">
                  {member.name}
                </h4>
                <p className="text-primary text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
