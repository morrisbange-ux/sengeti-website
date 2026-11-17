// Makes a share picture (1200×630 PNG) for every page after the build, so links
// shared on WhatsApp, Facebook or LinkedIn show a branded card with the page title.
// BaseLayout points og:image at /og/<page>.png; this writes those files.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import sharp from 'sharp';

const root = fileURLToPath(new URL('..', import.meta.url));
const font = (w) => fs.readFile(path.join(root, `node_modules/@fontsource/poppins/files/poppins-latin-${w}-normal.woff`));

/** Same rule BaseLayout uses: "fr/clients" for /fr/clients/, "index" for the home page. */
export const ogKey = (dir) => dir.replace(/^\/+|\/+$/g, '') || 'index';

const decode = (s) =>
  s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'");

const meta = (html, re) => {
  const m = html.match(re);
  return m ? decode(m[1].trim()) : '';
};

async function htmlFiles(dir, base = dir) {
  const out = [];
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== '_astro' && e.name !== 'og') out.push(...(await htmlFiles(p, base)));
    } else if (e.name === 'index.html') out.push(path.relative(base, dir));
  }
  return out;
}

const el = (type, style, children) => ({
  type,
  props: { style, children: Array.isArray(children) ? children.filter(Boolean) : children },
});

function card({ title, description, url, logo, editions }) {
  const size = title.length > 60 ? 50 : title.length > 38 ? 58 : 68;
  return el(
    'div',
    {
      // Satori adds padding on top of width and height, so these are the inner size.
      width: 1200 - 144,
      height: 630 - 112,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '56px 72px',
      backgroundColor: '#0b0b0c',
      backgroundImage:
        'radial-gradient(circle at 92% 8%, rgba(255,49,48,0.55), rgba(255,49,48,0) 46%), radial-gradient(circle at 0% 110%, rgba(255,49,48,0.28), rgba(255,49,48,0) 50%)',
      color: '#fff',
      fontFamily: 'Poppins',
    },
    [
      { type: 'img', props: { src: logo, height: 64, style: { height: 64 } } },
      el('div', { display: 'flex', flexDirection: 'column' }, [
        el('div', { display: 'flex', fontSize: size, fontWeight: 700, lineHeight: 1.12, letterSpacing: -1.5, maxWidth: 1000 }, title),
        description
          ? el(
              'div',
              { display: 'flex', marginTop: 24, fontSize: 26, fontWeight: 500, lineHeight: 1.4, color: 'rgba(255,255,255,0.72)', maxWidth: 960 },
              description.length > 120 ? description.slice(0, 117).replace(/\s+\S*$/, '') + '…' : description,
            )
          : null,
      ]),
      el('div', { display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 24, fontWeight: 600 }, [
        el('div', { display: 'flex', alignItems: 'center' }, [
          el('div', { width: 44, height: 6, borderRadius: 3, backgroundColor: '#ff3130', marginRight: 18 }, ''),
          el('div', { display: 'flex', color: 'rgba(255,255,255,0.85)' }, url),
        ]),
        editions
          ? el(
              'div',
              { display: 'flex' },
              [
                ['Campus', '#ff3130'],
                ['Senior', '#ff7a3d'],
                ['Junior', '#ffb020'],
              ].map(([n, c]) =>
                el('div', { display: 'flex', alignItems: 'center', marginLeft: 24, color: 'rgba(255,255,255,0.85)' }, [
                  el('div', { width: 14, height: 14, borderRadius: 7, backgroundColor: c, marginRight: 10 }, ''),
                  n,
                ]),
              ),
            )
          : null,
      ]),
    ],
  );
}

export default function ogImages() {
  return {
    name: 'og-images',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const fonts = [
          { name: 'Poppins', data: await font(500), weight: 500 },
          { name: 'Poppins', data: await font(700), weight: 700 },
        ];
        const logoPng = await fs.readFile(path.join(root, 'src/assets/brand/sengeti-logo-white.png'));
        const logo = `data:image/png;base64,${(await sharp(logoPng).resize({ height: 128 }).png().toBuffer()).toString('base64')}`;
        const pages = await htmlFiles(out);
        let made = 0;
        await Promise.all(
          pages.map(async (rel) => {
            const html = await fs.readFile(path.join(out, rel, 'index.html'), 'utf8');
            if (/http-equiv="refresh"/i.test(html) || /name="robots" content="noindex"/.test(html)) return;
            let title = meta(html, /<title>([^<]*)<\/title>/);
            title = title.replace(/^Sengeti Technologies \| /, '').replace(/ \| Sengeti Technologies$/, '');
            const description = meta(html, /<meta name="description" content="([^"]*)"/);
            const pagePath = '/' + rel.split(path.sep).join('/');
            const editions = /sengetiedu|clients/.test(pagePath);
            const svg = await satori(card({ title, description, url: 'sengetitechnologies.com', logo, editions }), { width: 1200, height: 630, fonts });
            const file = path.join(out, 'og', `${ogKey(rel.split(path.sep).join('/'))}.png`);
            await fs.mkdir(path.dirname(file), { recursive: true });
            await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true, quality: 90 }).toFile(file);
            made++;
          }),
        );
        logger.info(`${made} share images written to /og/`);
      },
    },
  };
}
