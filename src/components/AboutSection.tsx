
import React from 'react';
import { Target, Eye, Heart, Shield, Lightbulb, Users } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Inovação",
      description: "Pioneirismo em tecnologias quânticas aplicadas ao mercado financeiro."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança",
      description: "Proteção máxima de dados com criptografia pós-quântica avançada."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Acessibilidade",
      description: "Democratizando tecnologias avançadas para todos os usuários."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-quantum text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            Sobre a AigroNovaTech
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneiros na aplicação de computação quântica e inteligência artificial 
            para revolucionar o setor financeiro global.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Mission & Vision */}
          <div className="space-y-12">
            <div className="scroll-reveal">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-lg mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-quantum text-2xl font-bold text-foreground">
                  Nossa Missão
                </h3>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Democratizar o acesso às tecnologias quânticas mais avançadas, 
                  transformando a forma como as pessoas interagem com serviços financeiros. 
                  Nosso objetivo é tornar as finanças mais seguras, eficientes e acessíveis 
                  através da inovação tecnológica.
                </p>
              </div>
            </div>

            <div className="scroll-reveal" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-secondary to-accent rounded-lg mr-4">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-quantum text-2xl font-bold text-foreground">
                  Nossa Visão
                </h3>
              </div>
              <div className="glass-effect rounded-xl p-6">
                <p className="text-muted-foreground leading-relaxed">
                  Ser a empresa líder mundial em soluções financeiras quânticas, 
                  estabelecendo novos padrões de segurança e eficiência no mercado. 
                  Visualizamos um futuro onde a computação quântica seja a base 
                  de todos os sistemas financeiros globais.
                </p>
              </div>
            </div>
          </div>

          {/* Company Story */}
          <div className="scroll-reveal" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-quantum text-2xl font-bold text-foreground mb-6">
              Nossa História
            </h3>
            <div className="glass-effect rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2023 - Fundação</h4>
                    <p className="text-muted-foreground text-sm">
                      Criada por especialistas em computação quântica e fintech com o objetivo 
                      de revolucionar o mercado financeiro.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-secondary to-accent rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">2024 - Primeiro Produto</h4>
                    <p className="text-muted-foreground text-sm">
                      Lançamento da plataforma QuantumCore com simuladores quânticos 
                      para otimização de portfólios financeiros.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-accent to-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Futuro - Expansão Global</h4>
                    <p className="text-muted-foreground text-sm">
                      Integração com hardware quântico real e expansão para mercados 
                      internacionais com parcerias estratégicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="scroll-reveal">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-quantum text-2xl font-bold text-foreground">
                Nossos Valores
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center group scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="glass-effect rounded-xl p-8 hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="inline-flex p-4 bg-gradient-to-r from-primary to-secondary rounded-lg mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h4 className="font-quantum text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 scroll-reveal">
          <div className="glass-effect rounded-2xl p-8 text-center">
            <h3 className="font-quantum text-2xl font-bold mb-6 text-foreground">
              Compromisso com a Excelência
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              Nossa equipe multidisciplinar combina décadas de experiência em computação quântica, 
              inteligência artificial, segurança cibernética e mercados financeiros. Estamos 
              comprometidos em entregar soluções que não apenas atendem, mas superam as 
              expectativas de nossos clientes.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div>
                <div className="text-2xl font-bold text-gradient font-quantum">15+</div>
                <div className="text-muted-foreground text-sm">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient font-quantum">100+</div>
                <div className="text-muted-foreground text-sm">Projetos Concluídos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient font-quantum">24/7</div>
                <div className="text-muted-foreground text-sm">Suporte Dedicado</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gradient font-quantum">99.9%</div>
                <div className="text-muted-foreground text-sm">Satisfação Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
