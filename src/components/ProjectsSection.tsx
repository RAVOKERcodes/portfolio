import { Github, ExternalLink, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  stars?: number;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "• Modern e-commerce platform with React and Node.js\n• Real-time inventory management system\n• Integrated payment processing with Stripe\n• Comprehensive admin dashboard\n• AWS cloud deployment",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.com",
    stars: 124,
    featured: true
  },
  {
    title: "Task Management App",
    description: "• Collaborative task management with real-time updates\n• Drag-and-drop functionality for task organization\n• Team collaboration and communication features\n• Progress tracking and analytics",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Firebase", "Material-UI"],
    githubUrl: "https://github.com/johndoe/task-manager",
    liveUrl: "https://taskmanager-demo.com",
    stars: 87
  },
  {
    title: "Weather Dashboard",
    description: "• Responsive weather dashboard with location-based forecasts\n• Interactive charts and data visualization\n• Weather alerts and notifications\n• Modern API integration",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.com",
    stars: 56
  },
  {
    title: "Portfolio Website",
    description: "• Modern, responsive portfolio design\n• Built with React and TypeScript\n• Smooth animations and transitions\n• Dark theme implementation",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/johndoe/portfolio",
    liveUrl: "https://johndoe-portfolio.com",
    stars: 42
  },
  {
    title: "AI Chat Bot",
    description: "• Intelligent chatbot with NLP capabilities\n• Machine learning and modern web technologies\n• Real-time WebSocket communication\n• Advanced conversation handling",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "Flask", "React", "WebSocket"],
    githubUrl: "https://github.com/johndoe/ai-chatbot",
    liveUrl: "https://ai-chatbot-demo.com",
    stars: 203,
    featured: true
  },
  {
    title: "Blockchain Tracker",
    description: "• Cryptocurrency tracking with real-time price updates\n• Portfolio management and analytics\n• Market analysis and trend visualization\n• Web3 integration and blockchain data",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    technologies: ["React", "Redux", "Web3.js", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/johndoe/blockchain-tracker",
    liveUrl: "https://blockchain-tracker-demo.com",
    stars: 78
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group bg-gradient-card border-primary/20 hover-lift hover-glow overflow-hidden transition-all duration-500 hover:scale-[1.02] ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium shadow-lg">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.stars && (
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                  )}
                </div>

                <div className="text-muted-foreground mb-4 text-sm space-y-1">
                  {project.description.split('\n').map((point, idx) => (
                    <div key={idx} className="leading-relaxed">{point}</div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 bg-card/50 hover:bg-primary hover:text-primary-foreground border-primary/20"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-primary hover:shadow-elegant text-primary-foreground"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};