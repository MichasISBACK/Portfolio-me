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
    title: "Technews",
    description: "Um site web de noticias de tecnologia com integração com a API do NewsAPI.",
    image: "/news.png",
    tags: ["React", "Node.js", "SQLite", "RadixUI", "TailwindCSS", "JavaScript", "OAuth"],
    githubUrl: "https://github.com/MichasISBACK/Technews",
    demoUrl: "https://technewso.netlify.app",
    codeSnippet: {
      language: "React.js",
      code: `// Componente de callback para autenticação OAuth
const AuthCallback = () => {
  const { login } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const userId = params.get('userId');

    if (token && userId) {
      console.log("Callback OAuth recebido. Buscando dados do usuário...");
      
      const fetchUserData = async () => {
        try {
          const userData = await authService.getUserData(userId, token);
          login(userData, token);
          window.history.replaceState({}, document.title, "/");
        } catch (error) {
          console.error("Erro no callback OAuth:", error);
          window.location.href = "/";
        }
      };
      
      fetchUserData();
    } else {
      console.log("Callback acessado sem token, redirecionando para home.");
      window.location.href = "/";
    }
  }, [login]);
};`
    }
  },
  {
    id: 2,
    title: "Exploração e Análise de Vulnerabilidades em Flask",
    description: "O objetivo do laboratório é executar um backend vulnerável, identificar falhas críticas e elaborar um relatório técnico documentando o processo de exploração e mitigação.",
    image: "/react-js.png",
    tags: ["Python", "Flask", "SQLite"],
    githubUrl: "https://github.com/MichasISBACK/Exploit-Mobile-Sistemas-da-Informa-o",
    codeSnippet: {
      language: "python",
      code: `// Lab Mobile - Backend Vulnerável
    app = Flask(__name__)

DATA_FILE = 'db_plain.json'
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def read_db():
    if not os.path.exists(DATA_FILE):
        return {"users": []}
    with open(DATA_FILE, 'r') as f:
        return json.load(f)

def write_db(data):
    with open(DATA_FILE, 'w') as f:
        json.dump(data, f, indent=2)

@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "ok", "time": str(datetime.utcnow())})
  );
};`
    }
  },
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
