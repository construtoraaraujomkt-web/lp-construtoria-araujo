import { Ruler, PencilRuler, Sparkles, Wallet } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <Ruler size={24} />,
      title: "Nivelamento perfeito",
      description: "Garantimos superfícies 100% planas, sem ressaltos entre as peças, usando tecnologia de nivelamento a laser.",
    },
    {
      icon: <PencilRuler size={24} />,
      title: "Corte preciso",
      description: "Acabamentos em 45 graus (meia esquadria) perfeitos para quinas de pias e nichos sem necessidade de filetes.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Limpeza pós-obra",
      description: "Entregamos o ambiente pronto para uso, livre de resíduos de argamassa e poeira de obra.",
    },
    {
      icon: <Wallet size={24} />,
      title: "Economia de material",
      description: "Planejamento inteligente da paginação para reduzir o desperdício de peças e rejunte.",
    },
  ];

  return (
    <section className="py-24" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center mb-16">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Por que escolher nosso serviço?</h2>
        <div className="w-20 h-1 bg-primary-container mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {benefits.map((benefit, idx) => (
          <div
            key={idx}
            className="bg-surface-container-high p-8 rounded-xl hover:bg-surface-container-highest transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-primary-container/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-container transition-colors">
              <div className="text-primary-container group-hover:text-on-primary-fixed">
                {benefit.icon}
              </div>
            </div>
            <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
            <p className="text-on-surface/60 text-sm leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
