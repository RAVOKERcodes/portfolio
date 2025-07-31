import { useState } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Copy, Check } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactModal = ({ open, onOpenChange }: ContactModalProps) => {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shridhardhruv123@gmail.com",
      action: () => window.location.href = 'mailto:shridhardhruv123@gmail.com',
      actionLabel: "Send Email"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7560057110",
      action: () => window.location.href = 'tel:+15551234567',
      actionLabel: "Call Now"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dhruv-shridhar",
      action: () => window.open('https://linkedin.com/in/dhruv-shridhar', '_blank'),
      actionLabel: "View Profile"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/RAVOKERcodes",
      action: () => window.open('https://github.com/RAVOKERcodes', '_blank'),
      actionLabel: "View Profile"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      action: () => window.open('https://maps.google.com/?q=San Francisco, CA', '_blank'),
      actionLabel: "View Map"
    }
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedItem(label);
      toast({
        title: "Copied to clipboard",
        description: `${label} has been copied to your clipboard.`,
      });
      setTimeout(() => setCopiedItem(null), 2000);
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gradient-card border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get In Touch
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-6">
          <p className="text-muted-foreground">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          
          <div className="space-y-4">
            {contactInfo.map((contact, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-card/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-5 h-5 text-primary" />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="text-foreground font-medium truncate">{contact.value}</p>
                </div>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="bg-card/50 hover:bg-primary hover:text-primary-foreground border-primary/20"
                    onClick={() => copyToClipboard(contact.value, contact.label)}
                  >
                    {copiedItem === contact.label ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                  
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:shadow-elegant text-primary-foreground"
                    onClick={contact.action}
                  >
                    {contact.actionLabel}
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-4 border-t border-primary/10">
            <p className="text-sm text-muted-foreground mb-4">
              Available for freelance work and full-time opportunities
            </p>
            <div className="flex gap-3 justify-center">
              <span className="px-3 py-1 bg-green-500/10 text-green-400 text-sm rounded-full border border-green-500/20">
                Available for hire
              </span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-sm rounded-full border border-blue-500/20">
                Open to collaborations
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};