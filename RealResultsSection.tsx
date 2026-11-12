import React, { useState } from 'react';
import { Sparkles, Maximize2, X, MessageCircle, CheckCircle2 } from 'lucide-react';
import { REAL_RESULTS, RealResultItem, getWhatsAppLink } from '../data/clinicData';

export const RealResultsSection: React.FC = () => {
  const [selectedResult, setSelectedResult] = useState<RealResultItem | null>(null);

  return (
    <section id="resultados" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with extra large shiny, eye-catching letters and light sweep */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-sky-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Transformações Comprovadas</span>
              <span aria-hidden="true">·</span>
              <span>Casos Clínicos Reais</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.08]">
              <span className="text-sweep-cyan">
                RESULTADOS REAIS
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Veja a transformação na vida de pacientes que recuperaram a segurança de sorrir, falar e mastigar através de nossos tratamentos de implantes e prótese protocolo na CERON.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={getWhatsAppLink("Olá! Vi os resultados reais no site da CERON e gostaria de agendar uma avaliação para o meu caso.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-md hover:shadow-sky-400/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Quero Transformar Meu Sorriso</span>
            </a>
          </div>
        </div>

        {/* Real Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {REAL_RESULTS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedResult(item)}
            >
              <div className="relative aspect-4/4 overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Status tag */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1 rounded-lg text-xs font-black text-sky-900 shadow-xs border border-white/60">
                  {item.tag}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/95 backdrop-blur-xs text-xs font-black text-slate-900 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-sky-600" />
                    <span>Ver em detalhes</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-sky-600 block mb-1">
                    {item.procedure}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">Clínica CERON</span>
                  <span className="text-xs font-bold text-sky-700 group-hover:underline flex items-center gap-1">
                    <span>Avaliar meu caso</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-50 to-sky-100/60 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-sky-600 shrink-0" />
            <p className="text-sm font-bold text-slate-900">
              Cada tratamento é planejado sob medida com base na sua estrutura óssea e harmonia facial.
            </p>
          </div>
          <span className="text-xs font-extrabold text-sky-800 shrink-0">
            Mais de 1.500 sorrisos entregues no Guarujá
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedResult && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedResult(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <div className="relative aspect-4/4 sm:aspect-16/11 bg-slate-950 flex items-center justify-center">
              <img
                src={selectedResult.imageUrl}
                alt={selectedResult.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <button
                type="button"
                onClick={() => setSelectedResult(null)}
                aria-label="Fechar visualização"
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-white">
              <span className="text-xs font-black uppercase tracking-wider text-sky-600">
                {selectedResult.procedure}
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-1">
                {selectedResult.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 font-medium">
                {selectedResult.description}
              </p>
              
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-end">
                <a
                  href={getWhatsAppLink(`Olá! Vi o resultado real de "${selectedResult.title}" e gostaria de agendar uma avaliação.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-xs font-black uppercase tracking-wider shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agendar Consulta no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
