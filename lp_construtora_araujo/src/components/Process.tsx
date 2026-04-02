export default function Process() {
  const steps = [
    {
      number: "1",
      title: "Solicite orçamento",
      description: "Entre em contato via WhatsApp ou formulário.",
    },
    {
      number: "2",
      title: "Visita técnica",
      description: "Avaliamos o local e conferimos as medidas exatas.",
    },
    {
      number: "3",
      title: "Execução",
      description: "Instalação profissional com foco nos detalhes.",
    },
    {
      number: "4",
      title: "Entrega final",
      description: "Revisão completa e entrega da obra limpa.",
    },
  ];

  return (
    <section className="py-24" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-20">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Como trabalhamos</h2>
          <p className="text-on-surface/60">Simples, transparente e profissional.</p>
        </div>

        <div className="relative flex flex-col md:flex-row justify-between gap-12">
          {/* Timeline Line (Desktop) */}
          <div className="absolute top-12 left-0 w-full h-[2px] bg-outline-variant/30 hidden md:block z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex-1 text-center group">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-surface-container-high rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-background group-hover:border-primary-container transition-all duration-300">
                <span className="text-2xl md:text-3xl font-black text-primary-container">{step.number}</span>
              </div>
              <h4 className="font-bold text-lg mb-2">{step.title}</h4>
              <p className="text-sm text-on-surface/60 max-w-[200px] mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
