import React from 'react';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  isEducation: boolean;
}

const timelineData: TimelineItem[] = [
  {
    year: "2023 - Presente",
    title: "Estágio na TI",
    subtitle: "Prefeitura de Paranaguá",
    description: "Liderando o desenvolvimento de aplicações web escaláveis e atuando como referência técnica para a equipe.",
    isEducation: false
  },
  {
    year: "2023 - 2027",
    title: "Bacharelado em Sistemas de Informação",
    subtitle: "Instituto Superior do Litoral do Paraná",
    description: "Formação completa com ênfase em desenvolvimento de software, algoritmos e estruturas de dados. Projeto de conclusão focado em aplicações web progressivas.",
    isEducation: true
  },
];

const TimelineSection = () => {
  // Separar dados por categoria
  const experiences = timelineData.filter(item => !item.isEducation);
  const education = timelineData.filter(item => item.isEducation);

  return (
    <section id="timeline" className="section-padding bg-tech-gray/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
          Minha <span className="text-primary">Trajetória</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          Confira minha experiência profissional e formação acadêmica ao longo dos anos.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Experiência Profissional */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="bg-primary text-white p-2 rounded-lg mr-2">💼</span>
              Experiência Profissional
            </h3>
            
            <div className="relative pl-8 border-l border-primary/30">
              {experiences.map((item, index) => (
                <div key={index} className="mb-10 relative">
                  <div className="timeline-dot"></div>
                  {index !== experiences.length - 1 && <div className="timeline-connector"></div>}
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm ml-6 border border-gray-100">
                    <div className="text-sm font-medium text-primary mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <div className="text-foreground/70 text-sm mb-3">{item.subtitle}</div>
                    <p className="text-foreground/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Educação */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <span className="bg-secondary text-white p-2 rounded-lg mr-2">🎓</span>
              Formação Acadêmica
            </h3>
            
            <div className="relative pl-8 border-l border-secondary/30">
              {education.map((item, index) => (
                <div key={index} className="mb-10 relative">
                  <div className="absolute left-0 w-4 h-4 bg-secondary rounded-full transform -translate-x-1/2"></div>
                  {index !== education.length - 1 && (
                    <div className="absolute left-0 top-4 h-full w-0.5 bg-secondary/20 transform -translate-x-1/2"></div>
                  )}
                  
                  <div className="bg-white p-5 rounded-lg shadow-sm ml-6 border border-gray-100">
                    <div className="text-sm font-medium text-secondary mb-1">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                    <div className="text-foreground/70 text-sm mb-3">{item.subtitle}</div>
                    <p className="text-foreground/80 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Certificações */}
        <div className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold mb-4 text-center">Certificações</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
  
            ].map((cert, index) => (
              <div key={index} className="border border-gray-100 p-4 rounded-lg text-center">
                <h4 className="font-medium mb-1">{cert.name}</h4>
                <p className="text-sm text-foreground/70">{cert.issuer} • {cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
