// Makes the two-page SengetiEdu brochure (A4 PDF) in English, French and Portuguese
// from the same text as the website, so the brochure never says something the site doesn't.
//
//   node --experimental-strip-types scripts/brochure.mjs
//
// Needs Playwright with Chromium (npx playwright install chromium). Writes
// public/sengetiedu-brochure.pdf, -fr.pdf and -pt.pdf. Run it again after changing
// src/i18n/pages/sengetiedu.ts.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';

const root = fileURLToPath(new URL('..', import.meta.url));
const { sengetiEdu } = await import(path.join(root, 'src/i18n/pages/sengetiedu.ts'));
const { site } = await import(path.join(root, 'src/config/site.ts'));

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch {
  ({ chromium } = await import('playwright-core'));
}

const extra = {
  en: {
    scan: 'Scan to book a free demo',
    or: 'or',
    families: 'Three editions. One foundation.',
    pricing: 'Pricing',
  },
  fr: {
    scan: 'Scannez pour réserver une démo gratuite',
    or: 'ou',
    families: 'Trois éditions. Une seule base.',
    pricing: 'Tarifs',
  },
  pt: {
    scan: 'Leia para marcar uma demo grátis',
    or: 'ou',
    families: 'Três edições. Uma só base.',
    pricing: 'Preços',
  },
};

const editionColor = { campus: '#e0201f', senior: '#e8621f', junior: '#d99100' };
const editionName = { campus: 'Sengeti Campus', senior: 'Sengeti Senior', junior: 'Sengeti Junior' };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const dataUri = async (p, type) => `data:${type};base64,${(await fs.readFile(path.join(root, p))).toString('base64')}`;

const logoWhite = await dataUri('src/assets/brand/sengeti-logo-white.png', 'image/png');
const logoDark = await dataUri('src/assets/brand/sengeti-logo-dark.png', 'image/png');
const font = (w) => dataUri(`node_modules/@fontsource/poppins/files/poppins-latin-${w}-normal.woff2`, 'font/woff2');
const fonts = { 500: await font(500), 600: await font(600), 700: await font(700) };

