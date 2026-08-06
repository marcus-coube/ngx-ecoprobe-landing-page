import { CITIES, FAQ, SERVICES, TEAM, TESTIMONIALS } from './data';
import { EMAIL, INSTAGRAM_URL, SITE_URL } from './site';

/* JSON-LD reaproveitado do index.html original (que já performava bem)
   e expandido com os novos serviços, reviews e cidades atendidas. */

export const LOCAL_BUSINESS_JSONLD = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalBusiness'],
  name: 'Ecoprobe',
  description:
    'Serviço de ultrassom veterinário móvel em Curitiba e Região Metropolitana. Atendimento domiciliar e em clínicas parceiras com tecnologia de ponta.',
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo_ecoprobe.png`,
  image: `${SITE_URL}/assets/logo_ecoprobe.png`,
  telephone: '+55-41-98719-1306',
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Curitiba',
    addressRegion: 'PR',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -25.4484,
    longitude: -49.288,
  },
  areaServed: CITIES.map((city) => ({
    '@type': 'City',
    name: city,
  })).concat([
    {
      '@type': 'AdministrativeArea',
      name: 'Região Metropolitana de Curitiba',
    } as { '@type': string; name: string },
  ]),
  sameAs: [INSTAGRAM_URL],
  employee: TEAM.map((member) => ({
    '@type': 'Person',
    name: member.name.replace(/^Dra?\.\s*/, ''),
    honorificPrefix: 'Dra.',
    jobTitle: 'Médica-veterinária',
    description: member.bio.replace(/\s*\n\s*/g, ' '),
    identifier: member.crmv,
    ...(member.photo ? { image: `${SITE_URL}${member.photo}` } : {}),
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Registro profissional',
      identifier: member.crmv,
      recognizedBy: {
        '@type': 'Organization',
        name: 'Conselho Regional de Medicina Veterinária do Paraná',
      },
    },
  })),
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-41-98719-1306',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Serviços de Ultrassom Veterinário',
    itemListElement: SERVICES.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'MedicalProcedure',
        name: `${service.title} Veterinário`,
        description: service.description,
        procedureType: 'DiagnosticProcedure',
      },
    })),
  },
  review: TESTIMONIALS.map((t) => ({
    '@type': 'Review',
    reviewRating: {
      '@type': 'Rating',
      ratingValue: '5',
      bestRating: '5',
    },
    author: { '@type': 'Person', name: t.author },
    reviewBody: t.quote,
  })),
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: String(TESTIMONIALS.length),
    bestRating: '5',
  },
};

/* FAQ visível + perguntas extras de SEO local (cidades da Região
   Metropolitana), sem poluir a interface. */
const LOCAL_SEO_FAQ = CITIES.filter((city) => city !== 'Curitiba').map((city) => ({
  question: `A Ecoprobe realiza ultrassom veterinário em ${city}?`,
  answer: `Sim. A Ecoprobe realiza ultrassom veterinário domiciliar e em clínicas parceiras em ${city}, com agendamento pelo WhatsApp (41) 98719-1306.`,
}));

export const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [...FAQ, ...LOCAL_SEO_FAQ].map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};
