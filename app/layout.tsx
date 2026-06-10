import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono, Manrope, Sora } from 'next/font/google';
import { FAQ_JSONLD, LOCAL_BUSINESS_JSONLD } from '@/lib/seo';
import { SITE_URL } from '@/lib/site';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['400', '500', '600', '700', '800'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700'],
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-plex-mono',
  weight: ['400', '500'],
});

const TITLE = 'Ecoprobe | Ultrassom Veterinário Móvel em Curitiba e Região - Brasil';
const DESCRIPTION =
  'Ultrassom veterinário móvel para clínicas e atendimento domiciliar em Curitiba e Região Metropolitana. Tecnologia avançada, menor estresse para o pet e diagnóstico preciso.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'ecoprobe',
    'ultrassom veterinário',
    'ultrassom veterinário domiciliar',
    'ultrassom veterinário em Curitiba',
    'ultrassom para cães',
    'ultrassom para gatos',
    'exame veterinário domiciliar',
    'diagnóstico por imagem veterinário',
    'ultrassom abdominal veterinário',
    'ultrassom gestacional veterinário',
    'ultrassom móvel veterinário',
    'ultrassonografia veterinária Curitiba',
    'ultrassom veterinário região metropolitana',
    'ultrassom veterinário São José dos Pinhais',
    'ultrassom veterinário Colombo',
    'ultrassom veterinário Pinhais',
    'ultrassom veterinário Araucária',
    'ultrassom veterinário Campo Largo',
    'ultrassom veterinário Fazenda Rio Grande',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: 'Ecoprobe',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: `${SITE_URL}/assets/logo_ecoprobe.png`,
        alt: 'Ecoprobe — Ultrassom Veterinário Móvel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}/assets/logo_ecoprobe.png`],
  },
  icons: {
    icon: '/favicon.ico',
  },
  other: {
    'geo.region': 'BR-PR',
    'geo.placename': 'Curitiba',
    'geo.position': '-25.4484;-49.2880',
    ICBM: '-25.4484, -49.2880',
    language: 'Portuguese',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
};

/* Aplica o tema salvo antes da hidratação para evitar flash */
const THEME_SCRIPT = `(function(){try{if(localStorage.getItem('ecoprobe-theme')==='light')document.documentElement.classList.add('light')}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }}
        />
      </head>
      <body className={`${sora.variable} ${manrope.variable} ${plexMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
