
import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Assunto é obrigatório';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <section id="contact" className="section-padding bg-tech-gray/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
          Entre em <span className="text-primary">Contato </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          Tem um projeto em mente ou gostaria de discutir oportunidades de colaboração?
          Entre em contato comigo pelos canais abaixo ou use o formulário.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:devluism1@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                      devluism1@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Telefone</h4>
                    <a href="tel:+554198835-3340" className="text-foreground/70 hover:text-primary transition-colors">
                      +55 (41) 98835-3340
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium">Localização</h4>
                    <p className="text-foreground/70">
                      Paranaguá, Paraná, Brasil.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-medium mb-4">Me encontre nas redes</h4>
                <div className="flex space-x-3">
                  {['github', 'linkedin', 'twitter', 'instagram'].map((social) => (
                    <a 
                      key={social}
                      href={`https://${social}.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-tech-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <span className="sr-only">{social}</span>
                      <div className="w-4 h-4"></div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Vamos trabalhar juntos?</h3>
              <p className="text-white/80 mb-4">
                Estou disponível para projetos freelance, oportunidades de trabalho remoto e colaborações.
              </p>
              <a href="#" className="inline-block px-4 py-2 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors">
                Ver meu currículo
              </a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-6">Envie uma mensagem</h3>
              
              {submitSuccess && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-lg border border-green-200">
                  Sua mensagem foi enviada com sucesso! Entrarei em contato o mais breve possível.
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Nome</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors",
                        errors.name ? "border-red-300" : "border-gray-200"
                      )}
                      placeholder="Seu nome"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={cn(
                        "w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors",
                        errors.email ? "border-red-300" : "border-gray-200"
                      )}
                      placeholder="seu@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Assunto</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={cn(
                      "w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors",
                      errors.subject ? "border-red-300" : "border-gray-200"
                    )}
                    placeholder="Assunto da mensagem"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={cn(
                      "w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors",
                      errors.message ? "border-red-300" : "border-gray-200"
                    )}
                    placeholder="Digite sua mensagem aqui..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "btn-primary inline-flex items-center",
                    isSubmitting && "opacity-70 cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensagem
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
