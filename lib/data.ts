import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  Baby,
  CalendarCheck,
  ClipboardList,
  Clock3,
  Droplets,
  Eye,
  FileCheck2,
  FlaskConical,
  Gauge,
  HandHeart,
  HeartPulse,
  Home,
  MessageCircle,
  Microscope,
  ScanLine,
  Sparkles,
  Stethoscope,
  Syringe,
  Timer,
  Zap,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Serviços                                                            */
/* ------------------------------------------------------------------ */
export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    title: 'Ultrassom Abdominal',
    description:
      'Avaliação completa dos órgãos abdominais — fígado, rins, baço, bexiga e intestinos — para diagnóstico preciso de alterações internas.',
    icon: ScanLine,
  },
  {
    title: 'Ultrassom Gestacional',
    description:
      'Confirmação de gestação e avaliação de viabilidade fetal em cadelas e gatas.',
    icon: Baby,
  },
  {
    title: 'Ultrassom Cervical',
    description:
      'Avaliação de estruturas da região cervical, como tireoide, linfonodos e glândulas salivares.',
    icon: Activity,
  },
  {
    title: 'Ultrassom Ocular',
    description:
      'Avaliação do globo ocular e estruturas anexas, indicada em casos de opacidade, trauma ou suspeita de descolamento de retina.',
    icon: Eye,
  },
  {
    title: 'AFAST',
    description:
      'Avaliação abdominal focada e rápida para detecção de líquido livre em situações de emergência.',
    icon: Zap,
  },
  {
    title: 'Citologia Ecoguiada',
    description:
      'Coleta de material para análise citológica guiada por imagem em tempo real, com máxima precisão e segurança.',
    icon: Microscope,
  },
  {
    title: 'Cistocentese',
    description:
      'Coleta estéril de urina guiada por ultrassom, indicada para exames laboratoriais confiáveis.',
    icon: Syringe,
  },
  {
    title: 'Abdominocentese',
    description:
      'Drenagem ou coleta de líquido abdominal guiada por imagem, com conforto e segurança para o paciente.',
    icon: FlaskConical,
  },
];

/* ------------------------------------------------------------------ */
/* Indicadores                                                         */
/* ------------------------------------------------------------------ */
export const STATS = [
  { value: 3000, prefix: '+', suffix: '', label: 'Exames realizados', isNumber: true },
  {
    value: 100,
    prefix: '',
    suffix: '%',
    label: 'Foco exclusivo em ultrassom veterinário',
    isNumber: true,
  },
  {
    text: 'Curitiba + Região',
    label: 'Área de atendimento na Região Metropolitana',
    isNumber: false,
  },
  { text: 'Alta definição', label: 'Equipamentos de última geração', isNumber: false },
] as const;

