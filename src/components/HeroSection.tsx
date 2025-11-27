
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const codeBlockRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simulate a typing effect
    if (typingRef.current) {
      const phrases = ['Desenvolvedor Back-end', 'Machine Learning', 'Ciência de dados', 'Especialista em Web'];
      let currentPhrase = 0;
      let currentChar = 0;
      let isDeleting = false;
      let typeSpeed = 100;

      const type = () => {
        const current = phrases[currentPhrase];
        
        if (isDeleting) {
          if (typingRef.current) {
            typingRef.current.textContent = current.substring(0, currentChar - 1);
            currentChar--;
          }
          typeSpeed = 50;
        } else {
          if (typingRef.current) {
            typingRef.current.textContent = current.substring(0, currentChar + 1);
            currentChar++;
          }
          typeSpeed = 100;
        }

        if (!isDeleting && currentChar === current.length) {
          // Pause at the end of typing
          isDeleting = true;
          typeSpeed = 1500;
        } else if (isDeleting && currentChar === 0) {
          isDeleting = false;
          currentPhrase = (currentPhrase + 1) % phrases.length;
          typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
      };

      setTimeout(type, 1000);
    }

    // Animation for code
    if (codeBlockRef.current) {
      const codeBlock = codeBlockRef.current;
      const lines = codeBlock.querySelectorAll('.code-line');
      
      lines.forEach((line, index) => {
        const element = line as HTMLElement;
        element.style.opacity = '0';
        element.style.transform = 'translateX(20px)';
        
        setTimeout(() => {
          element.style.transition = 'all 0.5s ease';
          element.style.opacity = '1';
          element.style.transform = 'translateX(0)';
        }, 1000 + (index * 200));
      });
    }
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-tech-teal/5 -z-10" />
      
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-12">
        <div className="flex flex-col space-y-6">
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight animate-fade-in"
          >
            Olá, sou<br />
            <span className="text-primary">Luis Eduardo Michaud</span>
          </h1>
          
          <div className="flex items-center h-12">
            <span ref={typingRef} className="text-xl md:text-2xl font-medium text-secondary"></span>
            <span className="typing-cursor ml-1 text-secondary text-xl md:text-2xl">|</span>
          </div>
          
          <p 
            ref={subtitleRef} 
            className="text-foreground/80 max-w-md animate-fade-in"
          >
            Transformando ideias em soluções digitais com código limpo e design elegante.
          </p>
          
          <div className="flex space-x-4 animate-fade-in delay-300">
            <a href="#contact" className="btn-primary">
              Entre em contato
            </a>
            <a href="#projects" className="btn-outline">
              Ver projetos
            </a>
          </div>
          
          <div className="flex space-x-4 pt-4 animate-fade-in delay-500">
            <a 
              href="https://github.com/MichasISBACK" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-foreground/20 hover:border-primary hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/luis-michaud-552625272/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-foreground/20 hover:border-primary hover:text-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:devluism1@gmail.com" 
              className="p-2 rounded-full border border-foreground/20 hover:border-primary hover:text-primary transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div 
          ref={codeBlockRef} 
          className="code-block hidden md:block shadow-xl rounded-lg overflow-hidden animate-float"
        >
          <div className="bg-tech-dark/90 py-2 px-4 flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-white/60 text-xs">developer.js</span>
          </div>
          <pre className="text-[14px] p-4 overflow-x-auto">
            <code>
              <div className="code-line"><span className="text-blue-400">class</span> <span className="text-yellow-300">Desenvolvedor</span> {`{`}</div>
              <div className="code-line pl-6"><span className="text-purple-400">Construtor</span>() {`{`}</div>
              <div className="code-line pl-12"><span className="text-green-400">this</span>.<span className="text-blue-300">nome</span> = <span className="text-orange-300">'Luis Eduardo Michaud'</span>;</div>
              <div className="code-line pl-12"><span className="text-green-400">this</span>.<span className="text-blue-300">stack</span> = [<span className="text-orange-300">'JavaScript'</span>, <span className="text-orange-300">'React'</span>, <span className="text-orange-300">'Node.js'</span>];</div>
              <div className="code-line pl-12"><span className="text-green-400">this</span>.<span className="text-blue-300">isAvailableForHire</span> = <span className="text-purple-400">true</span>;</div>
              <div className="code-line pl-6">{`}`}</div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line pl-6"><span className="text-purple-400">code</span>() {`{`}</div>
              <div className="code-line pl-12"><span className="text-blue-400">return</span> <span className="text-orange-300">'Limpo, Soluções Eficientes'</span>;</div>
              <div className="code-line pl-6">{`}`}</div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line pl-6"><span className="text-purple-400">solve</span>(<span className="text-blue-300">problem</span>) {`{`}</div>
              <div className="code-line pl-12"><span className="text-purple-400">const</span> <span className="text-blue-300">solution</span> = <span className="text-green-400">this</span>.<span className="text-blue-300">analyzeAndDesign</span>(<span className="text-blue-300">problem</span>);</div>
              <div className="code-line pl-12"><span className="text-blue-400">return</span> <span className="text-blue-300">solution</span>;</div>
              <div className="code-line pl-6">{`}`}</div>
              <div className="code-line">{`}`}</div>
              <div className="code-line">&nbsp;</div>
              <div className="code-line"><span className="text-purple-400">const</span> <span className="text-blue-300">me</span> = <span className="text-blue-400">new</span> <span className="text-yellow-300">Developer</span>();</div>
              <div className="code-line"><span className="text-blue-300">eu</span>.<span className="text-purple-400">code</span>();</div>
            </code>
          </pre>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={30} />
      </a>
    </section>
  );
};

export default HeroSection;
