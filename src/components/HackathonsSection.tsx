import { Trophy, Calendar, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Hackathon {
  name: string;
  event: string;
  date: string;
  position: string;
  description: string;
  technologies: string[];
  teamSize: number;
  award?: string;
}

const hackathons: Hackathon[] = [
  {
    name: "AI Healthcare Assistant",
    event: "TechCrunch Disrupt Hackathon 2023",
    date: "October 2023",
    position: "1st Place Winner",
    description: "Developed an AI-powered healthcare assistant that helps patients track symptoms and provides preliminary health insights using machine learning.",
    technologies: ["Python", "TensorFlow", "React", "Flask", "OpenAI API"],
    teamSize: 4,
    award: "Best Innovation Award"
  },
  {
    name: "EcoTrack",
    event: "Climate Change Hackathon 2023",
    date: "September 2023",
    position: "2nd Place",
    description: "Built a carbon footprint tracking application with gamification elements to encourage sustainable living habits among users.",
    technologies: ["React Native", "Node.js", "MongoDB", "Chart.js"],
    teamSize: 3,
    award: "People's Choice Award"
  },
  {
    name: "Smart City Dashboard",
    event: "Government Innovation Challenge",
    date: "June 2023",
    position: "3rd Place",
    description: "Created a real-time dashboard for city officials to monitor traffic, air quality, and public transport efficiency using IoT data.",
    technologies: ["Vue.js", "D3.js", "Express.js", "PostgreSQL", "IoT Sensors"],
    teamSize: 5
  },
  {
    name: "FinTech Security Suite",
    event: "Blockchain & Security Hackathon",
    date: "March 2023",
    position: "Finalist",
    description: "Developed a comprehensive security suite for financial applications with blockchain-based transaction verification.",
    technologies: ["Solidity", "Web3.js", "React", "Node.js", "Ethereum"],
    teamSize: 2
  }
];

export const HackathonsSection = () => {
  return (
    <section id="hackathons" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Hackathons & Competitions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Achievements and innovations from competitive programming events
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <Card 
              key={index}
              className="group bg-gradient-card border-primary/20 hover-lift hover-glow relative overflow-hidden"
            >
              {hackathon.award && (
                <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-bl-lg text-sm font-medium">
                  <Award className="w-4 h-4 inline mr-1" />
                  {hackathon.award}
                </div>
              )}

              <CardContent className="p-6 pt-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {hackathon.name}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground mb-2">
                      <span className="font-medium text-primary">{hackathon.position}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{hackathon.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{hackathon.teamSize} members</span>
                      </div>
                    </div>
                    <p className="text-lg font-semibold text-foreground mb-4">
                      {hackathon.event}
                    </p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {hackathon.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {hackathon.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Hackathons Participated", value: "15+" },
            { label: "Awards Won", value: "8" },
            { label: "Projects Built", value: "25+" },
            { label: "Team Collaborations", value: "40+" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};