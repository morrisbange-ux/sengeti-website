/**
 * Company details used across the whole site.
 *
 * Values marked PLACEHOLDER must be replaced before the site goes live.
 * Change them here once and every page picks them up.
 */
export const site = {
  name: 'Sengeti Technologies',
  shortName: 'Sengeti',
  url: 'https://sengetitechnologies.com',
  founder: 'Morris N. Bangezhano',
  city: 'Mutare',
  country: 'Zimbabwe',
  countryCode: 'ZW',
  // Countries the business serves, used for Google's structured data.
  areaServed: ['Zimbabwe', 'Mozambique', 'Zambia', 'Botswana', 'South Africa'],

  email: 'info@sengetitechnologies.com',
  // Phone number as people should read it, with country code.
  phone: '+263 77 220 9257',
  // The same number for WhatsApp, digits only (country code, no + or spaces).
  whatsapp: '263772209257',
  // PLACEHOLDER: Formspree form endpoint, e.g. https://formspree.io/f/abcdwxyz
  // Create a free form at https://formspree.io and paste its endpoint here.
  formEndpoint: 'https://formspree.io/f/YOUR_FORM_ID',

  // Google Maps link for the office. Once the Google Business Profile exists, paste its
  // "Share" link here so visitors land on the profile with reviews and directions.
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Sengeti+Technologies+Mutare+Zimbabwe',

  // Online booking page (Calendly, Cal.com, Google Calendar booking...). When set, "Book a call"
  // buttons appear on Contact and Start a project. Leave empty to hide them.
  bookingUrl: '',

  // WhatsApp Business catalogue link (wa.me/c/...). When set, the Products page links to it.
  whatsappCatalogue: '',

  // YouTube video ID of a short intro or explainer video (the part after v= in the address).
  // When set, it appears on the home page. The video only loads when a visitor presses play.
  introVideo: '',

  // Privacy-friendly visitor statistics. Fill in ONE of these to switch statistics on:
  // - Plausible: your site domain as registered at plausible.io, e.g. 'sengetitechnologies.com'
  // - Cloudflare Web Analytics (free): the token from the Cloudflare dashboard
  analytics: { plausibleDomain: '', cloudflareToken: '' },

  // PLACEHOLDER: headline numbers for the home page, e.g. { value: 12, suffix: '+', label: 'projects delivered' }.
  // Use real figures only. The section stays hidden while this list is empty.
  // Labels are written in each language: { en: '...', fr: '...', pt: '...' }.
  stats: [] as { value: number; suffix?: string; label: { en: string; fr: string; pt: string } }[],

  // How quickly the team replies, shown on the Support page. Confirm these before launch.
  responseTimes: { urgentHours: 4, normalDays: 1 },

  // The downloadable company profile in public/.
  profilePdf: '/sengeti-technologies-company-profile.pdf',

  // Social media profiles, shown as icons in the footer and on the Contact page.
  // Set `profile: true` once an href points at your own page, so Google links it to the company.
  social: [
    { network: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/sengeti.technologies/', profile: true },
    // PLACEHOLDER: replace with the LinkedIn company page address, then set profile: true.
    {
      network: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/search/results/companies/?keywords=Sengeti%20Technologies',
      profile: false,
    },
  ] as { network: SocialNetwork; label: string; href: string; profile: boolean }[],
};

export type SocialNetwork = 'facebook' | 'linkedin' | 'instagram' | 'x' | 'youtube' | 'tiktok';

/** Social links that have been filled in. */
export const socialLinks = () => site.social.filter((s) => s.href);

/** Social links confirmed as the company's own pages (given to Google). */
export const socialProfiles = () => socialLinks().filter((s) => s.profile);

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const phoneLink = () => `tel:${site.phone.replace(/[^\d+]/g, '')}`;
