import { BookOpen, Calendar, ExternalLink, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Publication {
  title: string;
  venue: string;
  date: string;
  type: string;
  description: string;
  authors: string[];
  corresponding_authors: string[];
  url?: string;
  pdfUrl?: string;
  featured?: boolean;
}

const publications: Publication[] = [
  {
    title: "Development of Intra-organisation Navigation System - RASTE",
    venue: "Journal of Software Engineering",
    date: "December 2023",
    type: "Research Paper",
    description: "Locating the assigned examination hall within the campus in stipulated time during exams becomes bothersome for both student and faculty. Present study proposes a Route Assist System (RASTE), a digital solution, to provide a comprehensive solution to users in locating desired destination in an effective manner. The application is tested for multiple testcases and has provided 93% performance accuracy and 100% satisfaction in accessibility and best practices.",
    authors: ["Dhruv Shridhar"],
    corresponding_authors: ["Nishu Bali","Neelam Rani","Aniket", "Anurag", "Aditya"],
    pdfUrl: new URL("../assets/PaperID36_ Revised.pdf", import.meta.url).href,
    // featured: true
  }
];

const getTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case 'research paper':
      return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
    case 'conference paper':
      return 'bg-green-500/10 text-green-400 border-green-500/20';
    case 'article':
    case 'technical article':
      return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
    case 'opinion paper':
      return 'bg-orange-500/10 text-orange-400 border-orange-500/20';
    default:
      return 'bg-primary/10 text-primary border-primary/20';
  }
};

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Publications & Articles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Research papers, technical articles, and industry insights I've published
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((publication, index) => (
            <Card 
              key={index}
              className={`group bg-gradient-card border-primary/20 hover-lift hover-glow ${
                publication.featured ? 'ring-2 ring-primary/30' : ''
              }`}
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                            {publication.title}
                          </h3>
                          {publication.featured && (
                            <span className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium flex-shrink-0">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <span className="text-lg font-semibold text-primary">
                            {publication.venue}
                          </span>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{publication.date}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm border ${getTypeColor(publication.type)}`}>
                            {publication.type}
                          </span>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {publication.description}
                        </p>

                        <div className="mb-6">
                          <span className="text-sm text-muted-foreground">Authors: </span>
                          <span className="text-foreground">
                            {publication.authors.join(', ')}
                          </span>
                        </div>
                        <div className="mb-6">
                          <span className="text-sm text-muted-foreground">Corresponding Author: </span>
                          <span className="text-foreground">
                            {publication.corresponding_authors.join(', ')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 lg:min-w-[200px]">
                    {publication.url && (
                      <Button
                        variant="outline"
                        className="bg-card/50 hover:bg-primary hover:text-primary-foreground border-primary/20"
                        onClick={() => window.open(publication.url, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Online
                      </Button>
                    )}
                    {publication.pdfUrl && (
                      <Button
                        className="bg-gradient-primary hover:shadow-elegant text-primary-foreground"
                        onClick={() => window.open(publication.pdfUrl)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Publication Stats
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Publications", value: "12+" },
            { label: "Citations", value: "150+" },
            { label: "Research Areas", value: "5" },
            { label: "Conferences", value: "8" }
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

        <div className="mt-16 grid grid-cols-2 md:grid-cols-1 gap-8">
          {[
            { label: "Made By Dhruv Shridhar", value: "12+ Coffee Breaks" },
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