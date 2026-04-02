import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const images = Array.from({ length: 18 }, (_, i) => new URL(`../assets/gallery-${i + 1}.jpg`, import.meta.url).href);

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 bg-surface-container-lowest" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">Galeria de Projetos</h2>
            <p className="text-on-surface/60">Especialistas em assentamento de pisos, azulejos e porcelanatos.</p>
          </div>
          <button className="text-primary-container font-bold flex items-center gap-2 hover:underline group">
            Ver todos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="relative w-full h-[300px] md:h-[600px] rounded-2xl overflow-hidden group bg-surface-container-high">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full object-contain md:object-cover"
              alt={`Projeto de piso e porcelanato ${currentIndex + 1}`}
            />
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background text-on-surface p-3 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/50 hover:bg-background text-on-surface p-3 rounded-full backdrop-blur-sm transition-all"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/80 px-4 py-1 rounded-full text-xs font-bold tracking-widest text-on-surface">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </section>
  );
}
