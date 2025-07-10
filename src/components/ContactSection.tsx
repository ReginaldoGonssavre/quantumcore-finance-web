
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    setTimeout(() => {
      toast({
        title: "Mensagem Enviada!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@aigronovatech.com",
      link: "mailto:contato@aigronovatech.com"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 9999-0000",
      link: "tel:+5511999900000"
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-quantum text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gradient-quantum">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Pronto para revolucionar seu negócio com computação quântica? Vamos conversar sobre o futuro das finanças digitais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="scroll-reveal">
            <h3 className="font-quantum text-2xl font-bold text-foreground mb-8">
              Fale Conosco
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.link}
                  className="flex items-center gap-4 glass-phosphor rounded-xl p-6 hover:quantum-glow transition-all duration-300 group"
                >
                  <div className="w-12 h-12 glass-phosphor rounded-lg flex items-center justify-center group-hover:quantum-glow-cyan transition-all duration-300">
                    <info.icon size={24} className="text-primary group-hover:text-secondary transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-quantum text-lg font-semibold text-foreground mb-1">
                      {info.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {info.content}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="glass-phosphor rounded-xl p-6">
              <h4 className="font-quantum text-lg font-semibold text-foreground mb-4">
                Horário de Atendimento
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Segunda - Sexta:</span>
                  <span className="text-foreground">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sábado:</span>
                  <span className="text-foreground">9:00 - 14:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Domingo:</span>
                  <span className="text-foreground">Fechado</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="scroll-reveal">
            <form onSubmit={handleSubmit} className="glass-phosphor rounded-xl p-8 hover:quantum-glow transition-all duration-300">
              <h3 className="font-quantum text-2xl font-bold text-foreground mb-6">
                Envie uma Mensagem
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-phosphor rounded-lg border border-primary/30 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 glass-phosphor rounded-lg border border-primary/30 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 glass-phosphor rounded-lg border border-primary/30 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 glass-phosphor rounded-lg border border-primary/30 bg-background/50 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Como podemos ajudar você com computação quântica?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:quantum-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
