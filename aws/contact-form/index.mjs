// AWS Lambda handler for the yardly.hu contact form.
// Receives the form as JSON (POST) and forwards it by e-mail through Amazon SES.
//
// Environment variables:
//   TO_EMAIL        where enquiries are delivered, e.g. hello@yardly.hu
//   FROM_EMAIL      a sender address verified in SES, e.g. no-reply@yardly.hu
//   ALLOWED_ORIGIN  the site origin allowed to post, e.g. https://yardly.hu
//
// Deploy with a Lambda function URL (auth type NONE) in eu-central-1 and set
// the URL as YARDLY_FORM_ENDPOINT when building the site.
import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const ses = new SESv2Client({});
const LIMITS = { name: 120, email: 200, company: 160, role: 120, size: 80, message: 4000 };

const respond = (status, body) => ({
  statusCode: status,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": process.env.ALLOWED_ORIGIN || "https://yardly.hu",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  },
  body: JSON.stringify(body),
});

const clean = (value, max) => String(value ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

export const handler = async (event) => {
  const method = event.requestContext?.http?.method || event.httpMethod;
  if (method === "OPTIONS") return respond(204, {});
  if (method !== "POST") return respond(405, { error: "method_not_allowed" });

  let data;
  try {
    data = JSON.parse(event.isBase64Encoded ? Buffer.from(event.body, "base64").toString("utf8") : event.body || "{}");
  } catch {
    return respond(400, { error: "invalid_json" });
  }

  // Honeypot: bots fill the hidden "website" field. Pretend success.
  if (data.website) return respond(200, { ok: true });

  const form = {
    name: clean(data.name, LIMITS.name),
    email: clean(data.email, LIMITS.email),
    company: clean(data.company, LIMITS.company),
    role: clean(data.role, LIMITS.role),
    size: clean(data.size, LIMITS.size),
    systems: (Array.isArray(data.systems) ? data.systems : []).slice(0, 12).map((s) => clean(s, 60)),
    message: String(data.message ?? "").trim().slice(0, LIMITS.message),
    language: clean(data.language, 8),
    page: clean(data.page, 200),
  };

  if (!form.name || !form.company || !form.size || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    return respond(400, { error: "missing_fields" });
  }

  const text = [
    `Név / Name: ${form.name}`,
    `E-mail: ${form.email}`,
    `Cég / Company: ${form.company}`,
    `Beosztás / Role: ${form.role || "–"}`,
    `Cégméret / Size: ${form.size}`,
    `Rendszerek / Systems: ${form.systems.join(", ") || "–"}`,
    `Nyelv / Language: ${form.language}  ·  Oldal / Page: ${form.page}`,
    "",
    form.message || "–",
  ].join("\n");

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: process.env.FROM_EMAIL,
        Destination: { ToAddresses: [process.env.TO_EMAIL] },
        ReplyToAddresses: [form.email],
        Content: {
          Simple: {
            Subject: { Data: `Új megkeresés: ${form.company} (${form.name})`, Charset: "UTF-8" },
            Body: { Text: { Data: text, Charset: "UTF-8" } },
          },
        },
      })
    );
  } catch (err) {
    console.error("SES send failed", err);
    return respond(502, { error: "send_failed" });
  }

  return respond(200, { ok: true });
};