/* ------------------------------------------------------------------ */
/* Comparação: clínica x domiciliar                                    */
/* ------------------------------------------------------------------ */
export const COMPARISON = {
  clinic: {
    title: 'Deslocamento até a clínica',
    items: [
      'Transporte na caixa ou no carro',
      'Mudança brusca de ambiente',
      'Contato com outros animais',
      'Estresse durante o trajeto',
      'Maior ansiedade no momento do exame',
    ],
  },
  ecoprobe: {
    title: 'Atendimento Ecoprobe',
    items: [
      'Exame onde o pet se sente seguro',
      'Ambiente familiar e conhecido',
      'Menor estresse e mais cooperação',
      'Mais conforto para o tutor',
      'Experiência tranquila para tutor e paciente',
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Como funciona o exame (timeline)                                    */
/* ------------------------------------------------------------------ */
export type Step = {
  number: string;
  title: string;
  description: string;
  highlight?: string;
  icon: LucideIcon;
};

export const STEPS: Step[] = [
  {
    number: '01',
    title: 'Agendamento',
    description:
      'Entre em contato pelo WhatsApp e nossa equipe ajudará a encontrar o melhor horário.',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Preparo',
    description:
      'Você recebe um guia completo com todas as orientações: jejum quando necessário, cuidados prévios e informações importantes para o tutor.',
    icon: ClipboardList,
  },
  {
    number: '03',
    title: 'Atendimento',
    description: 'Realizamos o exame na clínica parceira ou no conforto da sua residência.',
    highlight:
      'Para gatos, utilizamos recursos que reduzem o estresse durante o atendimento, incluindo cromoterapia e sons relaxantes.',
    icon: Home,
  },
  {
    number: '04',
    title: 'Exame e Avaliação',
    description:
      'Os exames são realizados com equipamentos de última geração e alta qualidade de imagem.',
    icon: Gauge,
  },
  {
    number: '05',
    title: 'Resultado',
    description:
      'Um parecer parcial é disponibilizado ao veterinário responsável ao término do exame.',
    icon: Stethoscope,
  },
  {
    number: '06',
    title: 'Laudo Completo',
    description: 'Laudo entregue em até 24 horas úteis após a realização do exame.',
    highlight: '✔ Parecer imediato ao veterinário  ✔ Laudo completo em até 24h úteis',
    icon: FileCheck2,
  },
];

/* ------------------------------------------------------------------ */
/* Benefícios — atendimento domiciliar e clínicas                      */
/* ------------------------------------------------------------------ */
export const HOME_BENEFITS = [
  { label: 'Menor estresse para o pet', icon: HeartPulse },
  { label: 'Ambiente familiar', icon: Home },
  { label: 'Atendimento humanizado', icon: HandHeart },
  { label: 'Tecnologia de ponta', icon: Sparkles },
  { label: 'Mais comodidade para os tutores', icon: CalendarCheck },
];

export const CLINIC_BENEFITS = [
  { label: 'Agilidade no atendimento', icon: Timer },
  { label: 'Equipamentos modernos', icon: Gauge },
  { label: 'Diagnósticos precisos', icon: ScanLine },
  { label: 'Atendimento especializado', icon: Stethoscope },
];

/* ------------------------------------------------------------------ */
/* Parcerias                                                           */
/* ------------------------------------------------------------------ */
export const PARTNER_ADVANTAGES = [
  {
    title: 'Horários Fixos',
    description: 'Reserve janelas exclusivas para sua clínica.',
    icon: CalendarCheck,
  },
  {
    title: 'Valores Diferenciados',
    description: 'Condições especiais para parceiros.',
    icon: Droplets,
  },
  {
    title: 'Prioridade de Atendimento',
    description: 'Agendamentos mais rápidos para sua rotina.',
    icon: Clock3,
  },
  {
    title: 'Prioridade em Plantões',
    description: 'Maior suporte em situações urgentes.',
    icon: Zap,
  },
];

/* Logos de clínicas parceiras — substituir `src` pelos logos reais */
export type PartnerClinic = {
  name: string;
  src?: string;
};

export const PARTNER_CLINICS: PartnerClinic[] = [
  { name: 'Petite Gato' },
  { name: 'Barreto Consultório Veterinário' },
  { name: 'Mundo Animal' },
  { name: 'VETS' },
  { name: 'CampVet' },
  { name: 'Petland Dra. Mei' },
  { name: 'Jodie Dogs' },
  { name: 'GreenVet' },
];

/* ------------------------------------------------------------------ */
/* Equipe                                                              */
/* ------------------------------------------------------------------ */
export type TeamMember = {
  name: string;
  role: string;
  crmv: string;
  bio: string;
  photo?: string;
};

export const TEAM: TeamMember[] = [
  {
    name: 'Dra. Giovana Rezende',
    role: 'Médica-veterinária • Responsável Técnica',
    crmv: 'CRMV-PR 18378',
    bio: 'Graduada em Medicina Veterinária pela UNIMAR.\nPós-graduada em Diagnóstico por Imagem PUC-PR.\nCapacitação Teórica e Prática em US Abdominal - NAUS.',
    photo: '/assets/team/giovana-rezende.webp',
  },
  {
    name: 'Dra. Natalia Tratch',
    role: 'Médica-veterinária ',
    crmv: 'CRMV-PR 27105',
    bio: 'Graduada em Medicina Veterinária pela Unicesumar.',
    photo: '/assets/team/natalia-tratch.webp',
  },
  {
    name: 'Dra. Marcela Vieira',
    role: 'Médica-veterinária',
    crmv: 'CRMV-PR 24730',
    bio: 'Graduada em Medicina Veterinária pela Universidade Positivo.',
    photo: '/assets/team/marcela-vieira.webp',
  },
];

/* ------------------------------------------------------------------ */
/* Depoimentos                                                         */
/* ------------------------------------------------------------------ */
export type Testimonial = {
  quote: string;
  author: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Dra. Giovana é incrível! Atende os pets com muito amor, paciência e profissionalismo. Dá pra ver o quanto ela ama o que faz!',
    author: 'Lorraine Mayumi',
  },
  {
    quote:
      'A Ecoprobe superou todas as minhas expectativas! O atendimento é impecável. A Giovana demonstrou um cuidado incrível com cada detalhe para que meu gato se sentisse completamente à vontade, utilizando aromaterapia, cromoterapia e até gel de contato aquecido. Além disso, o atendimento domiciliar faz toda a diferença.',
    author: 'Vania Iarek',
  },
  {
    quote: 'Excelente time, agilidade em atendimento e retornos! Obrigado pela parceria!',
    author: 'Dr. Guilherme A. Vieira',
  },
  {
    quote:
      'A Ecoprobe é a melhor empresa de ultrassom veterinário. Equipe super prestativa, respondem rápido, são muito profissionais e dá para perceber o amor de toda equipe pela profissão e pelos animais.',
    author: 'Dra. Julia Migotto',
  },
  {
    quote: 'Além de uma excelente profissional, é atenciosa e carinhosa com os pacientes.',
    author: 'Rafaella Tonietto',
  },
  {
    quote:
      'Atendimento de excelência. Fui muito bem atendida, com cordialidade, agilidade e profissionalismo.',
    author: 'Dra. Noemi Cristina',
  },
];

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */
export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ: FaqItem[] = [
  {
    question: 'O atendimento domiciliar precisa de pedido médico?',
    answer:
      'Sim. Os atendimentos domiciliares de ultrassom veterinário são realizados mediante pedido do médico-veterinário responsável pelo paciente, garantindo que o exame seja direcionado à investigação clínica correta.',
  },
  {
    question: 'Vocês atendem gatos?',
    answer:
      'Sim. Atendemos gatos em todas as modalidades de ultrassom veterinário e utilizamos recursos específicos para felinos, como cromoterapia e sons relaxantes, reduzindo o estresse durante o exame.',
  },
  {
    question: 'Vocês atendem cães?',
    answer:
      'Sim. Atendemos cães de todos os portes, tanto em atendimento domiciliar quanto em clínicas veterinárias parceiras em Curitiba e Região Metropolitana.',
  },
  {
    question: 'Quanto tempo demora o exame de ultrassom veterinário?',
    answer:
      'Em média, o exame de ultrassom veterinário dura entre 20 e 40 minutos, dependendo da modalidade e do comportamento do paciente. Priorizamos sempre o conforto e a tranquilidade do animal.',
  },
  {
    question: 'Qual a área de atendimento da Ecoprobe?',
    answer:
      'Atendemos Curitiba e toda a Região Metropolitana, incluindo São José dos Pinhais, Colombo, Pinhais, Araucária, Campo Largo e Fazenda Rio Grande. Consulte disponibilidade para a sua região pelo WhatsApp.',
  },
  {
    question: 'Como recebo o laudo do exame?',
    answer:
      'Um parecer parcial é disponibilizado ao veterinário responsável ao término do exame e o laudo completo é entregue digitalmente em até 24 horas úteis.',
  },
  {
    question: 'Vocês atendem clínicas veterinárias?',
    answer:
      'Sim. Oferecemos parceria para clínicas veterinárias que desejam disponibilizar exames de ultrassom com qualidade premium, sem necessidade de investir em estrutura própria, com horários fixos e prioridade de atendimento.',
  },
  {
    question: 'É necessário jejum para o ultrassom abdominal veterinário?',
    answer:
      'Sim, recomenda-se jejum alimentar de 6 a 8 horas antes do exame para garantir melhor qualidade de imagem abdominal. Todas as orientações de preparo são enviadas no agendamento.',
  },
  {
    question: 'Como agendar um ultrassom veterinário com a Ecoprobe?',
    answer:
      'O agendamento é feito exclusivamente pelo WhatsApp (41) 98719-1306. Não atendemos ligações telefônicas.',
  },
];

/* ------------------------------------------------------------------ */
/* Cidades atendidas (SEO local)                                       */
/* ------------------------------------------------------------------ */
export const CITIES = [
  'Curitiba',
  'São José dos Pinhais',
  'Colombo',
  'Pinhais',
  'Araucária',
  'Campo Largo',
  'Fazenda Rio Grande',
];