async function page(lang) {
  const s = sengetiEdu[lang];
  const x = extra[lang];
  const prefix = lang === 'en' ? '' : `/${lang}`;
  const demoUrl = `${site.url}${prefix}/school-demo`;
  const qr = await QRCode.toString(demoUrl, { type: 'svg', margin: 0, color: { dark: '#0b0b0c', light: '#ffffff' } });
  const editions = ['campus', 'senior', 'junior'];

  return `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><style>
  ${[500, 600, 700].map((w) => `@font-face{font-family:Poppins;font-weight:${w};src:url(${fonts[w]}) format('woff2')}`).join('')}
  @page { size: A4; margin: 0 }
  * { box-sizing: border-box }
  body { margin: 0; font-family: Poppins, sans-serif; font-weight: 500; color: #1b1b1f; font-size: 9pt; line-height: 1.42 }
  .sheet { width: 210mm; height: 297mm; position: relative; overflow: hidden; page-break-after: always; display: flex; flex-direction: column }
  .hero { flex: none; background: #0b0b0c; color: #fff; padding: 14mm 14mm 12mm; position: relative; overflow: hidden }
  .hero::before { content: ''; position: absolute; width: 140mm; height: 140mm; right: -50mm; top: -70mm; border-radius: 50%;
    background: radial-gradient(circle, rgba(255,49,48,.55), rgba(255,49,48,0) 65%) }
  .hero::after { content: ''; position: absolute; left: 0; right: 0; bottom: 0; height: 1.6mm; background: #ff3130 }
  .hero > * { position: relative }
  .hero img { height: 12mm }
  .eyebrow { text-transform: uppercase; letter-spacing: .14em; font-size: 7.6pt; font-weight: 700; color: #ff3130; margin: 7mm 0 2mm }
  h1 { font-size: 25pt; line-height: 1.08; margin: 0; font-weight: 700; letter-spacing: -.02em; max-width: 150mm }
  h1 span, h2 span { color: #ff3130 }
  .lead { color: rgba(255,255,255,.75); font-size: 10.5pt; max-width: 150mm; margin: 4mm 0 0 }
  .body { padding: 8mm 14mm 0; flex: 1; min-height: 0; display: flex; flex-direction: column; gap: 6mm }
  h2 { font-size: 15pt; margin: 0 0 3.5mm; font-weight: 700; letter-spacing: -.01em; line-height: 1.15 }
  .eds { display: grid; grid-template-columns: repeat(3, 1fr); gap: 4mm }
  .ed { border: 1px solid #e4e4e8; border-top: 1.4mm solid var(--c); border-radius: 3mm; padding: 4mm }
  .ed .range { font-size: 7.4pt; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; color: var(--c) }
  .ed h3 { font-size: 12pt; margin: 1mm 0 .5mm }
  .ed .aud { font-weight: 600; margin: 0 0 2mm }
  .ed p { margin: 0 0 2mm; color: #55555c }
  .ed ul { margin: 0; padding-left: 4mm; color: #33333a }
  .ed li { margin: .6mm 0 }
  .core { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3.5mm 5mm }
  .core div { padding-left: 3.5mm; border-left: .8mm solid #ff3130 }
  .core b, .two b { display: block; font-weight: 700; font-size: 10pt; margin-bottom: .6mm }
  .core span, .two span { color: #55555c }
  .foot { flex: none; margin-top: auto; padding: 5mm 14mm; display: flex; justify-content: space-between; align-items: center; font-size: 8pt; color: #66666d; border-top: 1px solid #ececf0 }
  .foot img { height: 7mm }
  .two { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm 8mm }
  .weeks { display: grid; grid-template-columns: repeat(4, 1fr); gap: 3mm; counter-reset: w }
  .week { background: #f5f5f7; border-radius: 3mm; padding: 3.5mm 3mm; position: relative }
  .week .lab { font-size: 7.4pt; font-weight: 700; color: #d11f1f; text-transform: uppercase; letter-spacing: .08em }
  .week b { display: block; margin: .8mm 0 1mm; font-size: 10pt }
  .week span { color: #55555c; font-size: 8.2pt }
  .boxes { display: grid; grid-template-columns: 1fr 1fr; gap: 4mm }
  .box { border: 1px solid #e4e4e8; border-radius: 3mm; padding: 4.5mm }
  .box b { font-size: 11pt; display: block; margin-bottom: 1mm }
  .box span { color: #55555c }
  .cta { flex: none; background: #0b0b0c; color: #fff; border-radius: 4mm; padding: 6mm 7mm; display: grid; grid-template-columns: 1fr 34mm; gap: 7mm; align-items: center; position: relative; overflow: hidden }
  .cta::before { content: ''; position: absolute; width: 110mm; height: 110mm; left: -40mm; bottom: -70mm; border-radius: 50%; background: radial-gradient(circle, rgba(255,49,48,.45), rgba(255,49,48,0) 65%) }
  .cta > * { position: relative }
  .cta h2 { font-size: 17pt; margin-bottom: 2mm }
  .cta p { color: rgba(255,255,255,.75); margin: 0 0 4mm }
  .contact { display: flex; flex-wrap: wrap; gap: 2mm 6mm; font-weight: 600 }
  .contact em { font-style: normal; color: #ff3130 }
  .qr { background: #fff; border-radius: 3mm; padding: 3mm; text-align: center }
  .qr svg { width: 100%; height: auto; display: block }
  .qr small { display: block; color: #0b0b0c; font-size: 6.6pt; font-weight: 600; margin-top: 1.5mm; line-height: 1.25 }
  </style></head><body>

  <section class="sheet">
    <header class="hero">
      <img src="${logoWhite}" alt="Sengeti Technologies">
      <div class="eyebrow">${esc(s.eyebrow)}</div>
      <h1>${esc(s.heading)} <span>${esc(s.headingAccent)}</span></h1>
      <p class="lead">${esc(s.lead)}</p>
    </header>
    <div class="body">
      <div>
        <h2>${esc(x.families)}</h2>
        <div class="eds">
          ${editions
            .map(
              (e) => `<div class="ed" style="--c:${editionColor[e]}">
              <div class="range">${esc(s.editions[e].range)}</div>
              <h3>${editionName[e]}</h3>
              <p class="aud">${esc(s.editions[e].audience)}</p>
              <p>${esc(s.editions[e].text)}</p>
              <ul>${s.editions[e].groups
                .slice(0, 3)
                .map((g) => `<li>${esc(g.items[0])}</li>`)
                .join('')}</ul>
            </div>`,
            )
            .join('')}
        </div>
      </div>
      <div>
        <h2>${esc(s.coreHeading)}</h2>
        <div class="core">${s.core.map((c) => `<div><b>${esc(c.title)}</b><span>${esc(c.text)}</span></div>`).join('')}</div>
      </div>
    </div>
    <footer class="foot"><img src="${logoDark}" alt=""><span>${esc(site.url.replace('https://', ''))}${prefix}/products/sengetiedu</span></footer>
  </section>

  <section class="sheet">
    <div class="body" style="padding-top:10mm;gap:4.5mm">
      <div>
        <h2>${esc(s.brandHeading)} <span>${esc(s.brandAccent)}</span></h2>
        <div class="core">${s.brand.map((c) => `<div><b>${esc(c.title)}</b><span>${esc(c.text)}</span></div>`).join('')}</div>
      </div>
      <div>
        <h2>${esc(s.safeEyebrow)}</h2>
        <div class="two">${s.safe.map((c) => `<div><b>${esc(c.title)}</b><span>${esc(c.text)}</span></div>`).join('')}</div>
      </div>
      <div>
        <h2>${esc(s.startHeading)} <span>${esc(s.startAccent)}</span></h2>
        <div class="weeks">${s.weeks.map((w) => `<div class="week"><span class="lab">${esc(w.label)}</span><b>${esc(w.title)}</b><span>${esc(w.text)}</span></div>`).join('')}</div>
      </div>
      <div class="boxes">
        <div class="box"><b>${esc(s.pricingTitle)}</b><span>${esc(s.pricingText)}</span></div>
        <div class="box"><b>${esc(s.supportTitle)}</b><span>${esc(s.supportText)}</span></div>
      </div>
      <div class="cta">
        <div>
          <h2>${esc(s.ctaHeading)}</h2>
          <p>${esc(s.ctaText)}</p>
          <div class="contact"><span><em>WhatsApp</em> ${esc(site.phone)}</span><span><em>Email</em> ${esc(site.email)}</span></div>
        </div>
        <div class="qr">${qr}<small>${esc(x.scan)}</small></div>
      </div>
    </div>
    <footer class="foot"><img src="${logoDark}" alt=""><span>© ${new Date().getFullYear()} ${esc(site.name)}</span></footer>
  </section>
  </body></html>`;
}

const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
);
for (const lang of ['en', 'fr', 'pt']) {
  const tab = await browser.newPage();
  await tab.setContent(await page(lang), { waitUntil: 'load' });
  await tab.evaluate(() => document.fonts.ready);
  // Warn when a page's content is taller than A4, since it would be cut off.
  const over = await tab.evaluate(() =>
    [...document.querySelectorAll('.body')].map((b) => b.scrollHeight - b.clientHeight).filter((d) => d > 1),
  );
  if (over.length) console.warn(`${lang}: content too tall by ${over.join(', ')}px`);
  const file = path.join(root, 'public', `sengetiedu-brochure${lang === 'en' ? '' : `-${lang}`}.pdf`);
  await tab.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true });
  if (process.env.BROCHURE_PREVIEW) await tab.screenshot({ path: `${process.env.BROCHURE_PREVIEW}-${lang}.png`, fullPage: true });
  console.log('wrote', path.relative(root, file));
  await tab.close();
}
await browser.close();
