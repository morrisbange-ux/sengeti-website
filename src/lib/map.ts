/**
 * The clients map: every African country (outlines in map-data.ts, from Natural Earth),
 * drawn with an equirectangular projection. Good enough at country scale, and it keeps
 * the maths simple enough to zoom and pan in a few lines of script.
 */

/** Map units per degree of latitude. Must match scripts/map-data.mjs. */
export const K = 100;
const COS = Math.cos((15 * Math.PI) / 180);

/** Turns a latitude and longitude into a point on the map drawing. */
export const project = (lat: number, lng: number) => ({ x: lng * K * COS, y: -lat * K });

/** How far the map can be panned: Africa and a little sea around it. */
export const BOUNDS = (() => {
  const nw = project(39, -26);
  const se = project(-38, 62);
  return { x0: nw.x, y0: nw.y, x1: se.x, y1: se.y };
})();

/**
 * Places shown for orientation. Tier 1 shows first (capitals), tier 3 only when zoomed in.
 * Labels that would overlap a pin or another label are skipped.
 */
export const places: { name: string; lat: number; lng: number; tier: 1 | 2 | 3; capital?: boolean }[] = [
  // Zimbabwe
  { name: 'Harare', lat: -17.8292, lng: 31.0522, tier: 1, capital: true },
  { name: 'Bulawayo', lat: -20.1325, lng: 28.6265, tier: 2 },
  { name: 'Mutare', lat: -18.9707, lng: 32.6709, tier: 2 },
  { name: 'Gweru', lat: -19.45, lng: 29.8167, tier: 3 },
  { name: 'Masvingo', lat: -20.0744, lng: 30.8328, tier: 3 },
  { name: 'Victoria Falls', lat: -17.9243, lng: 25.8572, tier: 3 },
  { name: 'Chinhoyi', lat: -17.3667, lng: 30.2, tier: 3 },
  { name: 'Kwekwe', lat: -18.9281, lng: 29.8149, tier: 3 },
  { name: 'Rusape', lat: -18.5278, lng: 32.1281, tier: 3 },
  { name: 'Chipinge', lat: -20.1883, lng: 32.6236, tier: 3 },
  { name: 'Nyanga', lat: -18.2167, lng: 32.75, tier: 3 },
  { name: 'Marondera', lat: -18.1853, lng: 31.5519, tier: 3 },
  // Southern and eastern Africa
  { name: 'Lusaka', lat: -15.4167, lng: 28.2833, tier: 1, capital: true },
  { name: 'Maputo', lat: -25.9692, lng: 32.5732, tier: 1, capital: true },
  { name: 'Gaborone', lat: -24.6282, lng: 25.9231, tier: 1, capital: true },
  { name: 'Pretoria', lat: -25.7479, lng: 28.2293, tier: 1, capital: true },
  { name: 'Lilongwe', lat: -13.9626, lng: 33.7741, tier: 1, capital: true },
  { name: 'Windhoek', lat: -22.5609, lng: 17.0658, tier: 1, capital: true },
  { name: 'Nairobi', lat: -1.2921, lng: 36.8219, tier: 1, capital: true },
  { name: 'Dodoma', lat: -6.163, lng: 35.7516, tier: 1, capital: true },
  { name: 'Kampala', lat: 0.3476, lng: 32.5825, tier: 1, capital: true },
  { name: 'Kigali', lat: -1.9441, lng: 30.0619, tier: 1, capital: true },
  { name: 'Luanda', lat: -8.839, lng: 13.2894, tier: 1, capital: true },
  { name: 'Kinshasa', lat: -4.4419, lng: 15.2663, tier: 1, capital: true },
  { name: 'Antananarivo', lat: -18.8792, lng: 47.5079, tier: 1, capital: true },
  { name: 'Addis Ababa', lat: 9.03, lng: 38.74, tier: 1, capital: true },
  { name: 'Abuja', lat: 9.0765, lng: 7.3986, tier: 1, capital: true },
  { name: 'Accra', lat: 5.6037, lng: -0.187, tier: 1, capital: true },
  { name: 'Dakar', lat: 14.7167, lng: -17.4677, tier: 1, capital: true },
  { name: 'Cairo', lat: 30.0444, lng: 31.2357, tier: 1, capital: true },
  { name: 'Johannesburg', lat: -26.2041, lng: 28.0473, tier: 2 },
  { name: 'Cape Town', lat: -33.9249, lng: 18.4241, tier: 2 },
  { name: 'Durban', lat: -29.8587, lng: 31.0218, tier: 2 },
  { name: 'Beira', lat: -19.8436, lng: 34.8389, tier: 2 },
  { name: 'Blantyre', lat: -15.7861, lng: 35.0058, tier: 2 },
  { name: 'Ndola', lat: -12.9587, lng: 28.6366, tier: 2 },
  { name: 'Lubumbashi', lat: -11.6609, lng: 27.4794, tier: 2 },
  { name: 'Dar es Salaam', lat: -6.7924, lng: 39.2083, tier: 2 },
  { name: 'Mombasa', lat: -4.0435, lng: 39.6682, tier: 2 },
  { name: 'Lagos', lat: 6.5244, lng: 3.3792, tier: 2 },
  { name: 'Francistown', lat: -21.17, lng: 27.5079, tier: 3 },
  { name: 'Livingstone', lat: -17.8419, lng: 25.8543, tier: 3 },
  { name: 'Tete', lat: -16.1564, lng: 33.5867, tier: 3 },
  { name: 'Chimoio', lat: -19.1164, lng: 33.4833, tier: 3 },
  { name: 'Polokwane', lat: -23.9045, lng: 29.4689, tier: 3 },
];
