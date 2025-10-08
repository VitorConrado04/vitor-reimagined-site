import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from "lucide-react";

const courses = [
  {
    title: "Análise de Dados com Python",
    institution: "Alura",
    date: "Dezembro de 2024",
    link: "https://cursos.alura.com.br/certificate/74084224-826d-4ca5-9541-75ef05722cae?lang"
  },
  {
    title: "Power BI: Alura",
    institution: "Alura",
    date: "Março de 2025",
    link: "https://cursos.alura.com.br/user/vitorconrado822/course/power-bi-desktop-construindo-meu-primeiro-dashboard/formalCertificate"
  },
  {
    title: "ETL com Power BI",
    institution: "Alura",
    date: "Abril de 2025",
    link: "https://cursos.alura.com.br/user/vitorconrado822/course/power-bi-desktop-realizando-etl-power-query/formalCertificate"
  },
  {
    title: "Banco de Dados para Data Science",
    institution: "Escola Senai \"Ary Torres\"",
    date: "Janeiro de 2025",
    link: "http://www.sp.senai.br/consulta-certificado?qrcode=11225166299/14909662"
  },
  {
    title: "Fundamentos de Ciência de Dados com Google Cloud",
    institution: "Escola Senai \"Suíço-brasileira\"",
    date: "Dezembro de 2024",
    link: "https://www.sp.senai.br/consulta-certificado?qrcode=11524288562/14888466"
  },
  {
    title: "Programação em Python",
    institution: "Escola Senai \"Ary Torres\"",
    date: "Junho - Agosto de 2024",
    link: "http://www.sp.senai.br/consulta-certificado?qrcode=11224162313/14629076"
  },
  {
    title: "Implantação de Serviços em Nuvem: AWS",
    institution: "Escola Senai \"Ary Torres\"",
    date: "Agosto de 2024",
    link: "http://www.sp.senai.br/consulta-certificado?qrcode=11224221025/14622300"
  },
  {
    title: "MongoDB",
    institution: "Alura",
    date: "Maio de 2025",
    link: "https://cursos.alura.com.br/certificate/vitorconrado822/mongodb-banco-dados-nosql"
  },
  {
    title: "Power BI para Data Science",
    institution: "Escola Senai \"Suíço-brasileira\"",
    date: "Dezembro de 2024",
    link: "http://www.sp.senai.br/consulta-certificado?qrcode=11524107404/14771867"
  }
];

export const Courses = () => {
  return (
    <section id="courses" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Cursos & <span className="bg-gradient-primary bg-clip-text text-transparent">Certificações</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <a
              key={index}
              href={course.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <Card
                className="p-6 bg-card/50 backdrop-blur border-border hover:shadow-glow transition-all hover:scale-105 animate-scale-in h-full"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <GraduationCap className="w-10 h-10 text-primary" />
                    <Badge variant="secondary" className="text-xs">
                      Certificado
                    </Badge>
                  </div>
                  
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {course.institution}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{course.date}</span>
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
