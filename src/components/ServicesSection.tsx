
import React from 'react';
import { 
  Shield, 
  Cpu, 
  CreditCard, 
  TrendingUp, 
  Brain, 
  Layers, 
  DollarSign, 
  Network,
  Lock,
  BarChart3
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Network className="w-8 h-8" />,
      title: "API Gateway",
      description: "Ponto de entrada unificado para todos os serviços com alta disponibilidade e segurança.",
      benefits: ["Controle Centralizado", "Rate Limiting", "Monitoramento"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Auth Service",
      description: "Gerenciamento de usuários, registro e autenticação avançada com JWT e MFA.",
      benefits: ["Segurança Máxima", "Autenticação Biométrica", "Gestão de Permissões"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Core Banking Service",
      description: "Funcionalidades essenciais de contas, saldos e transferências em tempo real.",
      benefits: ["Transações Instantâneas", "Saldos em Tempo Real", "Histórico Completo"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Investment Service",
      description: "Otimização de portfólio quântica, simulação de risco e criptografia pós-quântica.",
      benefits: ["Algoritmos Quânticos", "Análise Preditiva", "Gestão de Risco"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Financial Advisor",
      description: "Aconselhamento financeiro personalizado com inteligência artificial avançada.",
      benefits: ["Conselhos Personalizados", "Análise Comportamental", "Planejamento Futuro"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Card Management",
      description: "Emissão e gestão completa de cartões físicos e virtuais com segurança quântica.",
      benefits: ["Cartões Virtuais", "Controle Total", "Segurança Avançada"],
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Loan Credit Service",
      description: "Gerenciamento inteligente de empréstimos P2P e cálculo de score com IA.",
      benefits: ["Score Inteligente", "Empréstimos P2P", "Análise de Crédito"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Open Finance",
      description: "Integração completa com Open Banking e Open Insurance (PSD2, Pix, SPB).",
      benefits: ["Integração Pix", "Open Banking", "Compliance PSD2"],
      color: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-quantum text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Módulos avançados da plataforma QuantumCore, cada um projetado para revolucionar 
            diferentes aspectos do mercado financeiro com tecnologia quântica.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="scroll-reveal group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="glass-effect rounded-xl p-6 h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 border-l-4 border-l-transparent hover:border-l-primary">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="font-quantum text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-2"></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 scroll-reveal">
          <div className="glass-effect rounded-2xl p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gradient font-quantum">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient font-quantum">&lt;10ms</div>
                <div className="text-muted-foreground">Latência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient font-quantum">256-bit</div>
                <div className="text-muted-foreground">Criptografia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gradient font-quantum">24/7</div>
                <div className="text-muted-foreground">Suporte</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
