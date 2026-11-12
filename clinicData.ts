export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  badge?: string;
  description: string;
  benefits: string[];
  whatsappMessage: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  alt: string;
}

export interface RealResultItem {
  id: string;
  title: string;
  procedure: string;
  description: string;
  imageUrl: string;
  alt: string;
  tag: string;
}

export interface TeamPhotoItem {
  id: string;
  imageUrl: string;
  alt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const CLINIC_INFO = {
  name: "Dentista Guarujá Centro - CERON",
  shortName: "CERON Odontologia",
  tagline: "Seu sorriso merece cuidado especial.",
  heroSubtitle: "Na CERON, cuidamos da sua saúde bucal com atenção, profissionalismo e dedicação. Conheça nossa clínica odontológica em Guarujá.",
  aboutText: "A Dentista Guarujá Centro - CERON é uma clínica odontológica localizada em Guarujá, dedicada a oferecer cuidado e atenção à saúde bucal de seus pacientes. Nosso objetivo é proporcionar uma experiência acolhedora, com atendimento profissional e foco nas necessidades de cada pessoa.",

  // Hero Image (Replaced video)
  heroImageUrl: "https://i.postimg.cc/sftG0RgJ/Whats-App-Image-2026-11-11-at-20-14-27-(2).jpg",

  // Official Contacts
  phoneDisplay: "(13) 3395-6332",
  phoneRaw: "551333956332",
  phoneSecondary: "(13) 99135-1255",
  phoneSecondaryRaw: "5513991351255",

  // Working Hours
  hoursWeek: "Segunda a Sexta: 09h às 20h",
  hoursSat: "Sábado: 09h às 12h",
  hoursDisplay: "Seg-Sex das 09h às 20h | Sáb das 09h às 12h",

  // Address
  address: "Av. Dep. Emílio Carlos, 22 - Vila Maia, Guarujá - SP, 11410-140",
  addressShort: "Av. Dep. Emílio Carlos, 22 - Vila Maia",
  city: "Guarujá - SP",
  cep: "11410-140",

  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Dep.+Em%C3%ADlio+Carlos,+22+-+Vila+Maia,+Guaruj%C3%A1+-+SP,+11410-140",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=Av.+Dep.+Em%C3%ADlio+Carlos,+22+-+Vila+Maia,+Guaruj%C3%A1+-+SP,+11410-140&t=&z=16&ie=UTF8&iwloc=&output=embed",

  defaultWhatsAppMessage: "Olá! Acessei o site da Dentista Guarujá Centro - CERON e gostaria de obter mais informações sobre os atendimentos odontológicos."
};

export const getWhatsAppLink = (customMessage?: string, phone = CLINIC_INFO.phoneRaw): string => {
  const message = customMessage || CLINIC_INFO.defaultWhatsAppMessage;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};

export const DRA_VIVIANE_INFO = {
  name: "Dra. Viviane Machado",
  role: "Cirurgiã-Dentista · Especialista em Implantes",
  quote: "Na Clínica Ceron, contamos com profissionais renomados que garantem tratamentos de excelência em odontologia, proporcionando a melhor experiência para nossos pacientes em cada visita.",
  teamQuote: "Nossos pacientes usufruem de uma experiência completa através do nosso time, desde o primeiro atendimento!",
  imageUrl: "https://i.postimg.cc/vBxHWc9p/Captura-de-tela-2026-11-11-194930.png"
};

// Fotos da equipe atualizadas com os novos links
export const TEAM_PHOTOS: TeamPhotoItem[] = [
  {
    id: "equipe-1",
    imageUrl: "https://i.postimg.cc/J0w7KM5y/Captura-de-tela-2026-11-11-195000.png",
    alt: "Membro da equipe Clínica CERON"
  },
  {
    id: "equipe-2",
    imageUrl: "https://i.postimg.cc/tRP4Jn9p/Captura-de-tela-2026-11-11-195044.png",
    alt: "Membro da equipe Clínica CERON"
  },
  {
    id: "equipe-3",
    imageUrl: "https://i.postimg.cc/c4S4n1Jz/Captura-de-tela-2026-11-11-195106.png",
    alt: "Membro da equipe clínica CERON com uniforme cirúrgico"
  },
  {
    id: "equipe-4",
    imageUrl: "https://i.postimg.cc/bN9YHXDN/Captura-de-tela-2026-11-11-195133.png",
    alt: "Especialista do corpo clínico da Clínica CERON"
  }
];

export const SPECIALIST_HIGHLIGHTS = {
  headline: "Especialistas em Implantes e Prótese Protocolo em um único centro odontológico completo",
  subheadline: "Tecnologia de ponta, equipe altamente capacitada e planejamento digital para devolver o prazer de mastigar e sorrir com total firmeza.",
  pillars: [
    {
      icon: "tooth",
      title: "Equipe multidisciplinar",
      description: "Dentistas especialistas em implantes e próteses."
    },
    {
      icon: "gem",
      title: "Estrutura moderna",
      description: "Equipamentos de ponta, scanner 5D e câmera intraoral."
    },
    {
      icon: "trophy",
      title: "Mais de 200 casos realizados",
      description: "Mais de 200 casos realizados com sucesso."
    },
    {
      icon: "clock",
      title: "Atendimento humanizado",
      description: "Atendimento humanizado e sem espera."
    }
  ]
};

// Serviços atuais solicitados pelo usuário
export const SERVICES: ServiceItem[] = [
  {
    id: "alinhadores-invisiveis",
    title: "Alinhadores Invisíveis",
    category: "Ortodontia Moderna",
    badge: "3x Mais Rápido",
    description: "Seu sorriso alinhado de uma forma 3x mais rápido que o método convencional com aparelho metálico e com muito mais conforto!",
    benefits: [
      "Praticamente imperceptíveis",
      "Removíveis para comer e higienizar",
      "Muito mais conforto sem machucados"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre os Alinhadores Invisíveis na CERON."
  },
  {
    id: "harmonizacao-orofacial",
    title: "Harmonização Orofacial (HOF)",
    category: "Estética Facial",
    badge: "Harmonia das Curvas",
    description: "Transforme as curvas do seu rosto e sinta o prazer de ter um semblante harmonioso!",
    benefits: [
      "Realce natural dos traços",
      "Equilíbrio anatômico e rejuvenescimento",
      "Procedimentos seguros e personalizados"
    ],
    whatsappMessage: "Olá! Gostaria de saber mais sobre Harmonização Orofacial (HOF) na CERON."
  },
  {
    id: "protese-protocolo",
    title: "Prótese Protocolo",
    category: "Reabilitação sobre Implantes",
    badge: "Dentes Fixos",
    description: "O sonho de ter de volta o seu sorriso com a segurança dos implantes está mais próximo do que pensava!",
    benefits: [
      "Dentes fixos com firmeza absoluta",
      "Segurança total na mastigação",
      "Possibilidade de dentes fixos no mesmo dia"
    ],
    whatsappMessage: "Olá! Gostaria de agendar uma avaliação para Prótese Protocolo na CERON."
  },
  {
    id: "implantes-dentarios",
    title: "Implantes Dentários",
    category: "Especialidade Cirúrgica",
    badge: "Alta Previsibilidade",
    description: "Tecnologias avançadas que permitem o implante mesmo em casos de perda óssea, com anestesia local e sedação com desconforto mínimo.",
    benefits: [
      "Recuperação da autoestima e mastigação",
      "Scanner 5D e planejamento guiado",
      "Condições facilitadas em até 12x e boleto sem juros"
    ],
    whatsappMessage: "Olá! Gostaria de informações sobre Implantes Dentários na CERON."
  }
];

// Resultados Reais atualizados com os novos links
export const REAL_RESULTS: RealResultItem[] = [
  {
    id: "resultado-1",
    title: "Reabilitação Oral & Protocolo",
    procedure: "Prótese Protocolo sobre Implantes",
    description: "Devolução da plenitude do sorriso, alinhamento oclusal harmônico e segurança total para mastigar e sorrir.",
    imageUrl: "https://i.postimg.cc/5294sPLL/Captura-de-tela-2026-11-11-200253.png",
    alt: "Paciente sorrindo com prótese protocolo fixa realizada na clínica CERON",
    tag: "Caso Real Concluído"
  },
  {
    id: "resultado-2",
    title: "Segurança e Firmeza Mastigatória",
    procedure: "Implantes & Estética Dental",
    description: "Recuperação anatômica com dentes fixos, proporcionando rejuvenescimento facial e conforto no dia a dia.",
    imageUrl: "https://i.postimg.cc/zfVJrVdD/Captura-de-tela-2026-11-11-200309.png",
    alt: "Sorriso renovado com segurança e estética com implantes dentários",
    tag: "Caso Real Concluído"
  },
  {
    id: "resultado-3",
    title: "Naturalidade & Harmonia do Sorriso",
    procedure: "Prótese Fixa sobre Implantes",
    description: "Planejamento personalizado com tom e formato dos dentes em perfeita harmonia com as linhas de expressão.",
    imageUrl: "https://i.postimg.cc/wvNg1n8r/Captura-de-tela-2026-11-11-200340.png",
    alt: "Resultado estético de reabilitação e implantes dentários em paciente da CERON",
    tag: "Caso Real Concluído"
  }
];

// Imagens da estrutura da clínica atualizadas com os novos links
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "estrutura-recepcao-painel",
    title: "Recepção CERON & Jardim Vertical",
    category: "Recepção Principal",
    description: "Ambiente sofisticado com painel amadeirado, logo CERON em iluminação indireta dourada, lustre de design e recepção acolhedora.",
    imageUrl: "https://i.postimg.cc/sftG0RgJ/Whats-App-Image-2026-11-11-at-20-14-27-(2).jpg",
    alt: "Recepção da clínica CERON com logo dourado em iluminação suave e jardim vertical"
  },
  {
    id: "estrutura-consultorio-atendimento",
    title: "Consultório & Atendimento Clínico",
    category: "Consultórios Modernos",
    description: "Ambiente de tratamento equipado com tecnologia avançada, esterilização contínua e foco no conforto total do paciente.",
    imageUrl: "https://i.postimg.cc/zXZ3FSx7/Whats-App-Image-2026-11-11-at-20-14-27-(1).jpg",
    alt: "Consultório da clínica CERON em atendimento com cirurgiã e paciente na cadeira odontológica"
  },
  {
    id: "estrutura-lounge-espera",
    title: "Lounge de Espera & Linhas de Luz",
    category: "Estrutura Interna",
    description: "Poltronas confortáveis, iluminação LED arquitetônica linear e ambiente climatizado para uma experiência sem espera.",
    imageUrl: "https://i.postimg.cc/DzMwJqW0/Whats-App-Image-2026-11-11-at-20-14-27.jpg",
    alt: "Corredor e sala de espera da clínica CERON com iluminação em fita de LED contínua"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "Dói para fazer implante?",
    answer: "Não. O procedimento é feito com anestesia local e, quando necessário, sedação. O desconforto é mínimo."
  },
  {
    question: "E se eu não tiver osso suficiente?",
    answer: "Hoje existem técnicas avançadas que permitem o implante mesmo em casos de perda óssea. Com enxerto ou não."
  },
  {
    question: "Em quanto tempo é instalado meus dentes fixos?",
    answer: "Em muitos casos, o paciente já sai com dentes fixos provisórios no mesmo dia da cirurgia. E em alguns casos a definitiva pode já ser instalada também."
  },
  {
    question: "Posso parcelar o tratamento?",
    answer: "Sim. Oferecemos condições personalizadas e parcelamento facilitado, como cartão de crédito até 12x e o boleto sem juros!"
  },
  {
    question: "Quais são os horários de atendimento da clínica?",
    answer: "Seg-Sex das 09h às 20h | Sáb das 09h às 12h."
  },
  {
    question: "Como funciona o agendamento de consultas pelo WhatsApp?",
    answer: "Basta clicar em qualquer botão do site ou enviar mensagem para (13) 3395-6332 ou (13) 99135-1255. Nossa equipe responde de forma rápida e humanizada."
  },
  {
    question: "Onde a clínica está localizada no Guarujá?",
    answer: "Av. Dep. Emílio Carlos, 22 - Vila Maia, Guarujá - SP (CEP: 11410-140)."
  }
];
