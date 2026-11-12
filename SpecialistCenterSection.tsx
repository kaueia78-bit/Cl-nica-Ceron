import React from 'react';
import { MessageCircle, Award, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import { SPECIALIST_HIGHLIGHTS, getWhatsAppLink } from '../data/clinicData';

export const SpecialistCenterSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-sky-950 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative backdrop mesh with luminous glow */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with extra large shiny luminous styling */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-sky-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Referência em Reabilitação Oral</span>
            <span aria-hidden="true">·</span>
            <span>Centro Especializado</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] text-balance">
            Especialistas em Implantes e{' '}
            <span className="text-sweep-light">
              Prótese Protocolo
            </span>{' '}
            em um único centro
          </h2>

          <p className="mt-5 text-base sm:text-xl text-sky-100/90 leading-relaxed text-balance font-medium">
            {SPECIALIST_HIGHLIGHTS.subheadline}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          
          {/* Pillar 1: Equipe multidisciplinar */}
          <div className="p-7 rounded-2xl bg-white/10 hover:bg-white/15 border-2 border-white/15 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group hover:border-sky-400/50 shadow-lg">
            <div>
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                🦷
              </div>
              <h3 className="text-xl font-black text-white mb-2 leading-snug">
                Equipe multidisciplinar
              </h3>
              <p className="text-sm text-sky-100/80 leading-relaxed font-medium">
                Dentistas especialistas em implantes e próteses.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-bold text-sky-300">
              Corpo clínico integrado
            </div>
          </div>

          {/* Pillar 2: Estrutura moderna */}
          <div className="p-7 rounded-2xl bg-white/10 hover:bg-white/15 border-2 border-white/15 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group hover:border-sky-400/50 shadow-lg">
            <div>
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                💎
              </div>
              <h3 className="text-xl font-black text-white mb-2 leading-snug">
                Estrutura moderna
              </h3>
              <p className="text-sm text-sky-100/80 leading-relaxed font-medium">
                Equipamentos de ponta, scanner 5D e câmera intraoral.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-bold text-sky-300">
              Tecnologia 5D e câmera intraoral
            </div>
          </div>

          {/* Pillar 3: Mais de 200 casos */}
          <div className="p-7 rounded-2xl bg-white/10 hover:bg-white/15 border-2 border-white/15 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group hover:border-sky-400/50 shadow-lg">
            <div>
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                🏆
              </div>
              <h3 className="text-xl font-black text-white mb-2 leading-snug">
                Mais de 200 casos
              </h3>
              <p className="text-sm text-sky-100/80 leading-relaxed font-medium">
                Mais de 200 casos realizados com sucesso.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-bold text-sky-300">
              Histórico comprovado de sucesso
            </div>
          </div>

          {/* Pillar 4: Atendimento humanizado */}
          <div className="p-7 rounded-2xl bg-white/10 hover:bg-white/15 border-2 border-white/15 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group hover:border-sky-400/50 shadow-lg">
            <div>
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                ⏱️
              </div>
              <h3 className="text-xl font-black text-white mb-2 leading-snug">
                Sem espera
              </h3>
              <p className="text-sm text-sky-100/80 leading-relaxed font-medium">
                Atendimento humanizado e sem espera.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 text-xs font-bold text-sky-300">
              Respeito ao seu tempo e conforto
            </div>
          </div>

        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-2xl bg-sky-900/70 border-2 border-sky-400/40 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left shadow-2xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Quer saber se o implante ou protocolo é indicado para você?
            </h4>
            <p className="text-sm text-sky-200 mt-1 max-w-2xl font-medium">
              Agende sua avaliação com nossos especialistas. Parcelamento facilitado em até 12x no cartão e boleto sem juros!
            </p>
          </div>

          <a
            href={getWhatsAppLink("Olá! Gostaria de agendar uma avaliação para Implantes / Prótese Protocolo na CERON.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 text-base font-black text-slate-950 bg-sky-400 hover:bg-sky-300 active:bg-sky-500 rounded-xl shadow-xl transition-transform hover:-translate-y-0.5 whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-5 h-5 text-slate-950" />
            <span>Consultar Especialistas no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
