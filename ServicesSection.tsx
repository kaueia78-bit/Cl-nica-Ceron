import React from 'react';
import { MessageCircle, ArrowRight, Check, Sparkles } from 'lucide-react';
import { SERVICES, getWhatsAppLink } from '../data/clinicData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with extra large shiny typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-sky-700 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Tratamentos de Alta Performance</span>
              <span aria-hidden="true">·</span>
              <span>Procedimentos Especializados</span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 tracking-tight leading-[1.08]">
              Serviços{' '}
              <span className="text-sweep-cyan">
                odontológicos
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
              Tratamentos modernos e resolutivos para devolver a harmonia, a segurança mastigatória e a beleza do seu sorriso com tecnologia de última geração.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={getWhatsAppLink("Olá! Gostaria de agendar uma avaliação odontológica personalizada na CERON.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-black uppercase tracking-wider text-sky-700 bg-sky-100/90 hover:bg-sky-200/90 rounded-xl transition-colors shadow-2xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Agendar Avaliação</span>
            </a>
          </div>
        </div>

        {/* Actual Current Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-7 rounded-2xl bg-gradient-to-b from-white to-sky-50/40 border-2 border-sky-200/90 shadow-sm hover:shadow-xl hover:border-sky-400 transition-all duration-300 group relative"
            >
              {/* Badge */}
              {service.badge && (
                <div className="absolute -top-3.5 right-5 px-3 py-1 rounded-full bg-sky-600 text-white text-xs font-black tracking-wide shadow-xs flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-sky-200" />
                  <span>{service.badge}</span>
                </div>
              )}

              <div>
                {/* Category & index */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                    {service.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-950 mb-3 group-hover:text-sky-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm font-medium text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Benefits */}
                <ul className="space-y-2 mb-8 text-xs sm:text-sm text-slate-700 font-semibold">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button: Saiba mais via WhatsApp */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={getWhatsAppLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between px-4 py-3 text-xs font-black rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white shadow-xs transition-all duration-200 group/btn"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Saiba mais no WhatsApp</span>
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Financing and Guarantee Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-sky-50 to-sky-100/60 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-sky-600 shrink-0" />
            <p className="text-sm sm:text-base font-bold text-slate-900">
              Condições facilitadas: Parcelamento em até 12x no cartão de crédito e boleto sem juros!
            </p>
          </div>
          <a
            href={getWhatsAppLink("Olá! Gostaria de consultar as condições de parcelamento dos tratamentos na CERON.")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-950 text-white text-xs font-black uppercase tracking-wider hover:bg-slate-800 transition-colors whitespace-nowrap"
          >
            Consultar Parcelamento
          </a>
        </div>

      </div>
    </section>
  );
};
