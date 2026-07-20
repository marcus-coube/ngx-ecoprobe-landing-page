// Pré-processamento das fotos de conteúdo (public/assets/banners/*.JPEG -> *.webp)
//
// As fotos originais são verticais; cada slot no site é horizontal. Aqui cada
// foto recebe um crop de banda no aspect exato do seu slot (ver componente),
// ajuste leve de cor quando necessário e export WebP 1200px (slots renderizam
// <=610px CSS; cobre retina 2x).
//
// Rodar: node scripts/process-banner-photos.mjs
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import path from 'path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sharp = createRequire(path.join(ROOT, 'package.json'))('sharp');
const DIR = path.join(ROOT, 'public', 'assets', 'banners');

// Coordenadas em px da imagem orientada. aspect = do slot no componente.
const PHOTOS = [
  // comparison.tsx — aspect 16/10
  { src: 'exam_on_the_floor.JPEG', out: 'exam-on-the-floor.webp', left: 0, top: 625, w: 1536, aspect: 16 / 10 },
  // about.tsx — aspect 4/3.4
  { src: 'equipment.JPEG', out: 'equipment.webp', left: 0, top: 614, w: 1536, aspect: 4 / 3.4 },
  // how-it-works.tsx — aspect 16/10 (foto muito escura: leve lift de brilho)
  { src: 'cat_home.JPEG', out: 'cat-home.webp', left: 0, top: 640, w: 1330, aspect: 16 / 10, brightness: 1.22, saturation: 0.88 },
  // audiences.tsx (clínicas) — aspect 4/3.2
  { src: 'equipment_2.JPEG', out: 'equipment-2.webp', left: 0, top: 330, w: 1536, aspect: 4 / 3.2, saturation: 0.97 },
  // audiences.tsx (tutores) — aspect 4/3.2 (luz de exame azulada: leve lift)
  { src: 'dog-home.JPEG', out: 'dog-home.webp', left: 0, top: 400, w: 1536, aspect: 4 / 3.2, brightness: 1.06, saturation: 0.94 },
];

const OUT_W = 1200;

for (const p of PHOTOS) {
  const cropH = Math.round(p.w / p.aspect);
  let img = sharp(path.join(DIR, p.src))
    .rotate()
    .extract({ left: p.left, top: p.top, width: p.w, height: cropH });
  if (p.brightness || p.saturation) {
    img = img.modulate({ brightness: p.brightness ?? 1, saturation: p.saturation ?? 1 });
  }
  const info = await img.resize(OUT_W).webp({ quality: 80 }).toFile(path.join(DIR, p.out));
  console.log(p.out, `${info.width}x${info.height}`, `${(info.size / 1024).toFixed(0)}KB`);
}
