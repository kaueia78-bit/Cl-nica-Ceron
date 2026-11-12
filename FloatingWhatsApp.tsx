import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { CLINIC_INFO, getWhatsAppLink } from '../data/clinicData';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on Desktop */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 text-white text-xs font-medium shadow-lg transition-all duration-300 pointer-events-none ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Agende pelo WhatsApp ({CLINIC_INFO.phoneDisplay})</span>
        <div className="w-2 h-2 bg-slate-900 rotate-45 absolute -right-1" />
      </div>

      {/* Floating Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Abrir conversa no WhatsApp da clínica Dentista Guarujá Centro - CERON"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-emerald-500/30 flex items-center justify-center transition-all duration-200 transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};
