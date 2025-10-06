import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Vamos <span className="bg-gradient-primary bg-clip-text text-transparent">Conversar?</span>
          </h2>

          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-border shadow-card animate-slide-up">
            <div className="space-y-8">
              <p className="text-xl text-center text-muted-foreground">
                Estou sempre aberto a novos projetos e oportunidades. Entre em contato!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="mailto:vitorconrado822@gmail.com" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full h-24 flex flex-col gap-2 hover:shadow-glow transition-all hover:scale-105"
                  >
                    <Mail className="w-8 h-8 text-primary" />
                    <span className="text-sm">Email</span>
                  </Button>
                </a>

                <a href="https://github.com/VitorConrado04" target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full h-24 flex flex-col gap-2 hover:shadow-glow transition-all hover:scale-105"
                  >
                    <Github className="w-8 h-8 text-primary" />
                    <span className="text-sm">GitHub</span>
                  </Button>
                </a>

                <a href="https://www.linkedin.com/in/vitor-conrado-aab9aa266" target="_blank" rel="noopener noreferrer" className="block">
                  <Button 
                    variant="outline" 
                    className="w-full h-24 flex flex-col gap-2 hover:shadow-glow transition-all hover:scale-105"
                  >
                    <Linkedin className="w-8 h-8 text-primary" />
                    <span className="text-sm">LinkedIn</span>
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
