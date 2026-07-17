// Genera los iconos PWA (PNG + favicon.ico) a partir del logo oficial de ExamMaster.
// Uso: node scripts/generate-icons.mjs
import { mkdirSync, writeFileSync } from 'fs';

import sharp from 'sharp';

const BACKGROUND = '#042C53';

const svg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="512" height="512" rx="112" fill="${BACKGROUND}"/>
  <rect x="176" y="146" width="160" height="220" rx="16" fill="none" stroke="#FFFFFF" stroke-width="16"/>
  <line x1="204" y1="196" x2="308" y2="196" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
  <line x1="204" y1="228" x2="308" y2="228" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
  <path d="M256 146 L256 264 L280 240 L304 264 L304 146 Z" fill="#5DCAA5"/>
</svg>`;

// Maskable: el contenido debe caber en el 80% central (safe zone), con el
// fondo a sangre completa (sin esquinas redondeadas: el SO aplica su propia máscara).
const maskable = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${BACKGROUND}"/>
  <g transform="translate(51.2 51.2) scale(0.8)">
    <rect x="176" y="146" width="160" height="220" rx="16" fill="none" stroke="#FFFFFF" stroke-width="16"/>
    <line x1="204" y1="196" x2="308" y2="196" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
    <line x1="204" y1="228" x2="308" y2="228" stroke="#FFFFFF" stroke-width="10" stroke-linecap="round"/>
    <path d="M256 146 L256 264 L280 240 L304 264 L304 146 Z" fill="#5DCAA5"/>
  </g>
</svg>`;

mkdirSync('public/icons', { recursive: true });

const buffer = Buffer.from(svg);
await sharp(buffer).resize(192, 192).png().toFile('public/icons/icon-192.png');
await sharp(buffer).resize(512, 512).png().toFile('public/icons/icon-512.png');
await sharp(Buffer.from(maskable))
  .resize(512, 512)
  .png()
  .toFile('public/icons/icon-maskable-512.png');
await sharp(buffer).resize(180, 180).png().toFile('public/icons/apple-touch-icon.png');

// favicon.ico: contenedor ICO mínimo con una única imagen PNG embebida (soportado
// desde Windows Vista / todos los navegadores modernos).
const faviconPng = await sharp(buffer).resize(48, 48).png().toBuffer();
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // image count

const entry = Buffer.alloc(16);
entry.writeUInt8(48, 0); // width
entry.writeUInt8(48, 1); // height
entry.writeUInt8(0, 2); // color count
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // color planes
entry.writeUInt16LE(32, 6); // bits per pixel
entry.writeUInt32LE(faviconPng.length, 8); // image data size
entry.writeUInt32LE(22, 12); // offset (6 + 16)

writeFileSync('src/app/favicon.ico', Buffer.concat([header, entry, faviconPng]));

console.log('Iconos generados en public/icons/ y src/app/favicon.ico');
