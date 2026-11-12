import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, AlertCircle, Phone, Clock, User, Sparkles } from 'lucide-react';
import { SERVICES, CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';

export const ContactFormSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Avaliação de Implantes / Protocolo');
  const [preferredPeriod, setPreferredPeriod] = useState('Indiferente / Qualquer horário');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMessage('Por favor, informe seu nome completo.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Por favor, informe um telefone ou WhatsApp válido para contato.');
      return;
    }

    setErrorMessage('');
    
    // Construct pre-formatted message
    let messageText = `Olá! Meu nome é ${name.trim()}.`;
    messageText += `\nTelefone de contato: ${phone.trim()}`;
    messageText += `\nInteresse: ${service}`;
    messageText += `\nMelhor período para atendimento: ${preferredPeriod}`;
    if (notes.trim()) {
      messageText += `\nObservação / Dúvida: ${notes.trim()}`;
    }
    messageText += `\nAcessei pelo site oficial da Dentista Guarujá Centro - CERON.`;

    const waUrl = getWhatsAppLink(messageText);

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setService('Avaliação de Implantes / Protocolo');
    setPreferredPeriod('Indiferente / Qualquer horário');
    setNotes('');
    setSubmitted(false);
  };

  return (
    <section id="contato-form" className="py-20 lg:py-28 bg-slate-50/80 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with shiny typography */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-sky-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Atendimento Rápido</span>
            <span aria-hidden="true">·</span>
            <span>Formulário de Contato</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Envie sua mensagem para a{' '}
            <span className="text-shine-cyan">
              clínica CERON
            </span>
          </h2>

          <p className="mt-3 text-base sm:text-lg text-slate-600 font-medium">
            Preencha os campos abaixo para iniciar seu atendimento diretamente com a nossa equipe pelo WhatsApp.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border-2 border-slate-200/90 shadow-md p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-2">
                Mensagem enviada com sucesso!
              </h3>
              <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm sm:text-base font-medium">
                Abrimos o WhatsApp com seus dados pré-formatados. Caso a conversa não tenha aberto automaticamente, clique no botão abaixo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-black text-sm shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Abrir conversa no WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3.5 rounded-xl border-2 border-slate-200 hover:bg-slate-50 text-slate-800 font-bold text-sm transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2.5 font-medium">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="patient-name" className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                    Seu Nome Completo <span className="text-sky-600">*</span>
                  </label>
                  <input
                    id="patient-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ex: Maria Silva"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 text-sm font-medium focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="patient-phone" className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                    WhatsApp ou Telefone <span className="text-sky-600">*</span>
                  </label>
                  <input
                    id="patient-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(13) 99999-9999"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 text-sm font-medium focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="patient-service" className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                    Procedimento de Interesse
                  </label>
                  <select
                    id="patient-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 text-sm font-medium focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                  >
                    <option value="Avaliação de Implantes / Protocolo">Avaliação de Implantes / Protocolo</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Outro procedimento / Dúvida geral">Outro procedimento / Dúvida geral</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferred-period" className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                    Preferência de Período
                  </label>
                  <select
                    id="preferred-period"
                    value={preferredPeriod}
                    onChange={(e) => setPreferredPeriod(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 text-sm font-medium focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all"
                  >
                    <option value="Indiferente / Qualquer horário">Indiferente / Qualquer horário</option>
                    <option value="Manhã (09h às 12h)">Manhã (09h às 12h)</option>
                    <option value="Tarde / Noite (13h às 20h)">Tarde / Noite (13h às 20h)</option>
                    <option value="Sábado (09h às 12h)">Sábado (09h às 12h)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="patient-notes" className="block text-xs font-black text-slate-800 uppercase tracking-wider mb-2">
                  Observações ou Dúvidas (Opcional)
                </label>
                <textarea
                  id="patient-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Conte-nos brevemente o que você procura..."
                  className="w-full px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-white text-slate-900 text-sm font-medium focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-600 font-medium text-center sm:text-left">
                  Sua solicitação será encaminhada aos canais oficiais <strong className="text-slate-900 font-mono">{CLINIC_INFO.phoneDisplay}</strong> | <strong className="text-sky-700 font-mono">{CLINIC_INFO.phoneSecondary}</strong>.
                </p>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-black text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 rounded-xl shadow-md transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Iniciar conversa no WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};
