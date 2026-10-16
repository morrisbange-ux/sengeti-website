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
