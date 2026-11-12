import React from 'react';
import { Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { DRA_VIVIANE_INFO } from '../data/clinicData';

export const DraVivianeSection: React.FC = () => {
  return (
    <section id="dra-viviane" className="py-20 lg:py-28 bg-gradient-to-b from-white via-sky-50/50 to-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Dra. Viviane Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Shiny glow aura */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-tr from-sky-400/30 via-cyan-300/40 to-sky-600/30 blur-md -z-10" />

              <div className="rounded-2xl overflow-hidden border-2 border-sky-300/80 shadow-2xl bg-slate-900 group">
                <img
                  src={DRA_VIVIANE_INFO.imageUrl}
                  alt="Dra. Viviane Machado - Cirurgiã-Dentista na Clínica CERON"
                  referrerPolicy="no-referrer"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />

                {/* Bottom glass banner on photo */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-black text-base text-white tracking-tight leading-tight">
                        {DRA_VIVIANE_INFO.name}
                      </p>
                      <p className="text-xs text-sky-300 font-bold">
                        {DRA_VIVIANE_INFO.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Presentation & Large Shiny Headline with light sweep */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Unboxed editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-sky-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Liderança Clínica</span>
              <span aria-hidden="true">·</span>
              <span>Corpo Clínico Renomado</span>
            </div>

            {/* Extra Large Shiny Headline with light stripe sweep */}
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.08] mb-3 text-balance">
              <span className="text-sweep-cyan">
                {DRA_VIVIANE_INFO.name}
              </span>
            </h2>

            <p className="text-sm sm:text-base font-extrabold text-sky-800 uppercase tracking-wider mb-6">
              Excelência, Precisão & Cuidado com Cada Paciente
            </p>

            {/* The exact quote from user request */}
            <div className="relative p-6 sm:p-7 rounded-2xl bg-white border-2 border-sky-200/90 shadow-md mb-8">
              <span className="text-5xl font-serif text-sky-200 leading-none absolute top-3 left-4 select-none">
                “
              </span>
              <p className="relative z-10 text-base sm:text-lg font-bold text-slate-800 leading-relaxed italic pl-4">
                {DRA_VIVIANE_INFO.quote}
              </p>
            </div>

            {/* Key Quality Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-black text-slate-950">Planejamento Individualizado</p>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">Diagnóstico preciso baseado nas suas necessidades reais.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-black text-slate-950">Acolhimento Humanizado</p>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">Segurança e conforto absoluto durante cada procedimento.</p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#nosso-time"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-black text-slate-800 hover:text-sky-700 bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-xl transition-colors whitespace-nowrap shadow-2xs"
              >
                <span>Conhecer o Nosso Time</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
