
import React from 'react';
import { Code, Server, Layout, DownloadCloud } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
          Sobre <span className="text-primary">Mim</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-poppins">Minha trajetória na tecnologia</h3>
            <p className="text-foreground/80 leading-relaxed">
              Sou um profissional de TI apaixonado por criar soluções tecnológicas que resolvem problemas reais.
              Com mais de X anos de experiência no desenvolvimento de aplicações web e sistemas,
              combinando habilidades técnicas com uma mentalidade orientada a resultados.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Minha jornada começou sendo Estágiario de Suporte de TI. Desde então, tenho trabalhado em diversos
              projetos desafiadores que me permitiram expandir meu conhecimento e aprimorar minhas habilidades em
              desenvolvimento de software.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Sou movido pela curiosidade e pelo desejo constante de aprender. Acredito que a tecnologia é
              uma ferramenta poderosa para transformar ideias em realidade e estou sempre em busca de
              novas maneiras de aplicar meu conhecimento para criar soluções inovadoras.
            </p>
            
            <a href="#" className="btn-outline inline-flex items-center gap-2 mt-4">
              <DownloadCloud size={18} />
              Baixar Currículo
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                <Code className="text-primary" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Desenvolvimento Frontend</h4>
              <p className="text-foreground/70 text-sm">
                Criação de interfaces intuitivas e responsivas usando tecnologias modernas como React, Angular e Vue.js.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-4">
                <Server className="text-secondary" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Desenvolvimento Backend</h4>
              <p className="text-foreground/70 text-sm">
                Construção de APIs robustas e eficientes com Node.js, Python, e serviços em nuvem.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4">
                <Layout className="text-primary" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">Arquitetura de Software</h4>
              <p className="text-foreground/70 text-sm">
                Design de sistemas escaláveis seguindo princípios de código limpo e boas práticas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 transform transition-transform hover:-translate-y-2 hover:shadow-xl">
              <div className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-4">
                <Server className="text-secondary" size={24} />
              </div>
              <h4 className="text-xl font-semibold mb-2">DevOps</h4>
              <p className="text-foreground/70 text-sm">
                Implementação de CI/CD, containerização, e automação de infraestrutura.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 text-center">Stack Tecnológico</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <h4 className="font-medium">Linguagens</h4>
              <p className="text-sm text-foreground/70 mt-2">JavaScript, TypeScript, Python, PHP</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <h4 className="font-medium">Frontend</h4>
              <p className="text-sm text-foreground/70 mt-2">React, Vue.js, Angular, HTML/CSS</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <h4 className="font-medium">Backend</h4>
              <p className="text-sm text-foreground/70 mt-2">Node.js, Express, Django, Laravel</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <h4 className="font-medium">DevOps & Tools</h4>
              <p className="text-sm text-foreground/70 mt-2">Docker, Git, AWS, CI/CD</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
