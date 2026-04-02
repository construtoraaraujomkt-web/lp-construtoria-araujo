import { motion } from "motion/react";
import { ShieldCheck, Award, Clock } from "lucide-react";

const heroBg = new URL("../assets/gallery-1.jpg", import.meta.url).href;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover opacity-40"
          src={heroBg}
          alt="Serviços profissionais de colocação de piso"
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
            Especialistas em Colocação de <span className="text-primary-container">Pisos, Azulejos e Porcelanatos</span>
          </h1>
          <p className="text-on-surface/80 text-lg md:text-xl mb-10 font-medium max-w-xl">
            Transforme seus ambientes com a precisão de quem entende de assentamento. Garantimos nivelamento perfeito e acabamento impecável para sua obra.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a 
              href="https://api.whatsapp.com/send/?phone=5511989436753&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="blue-gradient-btn text-on-primary-fixed px-10 py-4 rounded-lg font-bold text-lg shadow-xl shadow-primary-container/20 hover:brightness-110 transition-all text-center"
            >
              Solicitar Orçamento
            </a>
            <a href="#portfolio" className="bg-surface-container-high border border-outline-variant/30 text-center text-on-surface px-10 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-highest transition-all">
              Ver Projetos
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-primary-container" size={32} />
              <span className="font-label text-sm font-semibold tracking-wide">Para pisos e azulejos</span>
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
