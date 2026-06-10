# Ecoprobe — Landing Page

Landing page da **Ecoprobe**, empresa especializada em ultrassom veterinário móvel em Curitiba e Região Metropolitana.

## Stack

- [Next.js 15](https://nextjs.org/) (App Router, export estático)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide Icons

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Build e deploy

```bash
npm run build
```

O build gera o site estático em `out/`, publicado no Firebase Hosting (`firebase.json` já aponta para `out`). O deploy acontece automaticamente via GitHub Actions no merge para `master`.

## Estrutura

- `app/` — layout (SEO/metadata/JSON-LD) e página principal
- `components/` — seções da landing page
- `lib/data.ts` — todo o conteúdo editável (serviços, equipe, depoimentos, FAQ, clínicas parceiras)
- `lib/site.ts` — constantes (link do WhatsApp, navegação, contatos)
- `lib/seo.ts` — structured data (Schema.org LocalBusiness + FAQPage)
- `public/` — favicon, robots.txt, sitemap.xml, llms.txt e assets

## Conteúdo

- **Logos de clínicas parceiras**: preencha `src` em `PARTNER_CLINICS` (`lib/data.ts`) com o caminho do logo real.
- **Fotos da equipe**: preencha `photo` em `TEAM` (`lib/data.ts`).
- **Imagens das seções**: os placeholders premium (`MediaFrame`) aceitam a prop `src` para fotos reais.

## SEO

Meta tags, OpenGraph, Twitter Card, geo tags e structured data (LocalBusiness + FAQPage com SEO local para a Região Metropolitana) são gerados no build e ficam no HTML estático.
