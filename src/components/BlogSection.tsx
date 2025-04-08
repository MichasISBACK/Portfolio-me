
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
}

const articles: Article[] = [
  {
    id: 1,
    title: "Como implementar autenticação JWT em aplicações React e Node.js",
    excerpt: "Um guia completo sobre como criar um sistema de autenticação seguro com JSON Web Tokens em sua aplicação fullstack.",
    date: "15 Mar 2023",
    author: "Seu Nome",
    readTime: "8 min",
    category: "Segurança",
    image: "/placeholder.svg"
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
          Meu <span className="text-primary">Blog</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          Compartilho regularmente artigos técnicos sobre desenvolvimento e boas práticas em tecnologia.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article key={article.id} className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-12 h-12 opacity-40"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-xs text-foreground/60 mb-3">
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {article.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span>{article.date}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime} leitura</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-foreground/70 mb-4 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary hover:text-primary/80 text-sm font-medium transition-colors"
                >
                  Ler artigo 
                  <ArrowRight size={16} className="ml-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="#" className="btn-outline inline-flex items-center">
            Ver todos os artigos
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
