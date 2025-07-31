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
  url?: string;
  pdfUrl?: string;
  featured?: boolean;
}

const publications: Publication[] = [
  {
    title: "Modern Web Development Patterns: A Comprehensive Study of React and TypeScript Integration",
    venue: "Journal of Software Engineering",
    date: "December 2023",
    type: "Research Paper",
    description: "An in-depth analysis of modern web development patterns, focusing on the integration of React and TypeScript for building scalable applications.",
    authors: ["John Doe", "Jane Smith", "Prof. Michael Johnson"],
    url: "https://example-journal.com/paper-1",
    pdfUrl: "https://example.com/paper-1.pdf",
    featured: true
  },
  {
    title: "Machine Learning Applications in Web Development",
    venue: "International Conference on AI & Web Technologies",
    date: "September 2023",
    type: "Conference Paper",
    description: "Exploring the intersection of machine learning and web development, with practical implementations and case studies.",
    authors: ["John Doe", "Dr. Sarah Wilson"],
    url: "https://conference-proceedings.com/paper-2",
    pdfUrl: "https://example.com/paper-2.pdf"
  },
  {
    title: "Building Scalable Microservices with Node.js",
    venue: "TechBlog Weekly",
    date: "August 2023",
    type: "Article",
    description: "A practical guide to designing and implementing microservices architecture using Node.js and modern DevOps practices.",
    authors: ["John Doe"],
    url: "https://techblog.com/microservices-nodejs"
  },
  {
    title: "Performance Optimization Techniques for React Applications",
    venue: "Developer's Digest",
    date: "June 2023",
    type: "Technical Article",
    description: "Comprehensive strategies for optimizing React application performance, including code splitting, memoization, and lazy loading.",
    authors: ["John Doe"],
    url: "https://dev-digest.com/react-performance"
  },
  {
    title: "The Future of Frontend Development: Trends and Predictions",
    venue: "Web Development Quarterly",
    date: "March 2023",
    type: "Opinion Paper",
    description: "An analysis of emerging trends in frontend development and predictions for the future of web technologies.",
    authors: ["John Doe", "Tech Industry Panel"],
    url: "https://web-dev-quarterly.com/future-frontend"
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
                        onClick={() => window.open(publication.pdfUrl, '_blank')}
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

        {/* Publication Stats */}
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
        </div>
      </div>
    </section>
  );
};