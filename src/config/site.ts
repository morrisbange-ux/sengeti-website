/**
 * Company details used across the whole site.
 *
 * Values marked PLACEHOLDER must be replaced before the site goes live.
 * Change them here once and every page picks them up.
 */
export const site = {
  name: 'Sengeti Technologies',
  shortName: 'Sengeti',
  // The live address of the website. PLACEHOLDER: confirm the domain.
  url: 'https://sengetitechnologies.com',
  founder: 'Morris N. Bangezhano',
  country: 'Zimbabwe',
  countryCode: 'ZW',

  // PLACEHOLDER: the email address customers see.
  email: 'hello@example.com',
  // PLACEHOLDER: phone number as people should read it, with country code.
  phone: '+263 77 000 0000',
  // PLACEHOLDER: the same number for WhatsApp, digits only (country code, no + or spaces).
  whatsapp: '263770000000',
  // PLACEHOLDER: Formspree form endpoint, e.g. https://formspree.io/f/abcdwxyz
  // Create a free form at https://formspree.io and paste its endpoint here.
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',

  // Links to social profiles, shown in the footer and given to Google. Add as they are created.
  social: [] as { label: string; href: string }[],
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const phoneLink = () => `tel:${site.phone.replace(/[^\d+]/g, '')}`;
