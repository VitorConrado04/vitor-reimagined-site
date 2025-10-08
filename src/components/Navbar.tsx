import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            VC
          </button>
          <div className="flex gap-2">
            <Button variant="ghost" onClick={() => scrollToSection("sobre")}>
              Sobre
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("skills")}>
              Skills
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("experiencia")}>
              Experiência
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("projetos")}>
              Projetos
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection("contato")}>
              Contato
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
