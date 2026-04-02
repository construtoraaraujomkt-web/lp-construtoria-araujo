import { Globe, Phone } from "lucide-react";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full rounded-t-3xl bg-surface-container-low mt-12">
      <div className="flex flex-col md:flex-row justify-between items-start px-6 md:px-12 py-16 gap-12 max-w-7xl mx-auto">
        <div className="max-w-sm">
          <div className="w-[115px] h-auto mb-6">
            <img src={logo} alt="Construtora Araújo" className="w-full h-auto object-contain" />
          </div>
          <p className="text-on-surface/60 text-sm mb-6 leading-relaxed">
            Excelência técnica em instalação de porcelanatos e pedras naturais. Transformando lares em galerias de arte.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:text-white transition-all"
              href="#"
            >
              <Globe size={20} />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:text-white transition-all"
              href="https://api.whatsapp.com/send/?phone=5511989436753&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Phone size={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 sm:gap-24">
          <div>
            <h5 className="text-primary-container font-bold mb-6 text-sm uppercase tracking-widest">
              Serviços
            </h5>
            <ul className="space-y-4">
              {["Instalação de Porcelanato", "Pisos Vinílicos", "Revestimentos de Parede", "Bancadas e Nichos"].map(
                (item) => (
                  <li key={item}>
                    <a className="text-on-surface/40 text-sm hover:text-white transition-all" href="#">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h5 className="text-primary-container font-bold mb-6 text-sm uppercase tracking-widest">
              Suporte
            </h5>
            <ul className="space-y-4">
              {[
                { name: "Política de Privacidade", href: "#" },
                { name: "Termos de Uso", href: "#" },
                { name: "Guia de Instalação", href: "#" },
                { name: "Contato", href: "#" }
              ].map((item) => (
                <li key={item.name}>
                  <a className="text-on-surface/40 text-sm hover:text-white transition-all" href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-outline-variant/10 px-6 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-on-surface/60">
          © 2024 Construtora Araújo. Todos os direitos reservados.
        </div>
        <div className="flex gap-6">
          <span className="text-on-surface/40 text-xs">Atendimento: Seg-Sex, 8h às 18h</span>
        </div>
      </div>
    </footer>
  );
}
