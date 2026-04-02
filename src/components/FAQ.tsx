import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo leva a instalação?",
      answer: "O tempo varia conforme a metragem e o formato das peças. Uma sala média de 40m² geralmente é finalizada em 3 a 5 dias úteis, incluindo o tempo de cura e rejunte.",
    },
    {
      question: "Vocês fornecem o material?",
      answer: "Nós fornecemos toda a mão de obra especializada e ferramentas. Materiais como piso, argamassa e rejunte devem ser fornecidos pelo cliente, mas prestamos toda consultoria sobre quais marcas e tipos comprar.",
    },
    {
      question: "Quais regiões vocês atendem?",
      answer: "Atendemos toda a Grande São Paulo, ABC Paulista e interior num raio de até 100km da capital. Para outras regiões, consulte disponibilidade.",
    },
  ];

  return (
    <section className="py-24" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-surface-container-high rounded-xl overflow-hidden border border-outline-variant/10"
            >
              <button
                className="w-full p-6 flex justify-between items-center text-left hover:bg-surface-container-highest transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown
                  className={`text-primary-container transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-6 text-on-surface/60 leading-relaxed animate-in fade-in slide-in-from-top-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
