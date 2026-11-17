# Sengeti Technologies website

The company website for Sengeti Technologies: Home, About, Products, Services and Contact.

Built with [Astro](https://astro.build) as a static site: every page is plain HTML and CSS
(about 4 KB per page compressed), so it loads quickly on slow connections and is easy for
search engines to read.

## Run it

Needs Node.js 22.22 or newer.

```sh
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # checks types and builds the site into dist/
```

## Before going live

Company details live in [`src/config/site.ts`](src/config/site.ts). The email, phone and
WhatsApp number come from the company profile. Two things still need filling in:

| Setting | What to put there |
| --- | --- |
| `formEndpoint` | Your Formspree form address (free at https://formspree.io); contact and support messages are emailed to you |
| `bookingUrl` | Optional: your Calendly or Cal.com link; "Book a call" buttons appear when set |
| `whatsappCatalogue` | Optional: your WhatsApp Business catalogue link, shown on the Products page |
| `introVideo` | Optional: a YouTube video ID for the home page |
| `analytics` | Optional: a Plausible domain or Cloudflare Web Analytics token to see visitor statistics |
| `stats` | Optional: real headline numbers (projects, users...) for the home page |
| `responseTimes` | The reply times promised on the Support page; confirm them |
| `mapUrl` | The share link of your Google Business Profile once it exists |
| `src/config/pricing.ts` | The price and timeline ranges used by the cost estimator; replace the placeholder figures |
| `social` | Instagram is set. LinkedIn currently points to a search; put the company page address in its `href` and set `profile: true` |

## Common changes

**Add a product.** Copy `src/content/products/en/attendance.md` to a new file such as
`src/content/products/en/sengeti-pay.md` and edit it. It appears on the Products page and gets
its own page at `/products/sengeti-pay`. Set `status: coming-soon` for products not yet released,
`featured: true` to show it on the home page, and `order` to control its position.

**Add a news post or case study.** Copy `src/content/news/en/example.md` to a new file name,
write the post and delete the `draft: true` line. Add translated copies with the same file name
under `fr/` and `pt/`. The News page, its menu link and the home
page "Case studies" section appear automatically once the first post is published.

**Add a testimonial or client logo.** Copy `src/content/testimonials/example.md` or
`src/content/clients/example.md`, fill it in and delete the `draft: true` line. Put the logo
or photo file next to it. These sections stay hidden until there is at least one entry.

**Use real app screenshots.** Add a `screenshots` list to the product's Markdown file
(see the comment in `src/content.config.ts`). They replace the drawn phone mockup.

**Privacy Policy and Terms.** These live in `src/content/legal/en/`. They are a sensible
starting point but should be reviewed by a lawyer before launch.

**Add a portfolio project.** Copy `src/content/projects/en/example.md`, fill it in and delete
the `draft: true` line. Add a `cover` screenshot if you have one; otherwise a drawn screen is
shown. Translated copies go in `fr/` and `pt/` with the same file name.

**Write an article.** Add a file to `src/content/news/en/` with `type: article`. Articles,
news and case studies all appear on the News page.

**Add a job.** Fill in the `roles` list at the top of `src/i18n/pages/careers.ts`.

**Add a product to the roadmap.** Create the product file with `status: coming-soon`. It then
appears under "Coming next" on the Products page.

**Pages with their own text file.** Industries, portfolio, careers, security, technology, the
automation checklist, savings calculator, cost estimator and live demo keep their text in
`src/i18n/pages/`, one file per page with English, French and Portuguese side by side.

**Light and dark mode.** The site opens in the dark brand theme. Visitors can switch with the
sun/moon button; their choice is remembered. Colours are set at the top of
`src/styles/global.css`.

**Change page text.** All wording is in `src/i18n/en.ts`.

**AI, ERP and "Start a project" pages.** Their text is in the `solutions` and `project`
sections of each language file. The project form uses the same Formspree address as the
contact form and arrives with the subject "New project enquiry", including the type of
project, budget and timeline the visitor picked.

**Languages.** The site is in English (`/`), French (`/fr/`) and Portuguese (`/pt/`), with a
language switcher in the header. The translations should be checked by a native speaker.

**Chat assistant.** The chat button answers common questions from the `chat` section of each
language file in `src/i18n/` and passes anything else to WhatsApp. To teach it a new answer, add
an entry with some keywords. It runs in the visitor's browser, so it needs no server or API key.

**Company profile.** The PDF is `public/sengeti-technologies-company-profile.pdf`. Replace the
file (same name) to update it.

**Add a language.** Follow the steps at the top of `src/i18n/index.ts`: copy `en.ts`, translate
it, register it, and copy the product files into a folder for that language. English stays at
`/`, the new language is served under its code (e.g. `/sn/`).

**Logos.** Web-ready versions are in `src/assets/brand/` and `public/` (favicon, app icons,
social share image). The original uploads are kept in `design/brand-originals/`.

## Hosting

The `dist/` folder can be hosted on any static host. Cloudflare Pages and Netlify are free and
include an SSL certificate:

1. Create an account and choose "Import from GitHub", then pick this repository.
2. Build command `npm run build`, output folder `dist`, Node version 22.
3. Add your domain (sengetitechnologies.com) in the host's domain settings and follow its DNS steps.

`public/_headers` adds security headers and long-term caching on both hosts.

**After going live:**
- Add the site to [Google Search Console](https://search.google.com/search-console) and submit
  `https://sengetitechnologies.com/sitemap-index.xml`.
- Create a [Google Business Profile](https://business.google.com) for the Mutare office, add the
  website address, then paste the profile's share link into `mapUrl`.
