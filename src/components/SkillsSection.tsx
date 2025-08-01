import { Code, Database, Smartphone, Cloud, Palette, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "HTML5", "CSS3", "Tailwind CSS", "SASS"],
    color: "text-blue-400"
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Node.js", "Python", "Express.js", "FastAPI", "GraphQL", "REST APIs", "Microservices"],
    color: "text-green-400"
  },
  {
    icon: Database,
    title: "Database & Storage",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase", "AWS S3", "MySQL"],
    color: "text-purple-400"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Vercel", "Nginx"],
    color: "text-orange-400"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    skills: ["React Native", "Flutter", "Expo", "iOS", "Android", "PWA", "Responsive Design"],
    color: "text-pink-400"
  },
  {
    icon: Palette,
    title: "Design & UX",
    skills: ["Figma", "Adobe XD", "Photoshop", "UI/UX Design", "Wireframing", "Prototyping"],
    color: "text-cyan-400"
  }
];

const additionalSkills = [
  "Git & Version Control",
  "Agile & Scrum",
  "Test Driven Development",
  "Performance Optimization",
  "Web Security",
  "Machine Learning Basics",
  "Blockchain Development",
  "Team Leadership"
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        {/* Main Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-primary/20 hover-lift hover-glow"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-muted/50 text-foreground text-sm rounded-full border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">
            Additional Skills & Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-card text-foreground rounded-lg border border-primary/20 hover:border-primary/40 hover:shadow-elegant transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Level Indicators */}
        {/* <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center text-foreground">
            Proficiency Levels
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { skill: "React/TypeScript", level: 95 },
              { skill: "Node.js/Express", level: 90 },
              { skill: "Database Design", level: 85 },
              { skill: "Cloud Architecture", level: 80 }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="hsl(var(--muted))"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeDasharray={`${item.level}, 100`}
                      className="animate-pulse-glow"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">{item.level}%</span>
                  </div>
                </div>
                <p className="text-foreground font-medium">{item.skill}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};