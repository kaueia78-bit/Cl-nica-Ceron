import React, { useState } from 'react';
import { Maximize2, X, ChevronRight, ChevronLeft, Sparkles, MapPin } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/clinicData';

export const GallerySection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex(item => item.id === activeItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setActiveItem(GALLERY_ITEMS[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex(item => item.id === activeItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setActiveItem(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <section id="estrutura" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with shiny letters */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-sky-700 mb-3">
            <span>Instalações Próprias</span>
            <span aria-hidden="true">·</span>
            <span>Ambientes Modernos</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Estrutura da{' '}
            <span className="text-shine-cyan">
              clínica CERON
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conheça os ambientes exclusivos da nossa clínica na Vila Maia: recepção sofisticada com jardim vertical, consultórios cirúrgicos climatizados e tecnologia odontológica de ponta.
          </p>
        </div>

        {/* Real Clinic Photos Grid (The 3 authentic photos uploaded by the user) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-2xl overflow-hidden border-2 border-slate-200/90 bg-white shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                <img
                  src={item.imageUrl}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Real photo badge */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-xs px-3 py-1 rounded-lg text-xs font-bold text-sky-300 border border-white/20">
                  Foto Real da CERON
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-slate-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/95 backdrop-blur-xs text-xs font-black text-slate-900 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5 text-sky-600" />
                    <span>Visualizar ampliado</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-sky-600 mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
                
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-semibold">
                  <span>Vila Maia · Guarujá</span>
                  <span className="text-sky-600 font-bold group-hover:underline">Clique para ampliar</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Local visit reassurance */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-sky-600 shrink-0" />
            <p className="text-sm font-bold text-slate-800">
              Venha tomar um café conosco na Av. Dep. Emílio Carlos, 22 - Vila Maia, Guarujá - SP.
            </p>
          </div>
          <span className="text-xs font-bold text-sky-700">
            Seg-Sex das 09h às 20h | Sáb das 09h às 12h
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
          >
            <div className="relative aspect-16/11 sm:aspect-16/10 bg-slate-950 flex items-center justify-center">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                aria-label="Fechar ampliação"
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handlePrev}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Próxima foto"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 bg-white">
              <span className="text-xs font-black uppercase tracking-wider text-sky-600">
                {activeItem.category}
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-1">
                {activeItem.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 font-medium">
                {activeItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
