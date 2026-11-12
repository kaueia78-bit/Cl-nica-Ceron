import React from 'react';
import { MessageCircle, ArrowRight, MapPin, Phone, Clock, Sparkles, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Highlight Pill */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/90 border border-sky-300 text-sky-950 text-xs font-black tracking-wide shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-pulse" />
            <span>CENTRO ESPECIALIZADO EM IMPLANTES & PRÓTESE PROTOCOLO</span>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 bg-white/90 px-3 py-1 rounded-full border border-slate-200">
            <Clock className="w-3.5 h-3.5 text-sky-600" />
            <span>Seg-Sex das 09h às 20h | Sáb das 09h às 12h</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Brand Title Highlight */}
            <p className="text-xs sm:text-sm font-black tracking-widest uppercase text-sky-700 mb-2">
              Dentista Guarujá Centro — CERON
            </p>

            {/* Main Headline - Extra large with shimmering light sweep */}
            <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-950 leading-[1.08] text-balance mb-6">
              Seu sorriso merece{' '}
              <span className="text-sweep-cyan">
                cuidado especial.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl font-medium text-slate-600 leading-relaxed max-w-2xl mb-8">
              Na CERON, cuidamos da sua saúde bucal com atenção, profissionalismo e dedicação.
              Conheça nossa clínica odontológica em Guarujá com a <strong className="text-slate-950 font-extrabold">Dra. Viviane Machado</strong> e equipe especializada.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4.5 text-base font-black text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-md hover:shadow-sky-400/35 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 whitespace-nowrap transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Agendar pelo WhatsApp</span>
              </a>

              <a
                href="#dra-viviane"
                className="inline-flex items-center justify-center gap-2 px-6 py-4.5 text-base font-bold text-slate-800 hover:text-sky-700 bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-xl transition-colors duration-200 whitespace-nowrap shadow-2xs"
              >
                <span>Conheça nossa clínica</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            </div>

            {/* Trust Markers with Both Telephones */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Av. Dep. Emílio Carlos, 22 - Vila Maia</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                <span>
                  WhatsApp: <strong className="font-mono text-slate-950 font-bold">{CLINIC_INFO.phoneDisplay}</strong> | <strong className="font-mono text-sky-700 font-bold">{CLINIC_INFO.phoneSecondary}</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Clinic Photography (Video removed) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-2xl bg-slate-900 group">
              <img
                src={CLINIC_INFO.heroImageUrl}
                alt="Recepção moderna e estrutura oficial da clínica Dentista Guarujá Centro - CERON"
                referrerPolicy="no-referrer"
                className="w-full h-[400px] sm:h-[480px] lg:h-[510px] object-cover transition-transform duration-500 group-hover:scale-103"
              />

              {/* Optical contrast gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Badge on bottom */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900 leading-snug">
                      Recepção & Estrutura Oficial CERON
                    </p>
                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                      Ambiente sofisticado com conforto e tecnologia em Guarujá
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4-Item Proof Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="text-2xl shrink-0">🦷</div>
            <div>
              <p className="text-sm font-black text-slate-950">Especialistas em Implantes</p>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">Prótese protocolo e carga imediata</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="text-2xl shrink-0">💎</div>
            <div>
              <p className="text-sm font-black text-slate-950">Alinhadores 3x Mais Rápidos</p>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">Conforto absoluto e tecnologia invisível</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="text-2xl shrink-0">🏆</div>
            <div>
              <p className="text-sm font-black text-slate-950">+1.500 Sorrisos Entregues</p>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">Excelência comprovada no Guarujá</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
            <div className="text-2xl shrink-0">⏱️</div>
            <div>
              <p className="text-sm font-black text-slate-950">Horários Estendidos</p>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">Seg-Sex até as 20h e Sábado até as 12h</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
