import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-2xl w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                Política de Privacidade
              </h3>
              <p className="text-xs text-slate-500">
                {CLINIC_INFO.name}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
          <p>
            Esta Política de Privacidade esclarece como a clínica <strong className="text-slate-800">{CLINIC_INFO.name}</strong> trata as informações fornecidas por visitantes e pacientes em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>

          <h4 className="font-bold text-slate-800 text-sm pt-2">1. Coleta de Informações</h4>
          <p>
            O presente website possui finalidade estritamente institucional. Não coletamos dados pessoais sensíveis sem seu consentimento expresso. As informações voluntariamente fornecidas no formulário de contato (como nome e telefone) destinam-se exclusivamente a gerar a mensagem de atendimento pré-formatada para o WhatsApp oficial da clínica.
          </p>

          <h4 className="font-bold text-slate-800 text-sm pt-2">2. Comunicação via WhatsApp</h4>
          <p>
            Ao clicar nos botões de contato, você será direcionado ao aplicativo WhatsApp comercial da clínica ({CLINIC_INFO.phoneDisplay}). Suas mensagens e dados de saúde compartilhados durante as consultas são resguardados pelo sigilo profissional odontológico (Código de Ética Odontológica).
          </p>

          <h4 className="font-bold text-slate-800 text-sm pt-2">3. Não Compartilhamento com Terceiros</h4>
          <p>
            A {CLINIC_INFO.name} não comercializa, aluga ou repassa contatos de pacientes a terceiros com propósitos publicitários.
          </p>

          <h4 className="font-bold text-slate-800 text-sm pt-2">4. Localização e Contato Oficial</h4>
          <p>
            Para qualquer esclarecimento sobre a privacidade de seus dados, entre em contato diretamente pelo nosso canal comercial oficial ({CLINIC_INFO.phoneDisplay}) ou no endereço: {CLINIC_INFO.address}.
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-slate-800 transition-colors"
          >
            Compreendi e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
