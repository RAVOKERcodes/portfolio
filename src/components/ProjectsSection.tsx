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
    title: "Raste",
    description: "• Internal navigation for hospitals, universities, airports, or other institutions, theapp provides seamless access to essential locations, such as wards, exam halls,or boarding gates, streamlining operations and enhancing user experience.\n• Raste solves real world problem of inside navigation by providing GPSprecision upto 6 decimal points.\n• Raste was able to gain funding of 1,40,000 INR.",
    image: "https://media.licdn.com/dms/image/v2/D5622AQE4bPF73FXJcw/feedshare-shrink_1280/feedshare-shrink_1280/0/1708348760125?e=1756944000&v=beta&t=KVVlCi1V7ZPPsawYgYEvjfeGOY2IxVWQ93yuJh3csm4",
    technologies: ["Geolocation", "Javascript", "Android studio", "Java", "XML", "SASS"],
    githubUrl: "https://github.com/RAVOKERcodes/raste_prototype",
    liveUrl: "https://github.com/RAVOKERcodes/raste_prototype",
    stars: 5,
    featured: true
  },
  {
    title: "Codebro - Modern Web Browser",
    description: "• Electron-based web browser with advanced features, focusing on privacy, performance, and user experience.\n• Built-in VPN, System monitoring (RAM usage, Battery status, Network speed tracking), Customizable sidebar shortcuts.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGO6hC2neyf-zVSt3yPnCBV1yBltQ1HWqxg&s",
    technologies: ["Node.js", "Electron", "Vanilla JavaScript", "AI", "HTML5", "CSS3", "Tailwind CSS"],
    githubUrl: "https://github.com/RAVOKERcodes/custom-browser",
    liveUrl: "https://github.com/RAVOKERcodes/custom-browser",
    stars: 9,
    featured: true
  },
  {
    title: "QuickPage - Website Builder",
    description: "• QuickPage is a simple, user-friendly platform that allows you to build and customize websites effortlessly.\n• With a modular block-based system, you can easily add, edit, and arrange text, images, links, and files, without any coding experience required.\n• QuickPage offers a quick and intuitive way to create beautiful, responsive websites.",
    image: "https://storefront-static.cdn-one.com/images/wsb-diagonal-banner.jpg",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    githubUrl: "https://github.com/RAVOKERcodes/QuickPage",
    liveUrl: "https://github.com/RAVOKERcodes/QuickPage",
    stars: 5
  },
  {
    title: "StocksTrail - Stock Market",
    description: "• Stock market analysis and calculator.\n• Portfolio management and analytics.\n• Market analysis and trend visualization and DMAT account management.",
    image: "https://media.licdn.com/dms/image/v2/D560BAQFoyIBnuxAeHg/company-logo_200_200/company-logo_200_200/0/1725777795790?e=1756944000&v=beta&t=k7KrdbqLUU0nW7v6P8j3LzGErblf_HRNC9f5kFcUCCc",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/stockstrail/stockstrail",
    liveUrl: "https://stockstrail.in",
    stars: 1
  },
  {
    title: "AI Chess Bot",
    description: "• Capable of performing 10^40 unique moves. Can play computer vs computer.\n• Implemented complex game logic in JavaScript to handle moves, rules, and AI decision-making. Designed an intuitive user interface with HTML and CSS,ensuring a seamless and engaging user experience.",
    image: "data:image/png;base64,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",
    technologies: ["Python", "TensorFlow", "Flask", "React", "WebSocket"],
    githubUrl: "https://github.com/RAVOKERcodes/Chess_Bot",
    liveUrl: "https://ravokercodes.github.io/Chess_Bot",
    stars: 7,
    featured: true
  },
  {
    title: "Performo - AI Performance Management System",
    description: "• Designed and developed RESTful APIs for core PMS functionalities including employee onboarding, 1:1 meeting requests, project assignments, and Goal tracking using Sequelize and Express.js.\n•Integrated Salesforce dashboards into the PMS using JSforce, allowing realtime performance data and KPI insights for employees and managers.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    technologies: ["Node.js", "Express.js", "PostgreSQL", "Salesforce", "Sequelize ORM", "React", "Redux", "AI", "Salesforce"],
    githubUrl: "https://github.com/RAVOKERcodes",
    liveUrl: "testperformo.prismberry.com",
    stars: 1
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