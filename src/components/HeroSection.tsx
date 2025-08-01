import { Github, Linkedin, Mail, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/image.png";

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative">
              <img
                src={profileImage}
                alt="Profile"
                className="w-72 h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-primary/20 animate-float hover-glow transition-all duration-500"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4 animate-slide-up">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent leading-tight">
                Dhruv Shridhar
              </h1>
              <h2 className="text-xl lg:text-2xl text-primary font-medium">
                Software Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A highly motivated individual with strong interpersonal skills in Computer Applications. Skilled in
implementing each step of a project with precision. Eager to learn new technologies and methodologies,
with a passion for innovation to enhance existing technology.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-card/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover-lift border-primary/20"
                onClick={() => window.open('https://linkedin.com/in/dhruv-shridhar', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-card/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover-lift border-primary/20"
                onClick={() => window.open('https://github.com/RAVOKERcodes', '_blank')}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-card/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover-lift border-primary/20"
                onClick={() => window.open('mailto:shridhardhruv123@gmail.com', '_blank')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-elegant hover-lift text-primary-foreground font-medium px-8"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-card/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground hover-lift border-primary/20"
                onClick={() => {
                  window.open(new URL("../assets/Dhruv-Shridhar-resume.pdf", import.meta.url).href);
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full p-1">
          <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse" />
        </div>
      </div>
    </section>
  );
};
