import { motion } from "motion/react";
import { ShieldCheck, Award, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBXEryh0kqN_l1OZafCHuXHCIvSZ3quhEnzkWlpY0m9LveDjCXsdTiiRgO_7pYML0dMR_ncSVkHYRs_a4ogO3rgif9uQ5aM5bhrc3wi1osOxHhunRDXkbpOq5_YNFsGFDSIJBvMxsnZw57ZGiZfLm3TLAv16g-r1K1g2AkWWsoH4zYJ6Tnj8DFZ51MutRTW8LiD4PNaSICpv4upr4vNlh_79HxgrXIeqqSk-xcLnAyRf3pYwYCbEdjSc9tt1oLY9upnIBZq0QJeUI"
          alt="Modern living room with large format gray porcelain floor tiles"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-headline text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Instalação de Porcelanato com Acabamento <span className="text-primary-container">Perfeito</span> e Sem Dor de Cabeça
          </h1>
          <p className="text-on-surface/80 text-lg md:text-xl mb-10 font-medium max-w-xl">
            Transforme seus ambientes com a precisão técnica de mestres artesãos. Rapidez na entrega e qualidade impecável em cada milímetro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="https://api.whatsapp.com/send/?phone=5511989436753&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="orange-gradient-btn text-on-primary-fixed px-10 py-4 rounded-lg font-bold text-lg shadow-xl shadow-primary-container/20 hover:brightness-110 transition-all text-center"
            >
              Solicitar Orçamento
            </a>
            <button className="bg-surface-container-high border border-outline-variant/30 text-on-surface px-10 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-all">
              Ver Projetos
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-primary-container" size={32} />
              <span className="font-label text-sm font-semibold tracking-wide">Profissionais experientes</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-primary-container" size={32} />
              <span className="font-label text-sm font-semibold tracking-wide">Acabamento premium</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="text-primary-container" size={32} />
              <span className="font-label text-sm font-semibold tracking-wide">Entrega no prazo</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
