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

## Before going live: replace the placeholders

Everything is in [`src/config/site.ts`](src/config/site.ts):

| Setting | What to put there |
| --- | --- |
| `url` | The website's real address (currently `https://sengetitechnologies.com`) |
| `email` | The email address customers see |
| `phone` | Phone number as people should read it, e.g. `+263 77 123 4567` |
| `whatsapp` | Same number, digits only, e.g. `263771234567` |
| `formEndpoint` | Your Formspree form address (free at https://formspree.io); messages are emailed to you |

## Common changes

**Add a product.** Copy `src/content/products/en/attendance.md` to a new file such as
`src/content/products/en/sengeti-pay.md` and edit it. It appears on the Products page and gets
its own page at `/products/sengeti-pay`. Set `status: coming-soon` for products not yet released,
`featured: true` to show it on the home page, and `order` to control its position.

**Change page text.** All wording is in `src/i18n/en.ts`.

**Add a language.** Follow the steps at the top of `src/i18n/index.ts`: copy `en.ts`, translate
it, register it, and copy the product files into a folder for that language. English stays at
`/`, the new language is served under its code (e.g. `/sn/`).

**Logos.** Web-ready versions are in `src/assets/brand/` and `public/` (favicon, app icons,
social share image). The original uploads are kept in `design/brand-originals/`.

## Hosting

The `dist/` folder can be hosted on any static host. Cloudflare Pages and Netlify are free:
connect this repository, set the build command to `npm run build` and the output folder to `dist`.
