import { Card } from "@/components/ui/card";
import profileImage from "@/assets/vitor-profile.jpg";

export const About = () => {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Sobre <span className="bg-gradient-primary bg-clip-text text-transparent">Mim</span>
          </h2>
          
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-border shadow-card hover:shadow-glow transition-all animate-slide-up">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6 text-lg text-muted-foreground leading-relaxed">
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

              <div className="order-1 md:order-2 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                  <img 
                    src={profileImage} 
                    alt="Vitor Conrado - Data Scientist" 
                    className="relative rounded-2xl w-full max-w-sm shadow-card"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
