// A small Markdown to HTML converter for the legal texts in content/legal/*.md, which are kept
// as Markdown so they can be compared word for word with the approved drafts. It handles what
// those texts use: headings, paragraphs, bullet lists, pipe tables, rules, bold, italics and
// links; e-mail addresses and yardly.hu addresses become links.

const escape = (s) => s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

// The site's own pages, written as "yardly.hu/aszf" in the texts.
const SITE_LINK = /\byardly\.hu\/([a-z0-9-]+)(?:\/)?/g;
const EMAIL = /\b([a-z0-9._-]+@yardly\.hu)\b/g;

const inline = (text) => {
  let s = escape(text.replace(/\\([[\]*_\\])/g, "$1"));
  const links = [];
  // [text](url): kept aside so the address rules below do not touch the url.
  s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, url) => {
    links.push(`<a href="${url}"${/^https?:/.test(url) ? ' rel="noopener"' : ""}>${label}</a>`);
    return `\u0000${links.length - 1}\u0000`;
  });
  s = s.replace(SITE_LINK, (_, path) => `<a href="/${path}/">yardly.hu/${path}</a>`);
  s = s.replace(EMAIL, (_, mail) => `<a href="mailto:${mail}">${mail}</a>`);
  s = s.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  s = s.replace(/(^|[\s(])\*([^*\s][^*]*?)\*(?=[\s).,;:]|$)/g, "$1<em>$2</em>");
  return s.replace(/\u0000(\d+)\u0000/g, (_, i) => links[Number(i)]);
};

const cells = (row) => row.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());

const table = (lines) => {
  const [head, , ...rows] = lines.map(cells);
  const hasHead = head.some((c) => c !== "");
  const tr = (r, tag) => `<tr>${r.map((c) => `<${tag}>${inline(c)}</${tag}>`).join("")}</tr>`;
  return `<div class="prose-table"><table>
${hasHead ? `<thead>${tr(head, "th")}</thead>\n` : ""}<tbody>
${rows.map((r) => tr(r, "td")).join("\n")}
</tbody>
</table></div>`;
};

// Returns the first-level heading (the page title) and the rest of the text as HTML.
export const markdown = (source) => {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  let title = "";
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") { i++; continue; }
    const h = /^(#{1,4})\s+(.*)$/.exec(line);
    if (h) {
      if (h[1].length === 1 && !title) title = h[2].trim();
      else out.push(`<h${h[1].length}>${inline(h[2].trim())}</h${h[1].length}>`);
      i++;
      continue;
    }
    if (/^-{3,}\s*$/.test(line)) { out.push("<hr>"); i++; continue; }
    if (line.startsWith("|")) {
      const block = [];
      while (i < lines.length && lines[i].startsWith("|")) block.push(lines[i++]);
      out.push(table(block));
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (i < lines.length && lines[i].trim() !== "") {
        if (/^[-*]\s+/.test(lines[i])) items.push(lines[i].replace(/^[-*]\s+/, ""));
        else items[items.length - 1] += ` ${lines[i].trim()}`;
        i++;
      }
      out.push(`<ul>\n${items.map((it) => `<li>${inline(it)}</li>`).join("\n")}\n</ul>`);
      continue;
    }
    const para = [];
    while (i < lines.length && lines[i].trim() !== "" && !/^(#{1,4}\s|\||[-*]\s|-{3,}\s*$)/.test(lines[i])) para.push(lines[i++].trim());
    out.push(`<p>${inline(para.join(" "))}</p>`);
  }
  return { title, html: out.join("\n") };
};
