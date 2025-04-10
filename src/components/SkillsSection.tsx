import React, { useEffect, useRef } from 'react';

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const skills: Skill[] = [
  {
    category: "Linguagens de Programação",
    items: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 75 },
      { name: "PHP", level: 70 },
      { name: "Java", level: 60 }
    ]
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML/CSS", level: 95 },
      { name: "React", level: 90 },
      { name: "Vue.js", level: 80 },
      { name: "Angular", level: 70 },
      { name: "TailwindCSS", level: 85 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
      { name: "Django", level: 70 },
      { name: "Laravel", level: 65 },
      { name: "Spring Boot", level: 60 }
    ]
  },
  {
    category: "Ferramentas & Outros",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "CI/CD", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Agile/Scrum", level: 85 }
    ]
  }
];

const SkillsSection = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.skill-progress');
            progressBars.forEach((bar: Element) => {
              const progressBar = bar as HTMLElement;
              const width = progressBar.getAttribute('data-progress') || '0';
              setTimeout(() => {
                progressBar.style.transform = `scaleX(${parseInt(width) / 100})`;
              }, 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
          Minhas <span className="text-primary">Habilidades</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          Como profissional de TI, desenvolvi um conjunto diversificado de habilidades técnicas
          que me permitem enfrentar desafios complexos e entregar soluções de alta qualidade.
        </p>
        
        <div ref={skillsRef} className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="bg-tech-gray/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">{skill.category}</h3>
              
              <div className="space-y-5">
                {skill.items.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm text-foreground/70">{item.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        data-progress={item.level}
                        style={{ transform: 'scaleX(0)' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Metodologias & Abordagens</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Agile/Scrum", icon: "📊" },
              { name: "TDD", icon: "🧪" },
              { name: "CI/CD", icon: "🔄" },
              { name: "Clean Code", icon: "✨" },
              { name: "Microservices", icon: "🧩" },
              { name: "DevOps", icon: "🛠️" },
              { name: "UX Design", icon: "🎨" },
              { name: "Responsive Design", icon: "📱" }
            ].map((method, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{method.icon}</div>
                <h4 className="font-medium">{method.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
