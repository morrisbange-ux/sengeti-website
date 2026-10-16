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
| `social` | The address of each social media page; leave an `href` empty to hide that icon |

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

**Change page text.** All wording is in `src/i18n/en.ts`.

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

The `dist/` folder can be hosted on any static host. Cloudflare Pages and Netlify are free:
connect this repository, set the build command to `npm run build` and the output folder to `dist`.
