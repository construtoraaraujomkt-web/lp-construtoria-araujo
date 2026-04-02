import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Portfólio", href: "#portfolio" },
    { name: "Serviços", href: "#services" },
    { name: "Processo", href: "#process" },
    { name: "Dúvidas", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-header">
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <a href="/" className="w-[115px] h-auto flex items-center">
            <img src={logo} alt="Construtora Araújo" className="w-full h-auto object-contain" />
          </a>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-on-surface/70 font-bold hover:text-primary-container transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://api.whatsapp.com/send/?phone=5511989436753&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="blue-gradient-btn text-on-primary-fixed px-6 py-2 rounded-lg font-bold scale-95 active:scale-90 transition-transform hidden sm:block"
          >
            Solicitar Orçamento
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-on-surface"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-surface-container-high border-t border-outline-variant/20 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-on-surface/70 font-bold text-lg"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://api.whatsapp.com/send/?phone=5511989436753&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="blue-gradient-btn text-on-primary-fixed px-6 py-3 rounded-lg font-bold text-center"
          >
            Solicitar Orçamento
          </a>
        </motion.div>
      )}
    </nav>
  );
}
