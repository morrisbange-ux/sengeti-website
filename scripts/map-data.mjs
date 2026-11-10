// Builds src/lib/map-data.ts: the outlines for the clients map (every African country,
// plus faint land around Africa), already projected and simplified so the page stays light.
// Country outlines are Natural Earth (public domain) via the world-atlas package.
//
//   node scripts/map-data.mjs
//
// Only needed if the map should cover more of the world; the output is committed.
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { feature } from 'topojson-client';

const require = createRequire(import.meta.url);
const topo50 = require('world-atlas/countries-50m.json');
const topo110 = require('world-atlas/countries-110m.json');

// Must match src/lib/map.ts.
const K = 100;
const COS = Math.cos((15 * Math.PI) / 180);
const P = ([lng, lat]) => [Math.round(lng * K * COS), Math.round(-lat * K)];

// ISO numeric code -> two-letter code, for African countries and island states.
const africa = {
  '012': 'DZ', '024': 'AO', '204': 'BJ', '072': 'BW', '854': 'BF', '108': 'BI', '132': 'CV', '120': 'CM',
  '140': 'CF', '148': 'TD', '174': 'KM', '178': 'CG', '180': 'CD', '384': 'CI', '262': 'DJ', '818': 'EG',
  '226': 'GQ', '232': 'ER', '748': 'SZ', '231': 'ET', '266': 'GA', '270': 'GM', '288': 'GH', '324': 'GN',
  '624': 'GW', '404': 'KE', '426': 'LS', '430': 'LR', '434': 'LY', '450': 'MG', '454': 'MW', '466': 'ML',
  '478': 'MR', '480': 'MU', '504': 'MA', '508': 'MZ', '516': 'NA', '562': 'NE', '566': 'NG', '646': 'RW',
  '678': 'ST', '686': 'SN', '690': 'SC', '694': 'SL', '706': 'SO', '728': 'SS', '729': 'SD', '834': 'TZ',
  '768': 'TG', '788': 'TN', '800': 'UG', '732': 'EH', '894': 'ZM', '716': 'ZW', '710': 'ZA',
};

/** Drops points closer than `tol` degrees to the last kept one. */
function simplify(ring, tol) {
  const out = [ring[0]];
  for (let i = 1; i < ring.length - 1; i++) {
    const [x, y] = ring[i];
    const [px, py] = out[out.length - 1];
    if (Math.hypot(x - px, y - py) >= tol) out.push(ring[i]);
  }
  out.push(ring[ring.length - 1]);
  return out;
}

/** SVG path with relative moves, which keeps the numbers short. */
function toPath(rings) {
  let d = '';
  for (const ring of rings) {
    const pts = ring.map(P);
    let [lx, ly] = pts[0];
    d += `M${lx} ${ly}`;
    let seg = '';
    for (const [x, y] of pts.slice(1)) {
      const dx = x - lx;
      const dy = y - ly;
      if (!dx && !dy) continue;
      seg += `${dx}${dy < 0 ? '' : ' '}${dy}`.replace(/^(\d)/, ' $1');
      lx = x;
      ly = y;
    }
    d += `l${seg.trim()}z`;
  }
  return d;
}

const ringArea = (r) => Math.abs(r.reduce((s, [x, y], i) => { const [nx, ny] = r[(i + 1) % r.length]; return s + x * ny - nx * y; }, 0) / 2);

function inside([x, y], ring) {
  let hit = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

function edgeDist([x, y], ring) {
  let best = Infinity;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [ax, ay] = ring[j];
    const [bx, by] = ring[i];
    const dx = bx - ax;
    const dy = by - ay;
    const t = Math.max(0, Math.min(1, ((x - ax) * dx + (y - ay) * dy) / (dx * dx + dy * dy || 1)));
    best = Math.min(best, Math.hypot(x - ax - t * dx, y - ay - t * dy));
  }
  return best;
}

/** The point inside the biggest ring furthest from its edges: where the name fits best. */
function labelPoint(rings) {
  const ring = rings.map((r) => r.map(P)).sort((a, b) => ringArea(b) - ringArea(a))[0];
  const xs = ring.map((p) => p[0]);
  const ys = ring.map((p) => p[1]);
  const [x0, x1, y0, y1] = [Math.min(...xs), Math.max(...xs), Math.min(...ys), Math.max(...ys)];
  let best = [(x0 + x1) / 2, (y0 + y1) / 2];
  let bestD = -1;
  const n = 40;
  for (let i = 1; i < n; i++)
    for (let j = 1; j < n; j++) {
      const p = [x0 + ((x1 - x0) * i) / n, y0 + ((y1 - y0) * j) / n];
      if (!inside(p, ring)) continue;
      const d = edgeDist(p, ring);
      if (d > bestD) [best, bestD] = [p, d];
    }
  return best.map(Math.round);
}

const rings = (geom) => (geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates).map((poly) => poly[0]);

const countries = [];
let somaliland = null;
for (const f of feature(topo50, topo50.objects.countries).features) {
  const code = africa[f.id];
  if (!code && f.properties.name !== 'Somaliland') continue;
  // Southern and eastern Africa, where clients are, keep more detail.
  const raw = rings(f.geometry);
  const south = raw.flat().some(([lng, lat]) => lat < -5 && lng > 10);
  const tol = south ? 0.03 : 0.15;
  const simple = raw.map((r) => simplify(r, tol)).filter((r) => r.length > 3);
  if (!code) {
    somaliland = simple;
    continue;
  }
  const all = raw.flat().map(P);
  const xs = all.map((p) => p[0]);
  const ys = all.map((p) => p[1]);
  countries.push({ code, rings: simple, raw, bbox: [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)] });
}
// Natural Earth draws Somaliland separately; the map shows it as part of Somalia.
const so = countries.find((c) => c.code === 'SO');
if (so && somaliland) so.rings.push(...somaliland);

// Land around Africa (southern Europe, the Middle East), drawn faintly with no borders.
const around = [];
for (const f of feature(topo110, topo110.objects.countries).features) {
  if (africa[f.id] || f.properties.name === 'Somaliland') continue;
  for (const r of rings(f.geometry)) {
    if (r.every(([lng, lat]) => lng < -30 || lng > 70 || lat < -45 || lat > 45)) continue;
    around.push(simplify(r, 0.15));
  }
}

const out = `// Generated by scripts/map-data.mjs from Natural Earth (public domain). Do not edit by hand.
// Units: 1 degree of latitude = ${K}. See project() in map.ts.

export interface CountryShape {
  /** Two-letter country code. */
  code: string;
  d: string;
  /** Where the country name sits. */
  label: [number, number];
  /** [minX, minY, maxX, maxY] */
  bbox: [number, number, number, number];
}

export const countries: CountryShape[] = ${JSON.stringify(
  countries.map((c) => ({ code: c.code, d: toPath(c.rings), label: labelPoint(c.raw), bbox: c.bbox })),
  null,
  0,
)};

/** Land around Africa, without borders. */
export const aroundAfrica = ${JSON.stringify(toPath(around))};
`;
fs.writeFileSync(new URL('../src/lib/map-data.ts', import.meta.url), out);
console.log('countries', countries.length, 'bytes', out.length);
