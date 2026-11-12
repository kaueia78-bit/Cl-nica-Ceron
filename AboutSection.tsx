import React from 'react';
import { MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with shiny typography */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-black tracking-widest uppercase text-sky-700 mb-3">
            <span>Institucional</span>
            <span aria-hidden="true">·</span>
            <span>Quem Somos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Sobre a{' '}
            <span className="text-shine-cyan">
              clínica CERON
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Clinic Structure Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-200/90 shadow-xl bg-slate-900 group">
              <img
                src="https://i.postimg.cc/sftG0RgJ/Whats-App-Image-2026-11-11-at-20-14-27-(2).jpg"
                alt="Recepção e estrutura oficial da clínica Dentista Guarujá Centro - CERON"
                referrerPolicy="no-referrer"
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-500 group-hover:scale-103"
              />
              <div className="p-4 bg-slate-950/85 backdrop-blur-md border-t border-white/20 text-xs text-slate-200 flex items-center justify-between">
                <span className="font-bold text-white">Recepção Oficial CERON · Vila Maia</span>
                <span className="text-sky-300 font-semibold">Estrutura Própria</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Focus on Patient Care */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 mb-5 leading-snug">
              Cuidado, tecnologia e dedicação à sua saúde bucal em Guarujá
            </h3>

            {/* Official Requested Text */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-medium">
              A <strong className="font-extrabold text-slate-950">Dentista Guarujá Centro - CERON</strong> é uma clínica odontológica localizada em Guarujá, dedicada a oferecer cuidado e atenção à saúde bucal de seus pacientes. Nosso objetivo é proporcionar uma experiência acolhedora, com atendimento profissional e foco nas necessidades de cada pessoa.
            </p>

            {/* Focus Pillars */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-black text-slate-950">Atendimento Acolhedor e Personalizado</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                    Consultas planejadas com tempo suficiente para esclarecer dúvidas e garantir que você se sinta seguro e confortável.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-black text-slate-950">Ambiente Moderno e Estruturado</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                    Instalações com scanner 5D, câmera intraoral e equipamentos de alta precisão para reabilitação com dentes fixos.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-black text-slate-950">Acesso Fácil na Região Central</p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-0.5 font-medium">
                    Endereço prático na Vila Maia com horários estendidos até as 20h nos dias de semana e até as 12h aos sábados.
                  </p>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={getWhatsAppLink("Olá! Gostaria de conhecer melhor a clínica CERON e tirar algumas dúvidas sobre os atendimentos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-black text-white bg-sky-600 hover:bg-sky-700 rounded-xl shadow-xs transition-colors whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com nossa equipe</span>
              </a>
              <span className="text-xs text-slate-600 font-semibold text-center sm:text-left">
                WhatsApp: {CLINIC_INFO.phoneDisplay} | {CLINIC_INFO.phoneSecondary}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
