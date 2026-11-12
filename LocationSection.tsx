import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, ExternalLink, Copy, Check, Clock } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CLINIC_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-sky-700 mb-3">
            <span>Onde Estamos</span>
            <span aria-hidden="true">·</span>
            <span>Localização & Atendimento</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Localização e contato
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Fácil acesso na Vila Maia, próximo ao centro de Guarujá. Venha nos visitar ou converse conosco diretamente no WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Official Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs space-y-6">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700">
                  Clínica Odontológica
                </span>
                <h3 className="text-2xl font-black text-slate-950 mt-1">
                  {CLINIC_INFO.name}
                </h3>
              </div>

              {/* Working Hours Block */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Horários de Atendimento
                    </p>
                    <p className="text-sm font-extrabold text-slate-900 mt-0.5">
                      Segunda a Sexta: 09h às 20h
                    </p>
                    <p className="text-sm font-bold text-slate-700 mt-0.5">
                      Sábados: 09h às 12h
                    </p>
                  </div>
                </div>
              </div>

              {/* Address Block */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Endereço Oficial
                    </p>
                    <p className="text-sm sm:text-base font-extrabold text-slate-950 mt-0.5 leading-snug">
                      {CLINIC_INFO.address}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Bairro Vila Maia · Guarujá - SP
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="mt-2 ml-12 inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Endereço copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar endereço completo</span>
                    </>
                  )}
                </button>
              </div>

              {/* Telephones / WhatsApp Block */}
              <div className="pt-4 border-t border-slate-200/80 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Telefones & WhatsApp
                    </p>
                    <p className="text-base sm:text-lg font-black text-slate-950 font-mono">
                      (13) 3395-6332
                    </p>
                    <p className="text-base sm:text-lg font-black text-sky-700 font-mono">
                      (13) 99135-1255
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-extrabold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Conversar no WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
                </a>

                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-bold text-slate-800 hover:text-slate-950 bg-white hover:bg-slate-50 border-2 border-slate-200 rounded-xl transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-slate-500" />
                  <span>Abrir localização no Google Maps</span>
                </a>
              </div>
            </div>

            {/* Local Context Box */}
            <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900">Ponto de Referência no Guarujá:</span> Localizada estrategicamente na Av. Dep. Emílio Carlos, próximo a consultórios, bancos e comércio da Vila Maia e Centro.
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border-2 border-slate-200 shadow-md bg-slate-100 relative h-[450px] sm:h-[500px]">
              <iframe
                title="Localização Dentista Guarujá Centro - CERON"
                src={CLINIC_INFO.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              
              {/* Bottom quick overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/80 shadow-md flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-800 font-semibold truncate">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="truncate">Av. Dep. Emílio Carlos, 22 - Vila Maia, Guarujá - SP</span>
                </div>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-sky-700 hover:underline shrink-0"
                >
                  <span>Ver rotas</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
