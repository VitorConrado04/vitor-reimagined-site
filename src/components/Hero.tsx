import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl -top-48 -left-48 animate-float" />
        <div className="absolute w-96 h-96 bg-secondary/20 rounded-full blur-3xl -bottom-48 -right-48 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium tracking-wide">Olá, seja bem-vindo!</p>
            <h1 className="text-5xl md:text-7xl font-bold">
              Eu sou <span className="bg-gradient-primary bg-clip-text text-transparent">Vitor Conrado</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Data Science | Análise e Desenvolvimento de Sistemas | Python | SQL | Power BI | Excel
            </p>
          </div>

          <div className="flex gap-4 justify-center items-center">
            <a href="mailto:vitorconrado822@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:shadow-glow transition-all hover:scale-110">
                <Mail className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://github.com/VitorConrado04" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:shadow-glow transition-all hover:scale-110">
                <Github className="w-5 h-5" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/vitor-conrado-aab9aa266" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:shadow-glow transition-all hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </Button>
            </a>
          </div>

          <div className="flex gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow transition-all hover:scale-105"
              onClick={() => scrollToSection("projetos")}
            >
              Ver Projetos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:shadow-glow transition-all hover:scale-105"
              onClick={() => scrollToSection("contato")}
            >
              Entre em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
