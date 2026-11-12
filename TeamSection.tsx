import React from 'react';
import { DRA_VIVIANE_INFO, TEAM_PHOTOS } from '../data/clinicData';

export const TeamSection: React.FC = () => {
  return (
    <section id="nosso-time" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-sky-700 mb-3">
            <span>Experiência & Acolhimento</span>
            <span aria-hidden="true">·</span>
            <span>Nosso Time</span>
          </div>
          
          {/* Main title with shiny styling */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Cuidado que começa no{' '}
            <span className="text-shine-cyan">
              primeiro contato
            </span>
          </h2>
          
          {/* User's team quote */}
          <div className="mt-5 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs max-w-2xl mx-auto">
            <p className="text-base sm:text-lg font-bold text-slate-800 italic">
              "{DRA_VIVIANE_INFO.teamQuote}"
            </p>
          </div>
        </div>

        {/* Team Photos Grid - Apenas as fotos conforme solicitado, sem descrições */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TEAM_PHOTOS.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 group bg-slate-900"
            >
              <div className="relative aspect-3/4 sm:aspect-4/5 overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle sheen overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};
