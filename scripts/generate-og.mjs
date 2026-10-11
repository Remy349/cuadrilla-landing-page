// Renders public/og.png (1200×630) from an inline SVG using sharp.
// Oswald is loaded through a temporary fontconfig file pointing at @fontsource/oswald.
import { mkdtempSync, writeFileSync, readFileSync, statSync } from 'node:fs';
import { inflateSync } from 'node:zlib';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const fontDir = mkdtempSync(join(tmpdir(), 'cuadrilla-og-'));
/** Unpacks a WOFF 1.0 file into a plain TTF/OTF buffer that FreeType can always read. */
function woffToSfnt(woff) {
  const numTables = woff.readUInt16BE(12);
  const tables = [];
  for (let i = 0; i < numTables; i++) {
    const at = 44 + i * 20;
    const offset = woff.readUInt32BE(at + 4);
    const compLength = woff.readUInt32BE(at + 8);
    const origLength = woff.readUInt32BE(at + 12);
    const raw = woff.subarray(offset, offset + compLength);
    tables.push({
      tag: woff.subarray(at, at + 4),
      checksum: woff.readUInt32BE(at + 16),
      data: compLength < origLength ? inflateSync(raw) : raw,
    });
  }
  const pow = 2 ** Math.floor(Math.log2(numTables));
  const header = Buffer.alloc(12 + numTables * 16);
  woff.copy(header, 0, 4, 8); // sfnt flavor
  header.writeUInt16BE(numTables, 4);
  header.writeUInt16BE(pow * 16, 6);
  header.writeUInt16BE(Math.log2(pow), 8);
  header.writeUInt16BE(numTables * 16 - pow * 16, 10);
  const chunks = [header];
  let offset = header.length;
  tables.forEach((t, i) => {
    const rec = 12 + i * 16;
    t.tag.copy(header, rec);
    header.writeUInt32BE(t.checksum, rec + 4);
    header.writeUInt32BE(offset, rec + 8);
    header.writeUInt32BE(t.data.length, rec + 12);
    const padded = Buffer.alloc(Math.ceil(t.data.length / 4) * 4);
    t.data.copy(padded);
    chunks.push(padded);
    offset += padded.length;
  });
  return Buffer.concat(chunks);
}

// The variable package ships WOFF2 only; the static @fontsource/oswald WOFF files are easy to unpack.
for (const weight of [400, 700]) {
  const woff = readFileSync(join(root, `node_modules/@fontsource/oswald/files/oswald-latin-${weight}-normal.woff`));
  writeFileSync(join(fontDir, `oswald-${weight}.ttf`), woffToSfnt(woff));
}
const fcFile = join(fontDir, 'fonts.conf');
writeFileSync(
  fcFile,
  `<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig><dir>${fontDir}</dir><cachedir>${fontDir}/cache</cachedir></fontconfig>`,
);
process.env.FONTCONFIG_FILE = fcFile;

const { default: sharp } = await import('sharp');
const { VERSION } = await import('../src/data/site.ts').catch(() => ({ VERSION: '' }));

const stripes = Array.from({ length: 70 }, (_, i) => `<path d="M${i * 24 - 20} 630 l20 -20 h12 l-20 20z" fill="#E0A526"/>`).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0V40" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#0B0B0C"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <g transform="translate(80 88)">
    <rect width="56" height="56" rx="10" fill="#E0A526"/>
    <path d="M38.5 15.75h-14.9a7.9 7.9 0 0 0-7.9 7.9v8.7a7.9 7.9 0 0 0 7.9 7.9h14.9" fill="none" stroke="#0B0B0C" stroke-width="7" transform="translate(0 0)"/>
    <text x="80" y="44" font-family="Oswald" font-weight="700" font-size="44" letter-spacing="7" fill="#F2F0EA">CUADRILLA</text>
  </g>
  <text font-family="Oswald" font-weight="700" font-size="84" fill="#F2F0EA" letter-spacing="-0.5">
    <tspan x="80" y="290">YOUR AI CODING AGENT,</tspan>
    <tspan x="80" y="385">ORGANIZED LIKE A REAL</tspan>
    <tspan x="80" y="480" fill="#E0A526">ENGINEERING TEAM.</tspan>
  </text>
  <text x="80" y="550" font-family="Oswald" font-weight="400" font-size="28" letter-spacing="1" fill="#A1A1AA">Orchestrator + 7 specialists for OpenCode · MIT${VERSION ? ' · ' + VERSION : ''}</text>
  <g transform="translate(0 0)">${stripes}</g>
</svg>`;

const out = join(root, 'public/og.png');
await sharp(Buffer.from(svg)).png({ palette: true, quality: 90, compressionLevel: 9 }).toFile(out);
console.log(`wrote ${out} (${Math.round(statSync(out).size / 1024)} KB)`);
