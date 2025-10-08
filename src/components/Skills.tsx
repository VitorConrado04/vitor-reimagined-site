import { Card } from "@/components/ui/card";
import { Database, Code, BarChart3, Presentation, FileSpreadsheet } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Python",
    description: "NumPy, Pandas, Análise de Dados",
    color: "text-primary"
  },
  {
    icon: Database,
    title: "SQL",
    description: "AzureSQL, MySQL, SQLite",
    color: "text-secondary"
  },
  {
    icon: BarChart3,
    title: "Power BI",
    description: "Dashboards interativos e storytelling",
    color: "text-primary"
  },
  {
    icon: Presentation,
    title: "Data Visualization",
    description: "Matplotlib, Seaborn, Plotly",
    color: "text-secondary"
  },
  {
    icon: FileSpreadsheet,
    title: "Excel",
    description: "Análise avançada e automação",
    color: "text-primary"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span> & Tecnologias
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className="p-6 bg-card/50 backdrop-blur border-border hover:shadow-glow transition-all hover:scale-105 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <skill.icon className={`w-12 h-12 ${skill.color}`} />
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <p className="text-muted-foreground">{skill.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
