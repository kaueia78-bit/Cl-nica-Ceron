import React from 'react';
import { MessageCircle, MapPin, Phone, ExternalLink, Clock } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';
import { ToothLogo } from './ToothLogo';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand & Identity with Shiny Tooth Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <ToothLogo size="md" />
              <div>
                <span className="font-black text-xl text-white block leading-tight">
                  {CLINIC_INFO.name}
                </span>
                <span className="text-xs uppercase tracking-widest text-sky-400 font-black">
                  {CLINIC_INFO.shortName} · DRA. VIVIANE MACHADO
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Centro odontológico especializado em Implantes, Prótese Protocolo, Alinhadores Invisíveis e Harmonização Orofacial em Guarujá.
            </p>

            {/* Hours summary */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
              <div className="flex items-center gap-2 text-sky-400 font-bold">
                <Clock className="w-3.5 h-3.5" />
                <span>Horários de Funcionamento</span>
              </div>
              <p className="text-slate-300 font-medium">Segunda a Sexta: 09h às 20h</p>
              <p className="text-slate-300 font-medium">Sábado: 09h às 12h</p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-950 bg-sky-400 hover:bg-sky-300 rounded-lg transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Principal</span>
              </a>

              <a
                href={getWhatsAppLink(undefined, CLINIC_INFO.phoneSecondaryRaw)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>{CLINIC_INFO.phoneSecondary}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-white">
              Navegação
            </p>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#dra-viviane" className="hover:text-white transition-colors">Dra. Viviane Machado</a>
              </li>
              <li>
                <a href="#nosso-time" className="hover:text-white transition-colors">Nosso Time</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Serviços Odontológicos</a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-white transition-colors">Resultados Reais</a>
              </li>
              <li>
                <a href="#estrutura" className="hover:text-white transition-colors">Estrutura & Fotos</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">Perguntas Frequentes</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização e Contato</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-black uppercase tracking-widest text-white">
              Atendimento e Localização
            </p>
            
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div>
                  <p className="text-white font-bold">{CLINIC_INFO.address}</p>
                  <p className="text-xs text-slate-400 font-medium">Vila Maia, Guarujá - SP (CEP: {CLINIC_INFO.cep})</p>
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-sky-400 hover:underline mt-1 font-bold"
                  >
                    <span>Abrir no Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="pt-2 space-y-1">
                <span className="text-xs text-slate-400 block font-semibold">Telefones Comerciais & WhatsApp:</span>
                <p className="text-white font-mono font-bold text-base">
                  (13) 3395-6332
                </p>
                <p className="text-sky-400 font-mono font-bold text-base">
                  (13) 99135-1255
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Privacy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={onOpenPrivacy}
              className="hover:text-slate-300 underline underline-offset-4 transition-colors"
            >
              Política de Privacidade (LGPD)
            </button>
            <a
              href="#inicio"
              className="hover:text-slate-300 transition-colors"
            >
              Voltar ao topo ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
