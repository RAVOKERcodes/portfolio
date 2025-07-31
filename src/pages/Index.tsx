import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { HackathonsSection } from "@/components/HackathonsSection";
import { PublicationsSection } from "@/components/PublicationsSection";
import { ContactModal } from "@/components/ContactModal";
import { ScrollToTop } from "@/components/ScrollToTop";

const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onContactClick={() => setIsContactModalOpen(true)} />
      
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <HackathonsSection />
        <PublicationsSection />
      </main>

      <ContactModal 
        open={isContactModalOpen} 
        onOpenChange={setIsContactModalOpen}
      />
      
      <ScrollToTop />
    </div>
  );
};

export default Index;
