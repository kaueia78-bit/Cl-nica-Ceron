import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DraVivianeSection } from './components/DraVivianeSection';
import { TeamSection } from './components/TeamSection';
import { SpecialistCenterSection } from './components/SpecialistCenterSection';
import { ServicesSection } from './components/ServicesSection';
import { RealResultsSection } from './components/RealResultsSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { WhatsAppCTASection } from './components/WhatsAppCTASection';
import { FaqSection } from './components/FaqSection';
import { ContactFormSection } from './components/ContactFormSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-sky-500 selection:text-white font-sans">
      {/* Top Header & Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section com destaque para CERON e atendimento de excelência */}
        <Hero />

        {/* 2. Destaque Especial: Dra. Viviane Machado */}
        <DraVivianeSection />

        {/* 3. Nosso Time de Atendimento & Especialistas (Imagens da equipe) */}
        <TeamSection />

        {/* 4. Centro Especialista em Implantes e Prótese Protocolo */}
        <SpecialistCenterSection />

        {/* 5. Serviços Odontológicos (Alinhadores Invisíveis, HOF, Prótese Protocolo, etc.) */}
        <ServicesSection />

        {/* 6. RESULTADOS REAIS (Casos reais de pacientes a partir da sexta imagem) */}
        <RealResultsSection />

        {/* 7. Sobre a Clínica Institucional */}
        <AboutSection />

        {/* 8. Estrutura Física e Ambientes Odontológicos */}
        <GallerySection />

        {/* 9. Chamada de Agendamento pelo WhatsApp */}
        <WhatsAppCTASection />

        {/* 10. Principais Perguntas (FAQ oficial com implantes, prazos e parcelamento) */}
        <FaqSection />

        {/* 11. Formulário de Contato Direto */}
        <ContactFormSection />

        {/* 12. Localização Oficial e Ambos os Telefones */}
        <LocationSection />
      </main>

      {/* Rodapé Oficial */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* Botão Flutuante de WhatsApp Persistente */}
      <FloatingWhatsApp />

      {/* Modal de Política de Privacidade */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
