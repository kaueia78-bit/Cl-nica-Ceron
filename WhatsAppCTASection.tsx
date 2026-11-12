import React from 'react';
import { MessageCircle, Phone, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';

export const WhatsAppCTASection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-950 text-white relative overflow-hidden">
      {/* Subtle architectural background pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Unboxed editorial kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-sky-300 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          <span>Atendimento Odontológico de Excelência</span>
          <span aria-hidden="true">·</span>
          <span>Guarujá Centro</span>
        </div>

        {/* Requested Title with shiny luminous styling */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 text-balance">
          <span className="text-shine-light">
            Vamos cuidar do seu sorriso?
          </span>
        </h2>

        {/* Requested Text */}
        <p className="text-base sm:text-xl text-sky-100/95 leading-relaxed max-w-2xl mx-auto mb-10 text-balance font-medium">
          Entre em contato com nossa equipe e consulte informações sobre nossos atendimentos. Estamos prontos para receber você!
        </p>

        {/* Big Highlighted WhatsApp Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4.5 text-lg font-black text-slate-950 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 rounded-xl shadow-xl hover:shadow-sky-400/30 transition-all duration-200 transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            <MessageCircle className="w-6 h-6 text-slate-950" />
            <span>Agendar pelo WhatsApp</span>
          </a>

          <a
            href={`tel:${CLINIC_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4.5 text-base font-bold text-white hover:text-white bg-white/10 hover:bg-white/15 border-2 border-white/20 rounded-xl backdrop-blur-xs transition-colors"
          >
            <Phone className="w-5 h-5 text-sky-300" />
            <span>Ligar: {CLINIC_INFO.phoneDisplay}</span>
          </a>
        </div>

        {/* Reassurance items with both numbers and hours */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 text-xs sm:text-sm text-sky-200/90 font-medium">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Atendimento com atenção e respeito</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Seg-Sex das 09h às 20h | Sáb até 12h</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-sky-400 shrink-0" />
            <span>{CLINIC_INFO.phoneSecondary}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
