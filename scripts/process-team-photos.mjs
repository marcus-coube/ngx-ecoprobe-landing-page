// Pré-processamento das fotos da equipe (public/assets/team/*.JPEG -> *.webp)
//
// O que faz:
//  1. Crop 4:4.2 por foto (mesmo aspect do card em components/team.tsx), com zoom
//     individual para equalizar o tamanho aparente dos rostos e manter os olhos
//     a ~26% do topo do quadro nas três fotos.
//  2. White-balance: amostra a parede (canto superior esquerdo) de cada foto e
//     converge todas para o tom médio, unificando o fundo.
//  3. Exporta WebP 880px (cards renderizam <=394px; cobre retina 2x).
//
// Rodar: node scripts/process-team-photos.mjs
// (sharp vem junto com o Next — já está em node_modules)
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sharp = createRequire(path.join(ROOT, 'package.json'))('sharp');
const DIR = path.join(ROOT, 'public', 'assets', 'team');

// Coordenadas em px da imagem orientada (1536x2048). w define o zoom;
// altura do crop = w / (4/4.2). top posiciona os olhos a ~26% do quadro.
const PHOTOS = [
  { src: 'mv_giovana_rezende.JPEG', out: 'giovana-rezende.webp', left: 35, top: 436, w: 1330 },
  { src: 'mv_natalia_tratch.JPEG', out: 'natalia-tratch.webp', left: 40, top: 360, w: 1440 },
  { src: 'mv_marcela_vieira.JPEG', out: 'marcela-vieira.webp', left: 0, top: 425, w: 1536 },
];

const OUT_W = 880;
const WALL_SAMPLE = { left: 80, top: 80, width: 300, height: 300 }; // parede pura nas 3 fotos
const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

const means = {};
for (const p of PHOTOS) {
  const stats = await sharp(path.join(DIR, p.src)).rotate().extract(WALL_SAMPLE).stats();
  means[p.src] = stats.channels.slice(0, 3).map((c) => c.mean);
}
const target = [0, 1, 2].map((i) => PHOTOS.reduce((s, p) => s + means[p.src][i], 0) / PHOTOS.length);

for (const p of PHOTOS) {
  const mult = [0, 1, 2].map((i) => clamp(target[i] / means[p.src][i], 0.92, 1.1));
  const cropH = Math.round(p.w / (4 / 4.2));
  const info = await sharp(path.join(DIR, p.src))
    .rotate()
    .extract({ left: p.left, top: p.top, width: p.w, height: cropH })
    .recomb([
      [mult[0], 0, 0],
      [0, mult[1], 0],
      [0, 0, mult[2]],
    ])
    .resize(OUT_W)
    .webp({ quality: 82 })
    .toFile(path.join(DIR, p.out));
  console.log(p.out, `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(0)}KB`);
}
