
import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Uma plataforma de e-commerce completa com gerenciamento de produtos, carrinho de compras, pagamentos e painel de administração.",
    image: "/placeholder.svg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    codeSnippet: {
      language: "javascript",
      code: `// Hook de carrinho de compras
const useCart = () => {
  const [items, setItems] = useState([]);
  
  const addItem = (product, quantity = 1) => {
    setItems(prev => {
      const exists = prev.find(item => 
        item.id === product.id
      );
      
      if (exists) {
        return prev.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...prev, { ...product, quantity }];
    });
  };
  
  // Mais métodos do carrinho...
  
  return { items, addItem };
};`
    }
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, categorização e notificações.",
    image: "/placeholder.svg",
    tags: ["React", "TypeScript", "Firebase", "TailwindCSS"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com",
    codeSnippet: {
      language: "typescript",
      code: `// Task drag and drop functionality
const DraggableTask: React.FC<TaskProps> = ({ task }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'TASK',
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div 
      ref={dragRef}
      className={\`task-card \${isDragging ? 'opacity-50' : ''}\`}
    >
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-tags">
        {task.tags.map(tag => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  );
};`
    }
  },
  {
    id: 3,
    title: "Real-time Chat Application",
    description: "Aplicativo de chat em tempo real com recursos de mensagens privadas, salas de chat e notificações.",
    image: "/placeholder.svg",
    tags: ["React", "Socket.io", "Express", "MongoDB", "JWT"],
    githubUrl: "https://github.com",
    codeSnippet: {
      language: "javascript",
      code: `// Socket.io server setup
io.on('connection', (socket) => {
  console.log('New client connected');
  
  socket.on('join_room', ({ roomId, user }) => {
    socket.join(roomId);
    
    socket.to(roomId).emit('user_joined', {
      user,
      message: \`\${user.name} joined the chat\`
    });
    
    // Handle active users in the room
    const roomUsers = getUsersInRoom(roomId);
    io.to(roomId).emit('room_users', roomUsers);
  });
  
  socket.on('send_message', ({ roomId, message }) => {
    io.to(roomId).emit('receive_message', message);
    
    // Save message to database
    saveMessageToDb(message)
      .then(() => console.log('Message saved'))
      .catch(err => console.error('Error saving message:', err));
  });
});`
    }
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description: "Dashboard para visualização de dados de negócios com gráficos interativos e relatórios exportáveis.",
    image: "/placeholder.svg",
    tags: ["React", "Chart.js", "Node.js", "PostgreSQL", "Material UI"],
    githubUrl: "https://github.com",
    demoUrl: "https://example.com"
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding bg-tech-gray/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
          Meus <span className="text-primary">Projetos</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 rounded-full"></div>
        <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-12">
          Aqui estão alguns dos projetos em que trabalhei recentemente. Cada projeto apresenta desafios 
          únicos que me ajudaram a crescer como desenvolvedor.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={cn(
                "bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100",
                "transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",
                selectedProject?.id === project.id ? "ring-2 ring-primary" : ""
              )}
              onClick={() => setSelectedProject(project)}
            >
              <div className="h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-16 h-16 opacity-50"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      <Github size={18} />
                    </a>
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  
                  <button 
                    className="flex items-center text-sm text-primary hover:text-primary/80 transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Code size={16} className="mr-1" />
                    Ver código
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {selectedProject?.codeSnippet && (
          <div className="mt-12 bg-white p-6 rounded-xl shadow-lg border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{selectedProject.title} - Amostra de Código</h3>
              <div className="text-xs px-3 py-1 bg-gray-100 rounded-full">
                {selectedProject.codeSnippet.language}
              </div>
            </div>
            <div className="code-block">
              <pre className="text-sm whitespace-pre-wrap">
                <code>
                  {selectedProject.codeSnippet.code}
                </code>
              </pre>
            </div>
            <p className="mt-4 text-sm text-foreground/70">
              Este é apenas um trecho do código usado no projeto. Para ver o código completo, visite o repositório no GitHub.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
