# yardly.hu

Marketing site for Yardly: tailored maintenance and operations software for logistics companies. It extends the systems a company already uses rather than replacing them.

The site is static and comes in three languages: Hungarian (default, `/`), English (`/en/`) and German (`/de/`). The content is based on the completed content questionnaire.

## Pages

| Page | HU | EN | DE |
| --- | --- | --- | --- |
| Home | `/` | `/en/` | `/de/` |
| Solutions | `/megoldasok/` | `/en/solutions/` | `/de/loesungen/` |
| Case studies | `/esettanulmanyok/` | `/en/case-studies/` | `/de/fallstudien/` |
| Blog (3 posts) | `/blog/` | `/en/blog/` | `/de/blog/` |
| About | `/rolunk/` | `/en/about/` | `/de/ueber-uns/` |
| Contact | `/kapcsolat/` | `/en/contact/` | `/de/kontakt/` |
| Privacy notice | `/adatkezeles/` | `/en/privacy/` | `/de/datenschutz/` |
| Imprint | `/impresszum/` | `/en/imprint/` | `/de/impressum/` |

The build also writes `sitemap.xml` (with hreflang alternates), `robots.txt` and `404.html`.

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
  i18n/hu|en|de.mjs all page copy, one file per language
  posts.mjs         blog posts (all three languages)
  pages.mjs         page templates
  layout.mjs        <head>, header, language switcher, footer, cookie banner
  components.mjs    hand-drawn SVG illustrations and shared blocks
  build.mjs         static site generator
assets/
  css/styles.css    all styles; design tokens at the top
  js/main.js        menu, cookie consent, contact form
  img/app/          product screenshots (test environment, demo names)
  brand/            official logo and the social sharing image
  fonts/            self-hosted Manrope and Geist Mono (SIL OFL)
public/             favicons and web manifest, copied to the site root
aws/contact-form/   Lambda function that e-mails contact form submissions
```

To change copy, edit `src/i18n/*.mjs` and rebuild. To add a blog post, add an entry at the top of `src/posts.mjs`.

## Brand

The logo, icons and colours come from the Yardly logo package.

| Colour | Hex | Use on the site |
| --- | --- | --- |
| Éjkék | `#0C1C3E` | text, primary buttons, dark sections |
| Türkiz | `#22D3B8` | accent on dark sections, button on dark sections |
| Türkiz mély | `#0FA28C` | accent shapes on light backgrounds (dots, lines, markers) |
| Felhő | `#F1F4FA` | tinted section backgrounds |

Small accent text on light backgrounds (links, numbers) uses `#0B7A69`, a darker shade of Türkiz mély, because `#0FA28C` on white is below the WCAG AA contrast ratio for body text. The tokens are at the top of `assets/css/styles.css`.

Headings use Manrope Bold (700) and body text Manrope Medium (500), as the brand guide specifies. Labels and figures use Geist Mono.

The header and footer show `assets/brand/yardly-vizszintes-szines.svg` (the horizontal logo for light backgrounds). Keep it at least 96 px wide, and use the `szines-sotet-hatterre` version from the package on dark backgrounds.

## Live site (yardly.hu)

`yardly.hu` is served by Caddy on the `flotta-app` EC2 instance, next to the Yardly app, which stays on `teszt.yardly.hu`. `www.yardly.hu` redirects to `yardly.hu`.

- Each build is extracted to `/opt/flotta/landing/releases/<date>-<commit>/`, and `/opt/flotta/landing/current` is a symlink to the live one. Caddy sees it as `/srv/landing/current`, mounted read-only in `/opt/flotta/deploy/docker-compose.yml`.
- The `yardly.hu` site block and its security headers (`landing_headers`) are in `/opt/flotta/deploy/Caddyfile`. The Content-Security-Policy allows scripts, fonts and connections from the site's own origin only. Before enabling Google Analytics or a contact form endpoint, add their origins to that policy, or the browser will block them.

To publish a new version:

1. Build and pack it: `npm run build && tar -czf yardly-landing.tgz -C dist .`
2. Copy `yardly-landing.tgz` to the server (scp with the instance key, or through SSM).
3. Extract it next to the current release and switch the symlink. No Caddy reload is needed:
   ```sh
   REL=/opt/flotta/landing/releases/$(date -u +%Y%m%d-%H%M%S)-<commit>
   sudo mkdir -p "$REL" && sudo tar -xzf yardly-landing.tgz -C "$REL"
   cd /opt/flotta/landing && sudo ln -sfn "releases/$(basename "$REL")" current.tmp && sudo mv -T current.tmp current
   ```

To roll back, point `current` at the previous release the same way.

## Deploying to Cloudflare Workers

The repository is connected to Cloudflare Workers Builds. `wrangler.jsonc` tells Wrangler to run `npm run build` and serve `dist/` as static assets, with trailing-slash URLs and `404.html` for unknown paths. The default deploy command (`npx wrangler deploy`) needs no other settings. To enable the contact form endpoint or analytics there, add `YARDLY_FORM_ENDPOINT` and `YARDLY_GA_ID` as build variables in the Worker's build settings.

## Deploying to AWS

1. Build: `npm run build`.
2. Upload `dist/` to an S3 bucket and serve it through CloudFront in front of the S3 **website** endpoint, which resolves `/megoldasok/` to `index.html`. If you use the S3 REST endpoint with origin access control instead, add a CloudFront Function that appends `index.html` to paths ending in `/`.
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

- **Company details.** The privacy notice and the imprint contain highlighted placeholders (company name, registered office, registration and tax numbers, representative, retention periods, e-mail provider) that must be filled in once the company is registered. Both texts are drafts and need legal review. Remove the "draft" notice in `src/pages.mjs` (`legal()`) afterwards.
- **Mailbox.** Make sure `hello@yardly.hu` exists. The previous site used `info@yardly.hu`.
- **App login.** The site has no login link. The app is on `teszt.yardly.hu`; the old app pages that used to be on `yardly.hu` (such as `/login.html`) now return 404.
- **Social profiles.** The LinkedIn, Instagram, Facebook and TikTok icons render without links until the URLs are set in `src/config.mjs`.
- **Case study.** The case is anonymised. Get the client's written consent before naming them or quoting anyone.
- **Screenshots.** Images in `assets/img/app/` come from the test environment. Personal and company names were replaced with demo names before capture.
