/**
 * Figures used by the project cost estimator (/estimate).
 *
 * PLACEHOLDER FIGURES: every price and week range below is a first guess for
 * the Zimbabwe / Southern Africa market. The owner must review and confirm
 * them before the site goes live. Change them here and the estimator updates.
 *
 * All prices are in US dollars. Ranges are [low, high].
 *
 * How an estimate is worked out:
 *   1. Start with the project type's base price and weeks.
 *   2. Multiply the price by the chosen size's `priceFactor`, and the weeks
 *      by its `weeksFactor`.
 *   3. Add each optional feature's price and weeks, also multiplied by the
 *      size factors (a feature costs more in a bigger system).
 *   4. Round prices to `roundTo` and weeks to whole weeks.
 */

export type Range = readonly [number, number];

export const pricing = {
  currency: 'USD',
  /** Prices are rounded to this amount, so estimates never look falsely exact. */
  roundTo: 50,

  projectTypes: {
    website: { price: [500, 1200], weeks: [1, 3] },
    webapp: { price: [3000, 6000], weeks: [6, 10] },
    mobile: { price: [3500, 7000], weeks: [6, 12] },
    automation: { price: [1500, 4000], weeks: [3, 6] },
    ai: { price: [2500, 6000], weeks: [4, 8] },
    erp: { price: [6000, 15000], weeks: [10, 20] },
  },

  sizes: {
    small: { priceFactor: 1, weeksFactor: 1 },
    medium: { priceFactor: 1.7, weeksFactor: 1.5 },
    large: { priceFactor: 2.8, weeksFactor: 2.2 },
  },

  features: {
    accounts: { price: [300, 700], weeks: [1, 1] },
    payments: { price: [400, 1000], weeks: [1, 2] },
    notifications: { price: [250, 600], weeks: [0, 1] },
    reports: { price: [400, 1200], weeks: [1, 2] },
    offline: { price: [600, 1500], weeks: [1, 3] },
    languages: { price: [200, 500], weeks: [0, 1] },
    integrations: { price: [500, 1500], weeks: [1, 3] },
  },
} as const satisfies {
  currency: string;
  roundTo: number;
  projectTypes: Record<string, { price: Range; weeks: Range }>;
  sizes: Record<string, { priceFactor: number; weeksFactor: number }>;
  features: Record<string, { price: Range; weeks: Range }>;
};

export type ProjectType = keyof typeof pricing.projectTypes;
export type ProjectSize = keyof typeof pricing.sizes;
export type ProjectFeature = keyof typeof pricing.features;

export const projectTypeKeys = Object.keys(pricing.projectTypes) as ProjectType[];
export const projectSizeKeys = Object.keys(pricing.sizes) as ProjectSize[];
export const projectFeatureKeys = Object.keys(pricing.features) as ProjectFeature[];

/** Works out the price and week ranges for a set of choices. Used on the server and in the browser. */
export function estimate(type: ProjectType, size: ProjectSize, features: readonly ProjectFeature[]) {
  const base = pricing.projectTypes[type];
  const s = pricing.sizes[size];
  let [pLo, pHi] = base.price;
  let [wLo, wHi] = base.weeks;
  for (const f of features) {
    const ft = pricing.features[f];
    pLo += ft.price[0];
    pHi += ft.price[1];
    wLo += ft.weeks[0];
    wHi += ft.weeks[1];
  }
  const round = (n: number) => Math.round(n / pricing.roundTo) * pricing.roundTo;
  const weeksLo = Math.max(1, Math.round(wLo * s.weeksFactor));
  return {
    price: [round(pLo * s.priceFactor), round(pHi * s.priceFactor)] as const,
    weeks: [weeksLo, Math.max(weeksLo + 1, Math.round(wHi * s.weeksFactor))] as const,
  };
}
