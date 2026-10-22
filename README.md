# yardly.hu

Marketing site for Yardly, the fleet and equipment management system for Hungarian companies (app at `app.yardly.hu`).

The site is static and Hungarian only. The former English and German pages, and the pages the old site had but this one does not, forward to their nearest Hungarian page (see Redirects below).

## Pages

| Page | Path |
| --- | --- |
| Home | `/` |
| Solutions overview (Megoldásaink) | `/megoldasaink/` |
| 14 solution pages, one per area of the app | `/megoldasaink/<slug>/` |
| Pricing, with the calculator for vehicles, equipment, users and features | `/arak/` |
| Vállalati megoldás: self-hosted install and integration with existing systems (highlighted in the menu as „Vállalatoknak”) | `/vallalati-megoldas/` |
| Contact | `/kapcsolat/` |
| Blog (filterable by category; posts appear on their dates) | `/blog/`, `/blog/<slug>/` |
| Privacy notice | `/adatkezeles/` |
| Imprint | `/impresszum/` |

The Megoldásaink menu item opens a mega menu with all solution pages in four groups (Flotta, Eszközpark, Napi működés, Vezetés). On phones the same list is an accordion in the menu.

The build also writes `sitemap.xml`, `robots.txt` and `404.html`.

### Redirects

`REDIRECTS` in `src/routes.mjs` maps old addresses (`/en/…`, `/de/…`, `/megoldasok/`, `/esettanulmanyok/`, renamed blog posts) to new ones. On yardly.hu Caddy answers them with real 301s: the build writes them to `dist/redirects.caddy`, and the same lines are in the `yardly.hu` block of the server's Caddyfile (update both when the list changes). Each old address also gets a small page with a meta refresh and a canonical link, for hosts without the 301s. The site's Content-Security-Policy allows scripts from files only, so the forward cannot be an inline script.

## Build and preview

The only requirement is Node.js 18 or later. There are no npm dependencies.

```sh
npm run build    # writes the site to dist/
npm run serve    # serves dist/ on http://localhost:4173
```

## Where things live

```
src/
  config.mjs          site URL, e-mail, GA4 ID, form endpoint, social links
  content/
    site.mjs          menu, mega menu, footer, shared labels, app links
    home.mjs          home page copy
    solutions.mjs     solutions overview and the 14 solution pages
    pricing.mjs       plans, limits, comparison table, pricing FAQ
    pages.mjs         contact, privacy notice, imprint, Vállalati megoldás
    posts.mjs         blog categories and posts
  routes.mjs          URLs and redirects
  pages.mjs           page templates
  layout.mjs          <head>, header with mega menu, mobile menu, footer, cookie banner
  components.mjs      icons (Lucide), screenshot and phone frames, shared blocks
  build.mjs           static site generator
assets/
  css/styles.css      all styles; design tokens at the top
  js/main.js          mega menu, mobile menu, pricing toggle and calculator, blog filters,
                      cookie consent, contact form
  img/app/            product screenshots (demo company, see below)
  brand/              official logo and the social sharing image
  fonts/              self-hosted Manrope and Geist Mono (SIL OFL)
public/               favicons and web manifest, copied to the site root
aws/contact-form/     Lambda function that e-mails contact form submissions
```

To change copy, edit the matching file in `src/content/` and rebuild. To add a blog post, add an entry to `written` in `src/content/posts.mjs` (or to `guides` in `src/content/guides.mjs`).

### Scheduled posts and Search Console

- A post is published from its `date` on: the build leaves out posts dated after the build day (Budapest time) and turns links to them into plain text. `YARDLY_BUILD_DATE=2027-01-31 npm run build` previews a later day. On the server a timer rebuilds the site every morning (see below), so a post comes out on its day without a deploy.
- Google Search Console: put the HTML-tag verification code in `googleSiteVerification` in `src/config.mjs` (or `YARDLY_GSC` at build time); every page then carries `<meta name="google-site-verification">`. The sitemap is `https://yardly.hu/sitemap.xml`, with `lastmod` for the blog and the posts.

### Prices

The prices in `src/content/pricing.mjs` are a copy of the app's price list (`pricing.json` in the yardly-saas repository). The site does not read them from the app, so update both together. The calculator takes the number of vehicles, equipment and users and the features ticked (`CALC_FEATURES`, each with the smallest plan that has it) and picks the cheapest plan that can hold them all: the per-vehicle fee above the included vehicles (up to the plan's ceiling), and "+250 eszköz" packs above the plan's equipment limit (at most 20; Prémium has no limit; on annual billing a pack costs 10 months for 12). Too many users or a ticked feature the plan lacks rules the plan out, so the answer jumps to the next plan; a feature a smaller plan can buy as an extra (DKV on Alap) is added there as a line instead. It shows the net monthly amount and the gross amount with 27% VAT. The same logic runs in `src/pages.mjs` (the starting state) and `assets/js/main.js` (when the visitor changes a number).

### Contact form links

Links can preselect the form's topic: `/kapcsolat/?tema=demo#enquiry`. With `tema=notify&funkcio=<name>` the message also starts with "Szólj, ha elérhető: <name>". The "Szólj, ha elérhető" buttons next to features marked Hamarosan use this.

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

`yardly.hu` is served by Caddy on the `flotta-app` EC2 instance, next to the Yardly apps (`app.yardly.hu`, `tesztapp.yardly.hu` and `teszt.yardly.hu`). `www.yardly.hu` redirects to `yardly.hu`.

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

The server also publishes by itself: `/opt/flotta/landing/rebuild.sh` builds the `main` branch (in `node:22-alpine`, with the Budapest date as `YARDLY_BUILD_DATE`) and switches `current` only when the output changed. `yardly-landing-rebuild.timer` runs it every morning at 04:05 Budapest time, which publishes the posts dated that day; after a merge it can be run by hand (`sudo systemctl start yardly-landing-rebuild`). It shares the SaaS deploy lock, so it never builds at the same time as an app image. Log: `/var/log/yardly-landing-rebuild.log`.

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
- **Mailbox.** The site shows `config.email` (`hello@yardly.hu`) everywhere. Make sure the mailbox exists, or change the address in `src/config.mjs`.
- **Prices.** The site shows the new price list. Publish it once the app at `app.yardly.hu` charges the same prices.
- **Social profiles.** The LinkedIn, Instagram, Facebook and TikTok icons render without links until the URLs are set in `src/config.mjs`.
- **Screenshots.** Images in `assets/img/app/` are real screens of the app filled with a made-up company (Minta Logisztika Kft.) and made-up people.
