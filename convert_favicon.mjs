import sharp from 'sharp';
import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const svgPath = path.join(__dirname, '..', 'logo_esup_sante.svg');
const outPath = path.join(__dirname, 'src', 'images', 'icon.png');
const outMaskablePath = path.join(__dirname, 'src', 'images', 'icon-maskable.png');

const svgBuffer = readFileSync(svgPath);

await sharp(svgBuffer)
  .resize(512, 512)
  .png()
  .toFile(outPath);

await sharp(svgBuffer)
  .resize(512, 512)
  .png()
  .toFile(outMaskablePath);

console.log('✅ favicon icon.png et icon-maskable.png générés avec succès !');
