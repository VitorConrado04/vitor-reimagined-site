import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Mim</span>
          </h2>
          
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-border shadow-card hover:shadow-glow transition-all animate-slide-up">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Sou um amante da computação que busca explorar a capacidade de processamento das máquinas na extração de informações úteis de grandes massas de dados.
              </p>
              <p>
                Busco aplicar conceitos estatísticos, econométricos e de programação, bem como técnicas de <span className="text-primary font-semibold">Big Data Analytics</span>, <span className="text-primary font-semibold">Machine Learning</span> e <span className="text-primary font-semibold">A.I.</span> para gerar as melhores soluções para os problemas que envolvam Data Science.
              </p>
              <p>
                Não basta apenas produzir boas análises ou construir bons modelos preditivos se não criarmos bons gráficos. Por isso tenho um cuidado especial nas etapas de <span className="text-secondary font-semibold">visualização de dados</span> e design de dashboards para garantir que cada estudo possa elucidar as respostas que os dados podem fornecer.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
