import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import { FAQS, getWhatsAppLink, CLINIC_INFO } from '../data/clinicData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-700 mb-3">
            <span>Tire Suas Dúvidas</span>
            <span aria-hidden="true">·</span>
            <span>Perguntas Frequentes</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Principais Perguntas
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Respostas claras e transparentes para suas principais dúvidas sobre implantes, próteses, prazos e facilidades de pagamento na CERON.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-sky-400 bg-sky-50/40 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-2xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl shrink-0">💬</span>
                    <span className="font-extrabold text-base sm:text-lg text-slate-950">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-sky-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-sky-100/70 pt-4">
                    <p className="font-medium">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-50 to-sky-100/60 border border-sky-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xs">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <p className="font-extrabold text-slate-950 text-base sm:text-lg">
                Ficou com alguma outra dúvida sobre o seu tratamento?
              </p>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Fale agora mesmo com nossa equipe pelo WhatsApp oficial: <strong className="text-slate-900 font-mono">{CLINIC_INFO.phoneDisplay}</strong> | <strong className="text-sky-700 font-mono">{CLINIC_INFO.phoneSecondary}</strong>
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppLink("Olá! Tenho uma dúvida sobre os tratamentos na CERON e gostaria de mais orientações.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-xs transition-colors whitespace-nowrap shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
