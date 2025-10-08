import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Analista de dados",
    company: "Fidale",
    type: "Freelance",
    period: "jul de 2025 - o momento",
    duration: "4 meses",
    location: "São Paulo, Brasil · Híbrida",
    skills: ["Google Looker Studio", "Estatística", "Análise e tratamento de dados", "Microsoft Power BI", "Capacidade analítica", "Microsoft Excel"],
  },
  {
    title: "Assistente administrativo",
    company: "Manager Gestão Condominial",
    type: "Tempo integral",
    period: "fev de 2023 - abr de 2024",
    duration: "1 ano 3 meses",
    location: "São Paulo, Brasil",
    skills: ["Treinamento de funcionários", "ERP (Planejamento de recursos empresariais)"],
  },
];

export const Experience = () => {
  return (
    <section id="experiencia" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Experiência Profissional
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{exp.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {exp.company} · {exp.type}
                    </CardDescription>
                  </div>
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period} · {exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
