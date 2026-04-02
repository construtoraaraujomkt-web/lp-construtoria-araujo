import { CheckCircle } from "lucide-react";

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Transformações que Impressionam</h2>
          <p className="text-on-surface/60 max-w-xl">Veja a evolução de ambientes reais através da nossa instalação técnica.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group overflow-hidden rounded-xl bg-surface-container-high">
            <img
              className="w-full h-[400px] md:h-[500px] object-cover"
              src="https://lh3.googleusercontent.com/aida/ADBb0uiywY4QiAqXOliz2wbgTeDmLEQUPcHaEqCF87VP-wqDopEPD6D_66xm1rupH3ZvHFPmnNjugIq6tV3dN_ZeDL6Pc7k7lLMHsep8Pv0IsNXxit52fqupg0hAVNouJYCjfWceiaO8WKcu3jO4B7wkTya19LbJ2w5hZpRF4PvxVfULPU3YUiEVkzEoXsZLAiiKpaWJis2K9Zca4GdC5hqI8TWqWSJH8Ba4mtj6SZqZLYQTv1ceyzKm-L94c76im2VQcb1FqleIDfk"
              alt="Comparison of unfinished construction vs finished polished floor"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="p-8 md:p-12 bg-surface rounded-3xl border border-outline-variant/10">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Excelência em cada junta</h3>
            <p className="text-on-surface/70 mb-8 leading-relaxed">
              Utilizamos niveladores de alta precisão para garantir que seu porcelanato não apresente "dentes" ou irregularidades. O resultado é um espelho contínuo que valoriza o seu imóvel.
            </p>
            <ul className="space-y-4">
              {[
                "Mão de obra especializada em grandes formatos",
                "Uso de argamassas ACIII de alta performance",
                "Mapeamento prévio de paginação",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className="text-primary-container" size={20} />
                  <span className="text-on-surface/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
