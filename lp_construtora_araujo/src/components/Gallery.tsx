import { ArrowRight } from "lucide-react";

export default function Gallery() {
  return (
    <section className="py-24 bg-surface-container-lowest" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-2">Galeria de Projetos</h2>
            <p className="text-on-surface/60">Artesania digital em pisos e revestimentos.</p>
          </div>
          <button className="text-primary-container font-bold flex items-center gap-2 hover:underline group">
            Ver todos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:h-[800px]">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl group min-h-[300px]">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/ADBb0uiKqogVtOOQtS2ZsgciLcIM0CdgXILPYRhPUlwRz3cKebnOEXOjvqkPTgwDr6yOiPmHEiT5gOI6q67v5kvKZxNnqKjmjnbgs7ev0_NMLC_LKI2h5fV3Qx-cS2ZZFBA7pJrg4urQmEafVeYAOS7E0E5KfMwa7Isw-7Qf2KfY9aeTJaPl7uZGg4_e_hOp3UaO1cK2L9WNLf4xoj5-EmJ75_PLdI8aqQAXgmlweEi4T_9rvN0Dm5k7MzMr2Lvx7lQxZ1p94DkS4HO2"
              alt="Wide shot of luxury kitchen with wood-look porcelain tiles"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
              <div>
                <p className="text-primary-container font-bold text-sm uppercase tracking-widest mb-2">Revestimento Técnico</p>
                <h3 className="text-2xl font-bold">Área Externa Premium</h3>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl group min-h-[200px]">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/ADBb0uiAmV3ZUKoKnn29MTNGpiEJs-qPMdAgonMIhlVHztbEUay7UROx-y-QbUIfk27wWn_kWgwqctnf9QDgeGVxLB_BIta4E2Wjgcz04VGKa-u3WB5tnYFeqtoAKyagAo1Iu6A7r0rK4OYAMNKEPBB-0-IxRsfTZXeyxmKCMhYtphZnoE71l7CxS6WS2V9N1Yf_7-ueOVOGA_w-eKOpOeE6k2XdsrO3un1idUGdkotxP-ChPMSy8gYM4dV1_nk3I4ibl0mzXF_p-wgFBA"
              alt="Modern bathroom with dark gray tiles"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl group min-h-[200px]">
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/ADBb0ug9V7zR-VLRi-OYIpb2pY6rOdQqvK_QxnOJEZqGOJ2_hnObD1W_6T1PnbGZ-gEqsts8PBNsZCMfN8EZsnSGnpzpPmfVMRhGfwXP2vBpNPQD0hb-2nUil9ejtTE2cEkvNogdvUq0VUWIkZ4paZKQXLQsw5s66XvWJdMlQU6cWRPGkhOtpag1FW_0Mh3m2Gp36B_U78wkEfPOr3Leuik_QVLJa63D0aoPMxI3bNIGYGmOFGB-7t_ygK3xw49jqxGIzEGShBBkY0UBpQ"
              alt="Minimalist living room with white porcelain tiles"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
