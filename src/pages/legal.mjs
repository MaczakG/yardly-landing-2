// Legal pages. The texts are drafts: the highlighted placeholders must be filled
// in and the wording checked by a lawyer before going live.
import { config } from "../config.mjs";
import text from "./legal-text.mjs";

const legal = (key, l) => ({
  key,
  title: l.title,
  description: l.description,
  body: `
<section class="legal" aria-labelledby="page-title">
  <div class="container legal__inner">
    <p class="legal__draft">Tervezet. Élesítés előtt a kiemelt részeket ki kell tölteni, a szöveget jogi szakértőnek kell ellenőriznie.</p>
    <h1 class="h1" id="page-title">${l.heading}</h1>
    <p class="lead">${l.intro}</p>
    <div class="prose">${l.body.replaceAll("{email}", config.email)}</div>
  </div>
</section>`,
});

export const privacy = () => legal("privacy", text.privacy);
export const imprint = () => legal("imprint", text.imprint);

