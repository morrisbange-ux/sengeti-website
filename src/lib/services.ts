/** Icon for each service id in the language files. */
export const serviceIcons = {
  'process-automation': 'bolt',
  workflow: 'flow',
  reporting: 'chart',
  integration: 'plug',
  'custom-software': 'code',
  advice: 'compass',
} as const;

export const serviceIcon = (id: string) => serviceIcons[id as keyof typeof serviceIcons] ?? 'bolt';

/** Services that have a page of their own. */
const servicePages: Record<string, string> = {
  'process-automation': '/automation',
  'custom-software': '/software',
};

/** Where a service card links to: its own page, or its place on the Services page. */
export const servicePage = (id: string) => servicePages[id];
