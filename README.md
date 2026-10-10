# Yardly — marketing site

A static marketing site for Yardly, aimed at larger organisations that need to connect their systems and automate the operational processes between them.

## Pages

| File | Page |
| --- | --- |
| `index.html` | Home: hero, three benefits, proof, FAQ, one call to action |
| `solutions.html` | End-to-end processes, platform capabilities, engagement model, deployment options |
| `about.html` | Story, principles, milestones, team |
| `contact.html` | Architecture review request form and direct contacts |

## Structure

```
assets/
  css/styles.css   all styles; design tokens live in :root at the top
  js/main.js       mobile menu, header state, reduced-motion handling, form validation
  fonts/           self-hosted Geist and Geist Mono (SIL OFL), no third-party font requests
  favicon.svg
```

There is no build step and there are no dependencies. Every visual (the system diagrams, the run trace, the monitoring panel, the rail-yard illustration) is hand-drawn inline SVG or HTML/CSS. The site uses no stock photography and no icon library.

## Run locally

Serve the folder with any static server, for example:

```sh
npx http-server -p 4173 .
```

Then open http://localhost:4173.

## Before going live

- **Placeholder content.** Customer names (Halvorsen, Northmere and the others), the testimonial, metrics, certifications, the SLA, connector counts, company facts, the timeline and email addresses are all illustrative. Replace them with real, verifiable information.
- **Contact form.** `assets/js/main.js` validates the form and shows a confirmation, but nothing is sent yet. Connect the submit handler to your CRM or form endpoint.
- **Legal pages.** Add a privacy notice and imprint, and link them from the footer and the consent checkbox.
