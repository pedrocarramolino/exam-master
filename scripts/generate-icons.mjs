// Genera los iconos PWA (PNG) a partir de un SVG sencillo.
// Uso: node scripts/generate-icons.mjs
import sharp from 'sharp';
import { mkdirSync } from 'fs';

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="96" fill="#1d4ed8"/>
  <rect x="120" y="96" width="272" height="336" rx="24" fill="#ffffff"/>
  <rect x="156" y="150" width="140" height="22" rx="11" fill="#1d4ed8"/>
  <rect x="156" y="200" width="200" height="16" rx="8" fill="#93c5fd"/>
  <rect x="156" y="240" width="200" height="16" rx="8" fill="#93c5fd"/>
  <rect x="156" y="280" width="200" height="16" rx="8" fill="#93c5fd"/>
  <path d="M170 352 l26 30 48 -56" stroke="#16a34a" stroke-width="22" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

mkdirSync('public/icons', { recursive: true });

const buffer = Buffer.from(svg);
await sharp(buffer).resize(192, 192).png().toFile('public/icons/icon-192.png');
await sharp(buffer).resize(512, 512).png().toFile('public/icons/icon-512.png');
// Maskable: el contenido debe caber en el 80% central (safe zone).
const maskable = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="#1d4ed8"/>
  <g transform="translate(51.2 51.2) scale(0.8)">
    <rect x="120" y="96" width="272" height="336" rx="24" fill="#ffffff"/>
    <rect x="156" y="150" width="140" height="22" rx="11" fill="#1d4ed8"/>
    <rect x="156" y="200" width="200" height="16" rx="8" fill="#93c5fd"/>
    <rect x="156" y="240" width="200" height="16" rx="8" fill="#93c5fd"/>
    <rect x="156" y="280" width="200" height="16" rx="8" fill="#93c5fd"/>
    <path d="M170 352 l26 30 48 -56" stroke="#16a34a" stroke-width="22" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>`;
await sharp(Buffer.from(maskable))
  .resize(512, 512)
  .png()
  .toFile('public/icons/icon-maskable-512.png');
await sharp(buffer).resize(180, 180).png().toFile('public/icons/apple-touch-icon.png');

console.log('Iconos generados en public/icons/');
