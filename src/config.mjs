// Site-wide settings. Change these before going live.
// gaId and formEndpoint can also be set at build time through the
// YARDLY_GA_ID and YARDLY_FORM_ENDPOINT environment variables.
export const config = {
  // Absolute origin, used for canonical URLs, social previews and the sitemap.
  siteUrl: "https://yardly.hu",

  // The only public contact address.
  email: "hello@yardly.hu",

  // Google Analytics 4 measurement ID (e.g. "G-ABC123XYZ").
  // Leave empty to ship the site without analytics and without a cookie banner.
  gaId: process.env.YARDLY_GA_ID ?? "",

  // Where the contact form posts its JSON: the site's own /api/kapcsolat, which Caddy forwards to
  // the app API (POST /api/public/contact) that e-mails it to hello@yardly.hu. An empty value
  // falls back to opening the visitor's e-mail program.
  formEndpoint: process.env.YARDLY_FORM_ENDPOINT ?? "/api/kapcsolat",

  // Google Search Console: the content of the HTML-tag verification
  // (<meta name="google-site-verification" content="…">). Also YARDLY_GSC at build time.
  googleSiteVerification: process.env.YARDLY_GSC ?? "85EloEk88cfxVAGMwnbOL6CHDp18KT5hcojsblUjmYk",

  // Social profiles. An empty value renders the icon without a link.
  social: {
    linkedin: "",
    instagram: "",
    facebook: "",
    tiktok: "",
  },
};
