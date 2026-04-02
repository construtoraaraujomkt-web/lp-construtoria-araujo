/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BeforeAfter from "./components/BeforeAfter";
import Benefits from "./components/Benefits";
import Gallery from "./components/Gallery";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <BeforeAfter />
        <Benefits />
        <Gallery />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
