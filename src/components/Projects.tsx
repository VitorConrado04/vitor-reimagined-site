import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Estudo de imigrações no Canadá",
    description: "Análise detalhada dos padrões de imigração no Canadá, explorando tendências temporais, origem dos imigrantes e principais insights demográficos.",
    tags: ["Python", "Pandas", "Data Analysis", "Visualization"],
    gradient: "from-primary to-primary-glow",
    link: "https://github.com/VitorConrado04/immigrations-to-Canada"
  },
  {
    title: "Estudo de vendas no trimestre de um supermercado",
    description: "Análise trimestral de vendas de supermercado, identificando padrões de consumo, produtos mais vendidos e oportunidades de crescimento.",
    tags: ["Python", "Data Analysis", "Business Intelligence", "SQL"],
    gradient: "from-secondary to-accent",
    link: "https://github.com/VitorConrado04/sales-in-the-quarter"
  },
  {
    title: "Estudo de investimento de um varejo durante o ano",
    description: "Análise anual de investimentos em varejo, avaliando retorno sobre investimento e identificando as melhores estratégias de alocação de recursos.",
    tags: ["Python", "Financial Analysis", "Data Visualization", "ROI"],
    gradient: "from-primary to-secondary",
    link: "https://lnkd.in/dVErwhru"
  },
  {
    title: "Dashboard de Petshop no Power BI",
    description: "Dashboard interativo com análise de faturamento por gênero, bairro e período temporal, incluindo funcionalidades de busca e filtros dinâmicos.",
    tags: ["Power BI", "DAX", "Data Visualization", "Business Analytics"],
    gradient: "from-accent to-primary",
    link: "#"
  }
];

export const Projects = () => {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Meus <span className="bg-gradient-primary bg-clip-text text-transparent">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className="group p-6 bg-card/50 backdrop-blur border-border hover:shadow-glow transition-all hover:scale-105 cursor-pointer animate-scale-in overflow-hidden relative h-full"
                style={{ animationDelay: `${index * 100}ms` }}
              >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
