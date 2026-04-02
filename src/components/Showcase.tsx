import { motion } from "motion/react";
import img3 from "../assets/gallery-3.jpg";
import img4 from "../assets/gallery-4.jpg";
import img5 from "../assets/gallery-5.jpg";
import img6 from "../assets/gallery-6.jpg";
import img7 from "../assets/gallery-7.jpg";

export default function Showcase() {
  const items = [
    {
      img: img3,
      title: "Living e Áreas Sociais",
      desc: "O assentamento de porcelanatos em grandes formatos cria amplitude, sofisticação e valoriza os ambientes principais da casa.",
      colSpan: "md:col-span-2",
      rowSpan: "md:row-span-2",
    },
    {
      img: img4,
      title: "Acabamentos de Precisão",
      desc: "Alinhamento impecável entre o revestimento e as esquadrias ou esquadrias de portas.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      img: img5,
      title: "Paredes de Destaque",
      desc: "Uso de revestimentos especiais com iluminação focal para criar requinte e diferenciação.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      img: img6,
      title: "Design e Iluminação",
      desc: "Integração perfeita entre forros com LEDs lineares e o revestimento da parede.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      img: img7,
      title: "Integração de Ambientes",
      desc: "Continuidade visual que une o conforto interno com varandas e áreas abertas.",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
  ];

  return (
    <section className="py-24 bg-surface" id="showcase">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-extrabold mb-4">
            Detalhes Que Fazem a Diferença
          </h2>
          <p className="text-on-surface/60 max-w-2xl mx-auto text-lg">
            Nós acreditamos que a perfeição está no milímetro. Veja como nosso trabalho técnico valoriza cada canto da sua obra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px]">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group rounded-3xl overflow-hidden bg-surface-container-high ${item.colSpan} ${item.rowSpan} min-h-[300px] md:min-h-0`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-6 flex flex-col justify-end opacity-90 group-hover:opacity-100 transition-opacity">
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-on-surface/80 text-sm md:text-sm leading-relaxed transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
