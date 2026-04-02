import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      text: "O acabamento em 45 graus da minha bancada ficou perfeito. Já tive problemas com outros profissionais, mas o Master Artisan entregou exatamente o que prometeu.",
      name: "Roberta Silva",
      location: "São Paulo, SP",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzOO6cagpT8wvztMefdn1iZUkeNrSaHvSRFk8A_LI03sZXsStZ-5q697OWvUu0k9c3r669NEPZ3rARJPWOMrzq8-jWB5F-YAJUh1Mgc_kYvfsrK5VZHfShNKxhBC5izQpu36gvXpw1xlij3paa04UPNz0QvgGyOFJbbMd4e4WfCuh3Rl3Bd-4PAidDnQregVqiabO7THKc9bA7bFJ5CgxSvqDo-4BAXimPJju5yf8FeDpi12YVkCAtMhemvFtL18EI65rNvEvz9LM",
    },
    {
      text: "Equipe extremamente pontual e organizada. A limpeza final me surpreendeu, não tive trabalho nenhum após a saída deles. Recomendadíssimo!",
      name: "Carlos Eduardo",
      location: "Campinas, SP",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDIEhxCe9uBr2ZPQ8IfPOVYJ7SY36QWRLSd0RWv_kOvTd3BJnVqOnqQOzY690QeaRL6R8uBRBcSok1vOYwKSvK8FkysRicecI9WjzZekpXMshPZZg7G8Ja0gjeUnvk7oHVDV4wmaaW9FVUKgiA3IWMfGaUeDy4LoAQixwlecRUle22aWhEUCtBxm8S4_WTPOLHuTAM-GK4SOdhamRVYfL2Pg-OnhwCmUvWlwW7x_OLrxAUZbWPqMBd98oig_fDW9nfRhehRBts2R3s",
    },
    {
      text: "Instalaram porcelanato de grande formato (120x120) na minha sala toda. Ficou impecável, super nivelado e os cortes contornando os pilares foram precisos.",
      name: "Ana Luísa",
      location: "Santo André, SP",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRG6DqKxwpReDRgSnuCTLXPyBchAF2kfnbOp63xOuBPGT-4GSg6KFgptAbd7yIxhaPRExmf_MGbpEkbyygT5ZJYtMVhhkQjs6U1xsj2HcsYDzo00u8Ca5TJBwIFS8nlNJbyzb81Rd5LkxgnnKuUW-WG9q8w5LoILbwtoNvwJ_lVhKh-UmXyI0otlpCQWekgQI9czwDQsxMC1yF3Z9mhsdoGAYfwVIivSJB1wZDPcZdfpcGRa9l3IrOx3-36IyHj7IWAPRapczKEeY",
    },
  ];

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-12 text-center">O que dizem nossos clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-surface p-8 rounded-2xl border border-outline-variant/10 flex flex-col h-full">
              <div className="flex gap-1 text-primary-container mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              <p className="italic text-on-surface/80 mb-8 leading-relaxed flex-grow">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant/20">
                  <img
                    className="w-full h-full object-cover"
                    src={review.avatar}
                    alt={review.name}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h5 className="font-bold">{review.name}</h5>
                  <span className="text-xs text-on-surface/40">{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
