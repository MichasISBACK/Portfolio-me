
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-tech-dark text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Dev<span className="text-primary">Portfolio</span>
            </h3>
            <p className="text-white/70 mb-6 max-w-md">
              Desenvolvedor apaixonado por criar soluções digitais elegantes e eficientes.
              Especializado em tecnologias web modernas e arquitetura de software.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-primary/80 transition-colors"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-primary/80 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-primary/80 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="mailto:exemplo@email.com" 
                className="p-2 rounded-full bg-white/10 hover:bg-primary/80 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {['Início', 'Sobre', 'Projetos', 'Habilidades', 'Experiência', 'Blog', 'Contato'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/70">
              <li>São Paulo, Brasil</li>
              <li>seuemail@exemplo.com</li>
              <li>+55 (11) 98765-4321</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 p-3 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
