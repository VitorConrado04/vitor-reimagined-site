import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Análise Preditiva de Vendas",
    description: "Modelo de Machine Learning para prever vendas futuras com 92% de acurácia usando Python e Scikit-learn.",
    tags: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    gradient: "from-primary to-primary-glow"
  },
  {
    title: "Dashboard Executivo Power BI",
    description: "Dashboard interativo para análise de KPIs empresariais com visualizações dinâmicas e insights acionáveis.",
    tags: ["Power BI", "DAX", "SQL", "Data Viz"],
    gradient: "from-secondary to-accent"
  },
  {
    title: "Análise de Sentimentos",
    description: "Sistema de análise de sentimentos em redes sociais usando NLP e Deep Learning.",
    tags: ["Python", "NLP", "TensorFlow", "API"],
    gradient: "from-primary to-secondary"
  },
  {
    title: "ETL Automatizado",
    description: "Pipeline de dados automatizado para extração, transformação e carga de dados de múltiplas fontes.",
    tags: ["Python", "SQL", "Apache Airflow", "PostgreSQL"],
    gradient: "from-accent to-primary"
  },
  {
    title: "Segmentação de Clientes",
    description: "Algoritmo de clustering para segmentação inteligente de clientes baseado em comportamento de compra.",
    tags: ["Python", "K-Means", "Data Analysis", "Visualization"],
    gradient: "from-secondary to-primary-glow"
  },
  {
    title: "Sistema de Recomendação",
    description: "Motor de recomendação personalizado usando filtragem colaborativa e aprendizado profundo.",
    tags: ["Python", "Deep Learning", "Recommender Systems", "API"],
    gradient: "from-primary-glow to-accent"
  }
];

export const Projects = () => {
  return (
    <section id="projetos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Meus <span className="bg-gradient-primary bg-clip-text text-transparent">Projetos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group p-6 bg-card/50 backdrop-blur border-border hover:shadow-glow transition-all hover:scale-105 cursor-pointer animate-scale-in overflow-hidden relative"
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
          ))}
        </div>
      </div>
    </section>
  );
};
