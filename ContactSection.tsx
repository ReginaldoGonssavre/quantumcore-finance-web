
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "contato@aigronovatech.com",
      link: "mailto:contato@aigronovatech.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefone",
      info: "+55 (11) 9999-0000",
      link: "tel:+5511999900000"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localização",
      info: "São Paulo, SP - Brasil",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-quantum text-4xl sm:text-5xl font-bold mb-6 text-gradient">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para revolucionar suas operações financeiras com tecnologia quântica? 
            Vamos conversar sobre como podemos ajudar sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="scroll-reveal">
              <h3 className="font-quantum text-2xl font-bold mb-8 text-foreground">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.title}
                    href={item.link}
                    className="flex items-center gap-4 glass-effect p-6 rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-lg text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.info}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-12 scroll-reveal" style={{ animationDelay: '0.2s' }}>
                <h4 className="font-quantum text-lg font-bold mb-4 text-foreground">
                  Redes Sociais
                </h4>
                <div className="flex gap-4">
                  {['LinkedIn', 'Twitter', 'GitHub'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-lg transition-all duration-300"
                    >
                      <span className="text-sm font-medium">{social[0]}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="scroll-reveal" style={{ animationDelay: '0.3s' }}>
              <form onSubmit={handleSubmit} className="glass-effect rounded-xl p-8">
                <h3 className="font-quantum text-2xl font-bold mb-6 text-foreground">
                  Envie sua Mensagem
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
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
                      className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
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
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground"
                    placeholder="Nome da sua empresa"
                  />
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 text-foreground resize-none"
                    placeholder="Conte-nos sobre seu projeto ou como podemos ajudar..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 quantum-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 scroll-reveal">
          <div className="glass-effect rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              <h3 className="font-quantum text-xl font-bold text-foreground">
                Garantia de Resposta
              </h3>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Respondemos a todas as mensagens em até 24 horas. Nossa equipe está 
              pronta para discutir seus projetos e mostrar como a tecnologia quântica 
              pode transformar seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
