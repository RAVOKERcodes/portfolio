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
    name: "Inno Pitch Expo",
    event: "Chitkara University",
    date: "April 2024",
    position: "1st Place Winner",
    description: "Internal navigation for hospitals, universities, airports, or other institutions, theapp provides seamless access to essential locations, such as wards, exam halls,or boarding gates, streamlining operations and enhancing user experience. Raste solves real world problem of inside navigation by providing GPSprecision upto 6 decimal points. Raste was able to gain funding of 1,40,000 INR.",
    technologies: ["Geolocation", "Javascript", "Android studio", "Java", "XML", "SASS"],
    teamSize: 3,
    award: "Best Innovation Award"
  },
  {
    name: "Codathon: Igniting Innovation Ideas Through Code!",
    event: "Chitkara University",
    date: "April 2024",
    position: "2nd Place",
    description: "Crafting a website from a Figma design was both challenging and rewarding. This experience has reinforced my belief in perseverance and the power of innovation. Grateful for the opportunity and eager to keep pushing the boundaries!",
    technologies: ["React", "Node.js", "MongoDB", "express.js", "Tailwind CSS"],
    teamSize: 3,
    award: "Runner Up"
  },
  {
    name: "Flipkard Grid 6.0",
    event: "Flipkart",
    date: "October 2024",
    position: "201 AIR",
    description: "flagship engineering campus challenge, recognised as India's largest Tech Case Competition. Curated for the best and the brightest engineering students across India, GRiD's legacy has been about more than just a competition - it's where talent meets innovation and entrepreneurship.",
    technologies: ["PostgreSQL", "IoT Sensors", "React", "Java", "AI"],
    teamSize: 3,
    award: "Gift Cards"
  },
  {
    name: "Capture The Flag (CTF)",
    event: "HackerSprey",
    date: "March 2025",
    position: "Finalist",
    description: "HackerSprey CTF was a thrilling competition that tested our skills in penetration testing, web3, and Burp Suite. We were able to secure a finalist position and gain valuable experience in ethical hacking and cybersecurity.",
    technologies: ["Penetration Testing", "Web3", "JS", "Burp Suite"],
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

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {[
            { label: "Hackathons Participated", value: "10+" },
            { label: "Awards Won", value: "4" },
            { label: "Projects Built", value: "25+" }
            // { label: "Team Collaborations", value: "40+" }
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

        {/* Statistics
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { label: "Hackathons Participated", value: "10+" },
            { label: "Awards Won", value: "4" },
            { label: "Projects Built", value: "25+" }
            // { label: "Team Collaborations", value: "40+" }
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
        </div> */}
      </div>
    </section>
  );
};