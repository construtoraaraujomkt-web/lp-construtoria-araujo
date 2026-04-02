import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
          Agende hoje e garanta seu orçamento sem compromisso
        </h2>
        <p className="text-lg md:text-xl text-on-surface/60 mb-12 max-w-2xl mx-auto">
          Não perca tempo com obras intermináveis e acabamentos mal feitos. Fale com um especialista agora.
        </p>
        <a 
          href="https://api.whatsapp.com/send/?phone=5511989436753&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="blue-gradient-btn text-on-primary-fixed px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-primary-container/30 hover:scale-105 active:scale-95 transition-all flex items-center gap-3 mx-auto w-fit"
        >
          <MessageCircle size={28} />
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
}
