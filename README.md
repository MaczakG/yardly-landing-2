# yardly.hu

Marketing site for Yardly: workflow automation for large logistics companies in Hungary, offered as two services, consultancy (Tanácsadás) and implementation (Kivitelezés).

The site is static and in Hungarian.

## Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| Services | `/szolgaltatasok/` |
| Consultancy | `/szolgaltatasok/tanacsadas/` |
| Implementation | `/szolgaltatasok/kivitelezes/` |
| Case study | `/esettanulmanyok/` |
| About | `/rolunk/` |
| Contact | `/kapcsolat/` |
| Privacy notice | `/adatkezeles/` |
| Imprint | `/impresszum/` |

The build also writes `sitemap.xml`, `robots.txt` and `404.html`. `public/_redirects` sends the old English, German, blog and solutions URLs to the new pages.

## Build and preview

The only requirement is Node.js 18 or later. There are no npm dependencies.

```sh
npm run build    # writes the site to dist/
npm run serve    # serves dist/ on http://localhost:4173
```

## Where things live

```
src/
  config.mjs        site URL, e-mail, GA4 ID, form endpoint, social links
  routes.mjs        page paths
  ui.mjs            <head>, header, footer, cookie banner and shared blocks
  pages/*.mjs       page templates with their copy
  icons/            Phosphor icons (MIT), inlined at build time
  build.mjs         static site generator
assets/
  css/styles.css    all styles; design tokens at the top
  js/main.js        menu, cookie consent, contact form
  img/photos/       Unsplash photos, see CREDITS.md
  brand/            official logo and the social sharing image
  fonts/            self-hosted Manrope and Geist Mono (SIL OFL)
public/             favicons, web manifest and _redirects, copied to the site root
aws/contact-form/   Lambda function that e-mails contact form submissions
```

To change copy, edit the page in `src/pages/` and rebuild. The build fails if a page contains an en or em dash.

## Brand

The logo, icons and colours come from the Yardly logo package.

| Colour | Hex | Use on the site |
| --- | --- | --- |
| Éjkék | `#0C1C3E` | text, primary buttons, dark sections |
| Türkiz | `#22D3B8` | accent on dark sections, button on dark sections |
| Türkiz mély | `#0FA28C` | accent shapes on light backgrounds (dots, lines, markers) |
| Felhő | `#F1F4FA` | tinted section backgrounds |

Small accent text on light backgrounds (links, numbers) uses `#0B7A69`, a darker shade of Türkiz mély, because `#0FA28C` on white is below the WCAG AA contrast ratio for body text. The tokens are at the top of `assets/css/styles.css`.

Headings use Manrope Bold (700) and body text Manrope Medium (500), as the brand guide specifies.

The header and footer show `assets/brand/yardly-vizszintes-szines.svg` (the horizontal logo for light backgrounds). Keep it at least 96 px wide, and use the `szines-sotet-hatterre` version from the package on dark backgrounds.

## Deploying to Cloudflare Workers

The repository is connected to Cloudflare Workers Builds. `wrangler.jsonc` tells Wrangler to run `npm run build` and serve `dist/` as static assets, with trailing-slash URLs and `404.html` for unknown paths. The default deploy command (`npx wrangler deploy`) needs no other settings. To enable the contact form endpoint or analytics there, add `YARDLY_FORM_ENDPOINT` and `YARDLY_GA_ID` as build variables in the Worker's build settings.

## Deploying to AWS

1. Build: `npm run build`.
2. Upload `dist/` to an S3 bucket and serve it through CloudFront in front of the S3 **website** endpoint, which resolves `/rolunk/` to `index.html`. If you use the S3 REST endpoint with origin access control instead, add a CloudFront Function that appends `index.html` to paths ending in `/`.
3. Set `404.html` as the error document.

### Contact form

By default the form opens the visitor's e-mail program with the message pre-filled, addressed to `hello@yardly.hu`. To deliver it directly:

1. Verify `yardly.hu` (or a sender address) in Amazon SES in `eu-central-1`.
2. Create a Lambda function from `aws/contact-form/index.mjs` (Node.js 20) with an IAM role allowed to call `ses:SendEmail`. Set `TO_EMAIL=hello@yardly.hu`, `FROM_EMAIL` to a verified sender, and `ALLOWED_ORIGIN=https://yardly.hu`.
3. Add a function URL (auth type NONE) and build the site with it:
   ```sh
   YARDLY_FORM_ENDPOINT="https://….lambda-url.eu-central-1.on.aws/" npm run build
   ```

### Analytics

Build with a GA4 measurement ID to enable Google Analytics. The cookie banner then appears, and GA only loads after the visitor accepts:

```sh
YARDLY_GA_ID="G-XXXXXXX" npm run build
```

## Before going live

- **Company details.** The privacy notice and the imprint contain highlighted placeholders (company name, registered office, registration and tax numbers, representative, retention periods, e-mail provider) that must be filled in once the company is registered. Both texts are drafts and need legal review. Remove the "draft" notice in `src/pages/legal.mjs` afterwards.
- **Mailbox.** Make sure `hello@yardly.hu` exists. The previous site used `info@yardly.hu`.
- **App login.** The new site has no login link. If existing customers sign in at `yardly.hu/login.html`, move the app to its own address (for example `app.yardly.hu`) before switching domains.
- **Social profiles.** The LinkedIn, Instagram, Facebook and TikTok icons render without links until the URLs are set in `src/config.mjs`.
- **Case study.** The case is anonymised. Get the client's written consent before naming them or quoting anyone.
- **Copy review.** The texts were written for this version of the site. Check the service descriptions and the FAQ answers against how you actually work before going live.
- **Photos.** The photos are Unsplash stock images. Replace them with your own photos of clients' sites or of the team when you have them.
