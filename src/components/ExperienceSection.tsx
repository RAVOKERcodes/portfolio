import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Experience {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Full Stack Developer",
    duration: "2022 - Present",
    location: "San Francisco, CA",
    description: [
      "Led development of microservices architecture serving 100k+ daily users",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"]
  },
  {
    company: "Digital Solutions Co.",
    position: "Frontend Developer",
    duration: "2020 - 2022",
    location: "Remote",
    description: [
      "Built responsive web applications using modern JavaScript frameworks",
      "Collaborated with UX designers to implement pixel-perfect designs",
      "Optimized application performance resulting in 40% faster load times"
    ],
    technologies: ["React", "TypeScript", "Sass", "Redux", "Jest"]
  },
  {
    company: "StartupXYZ",
    position: "Junior Developer",
    duration: "2019 - 2020",
    location: "New York, NY",
    description: [
      "Developed and maintained company's main product dashboard",
      "Participated in agile development cycles and daily standups",
      "Contributed to open-source projects and internal tooling"
    ],
    technologies: ["JavaScript", "Vue.js", "MongoDB", "Express.js"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey in software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform lg:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-2">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow animate-pulse-glow" />
                </div>

                {/* Content */}
                <div className="flex-1 ml-12 lg:ml-0">
                  <Card className="bg-gradient-card border-primary/20 hover-lift hover-glow group">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Briefcase className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {experience.position}
                          </h3>
                          <h4 className="text-xl text-primary font-semibold mb-4">
                            {experience.company}
                          </h4>
                          <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{experience.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-3 mb-6">
                        {experience.description.map((item, idx) => (
                          <li key={idx} className="text-muted-foreground flex items-start gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};