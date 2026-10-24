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
const LIMITS = { topic: 120, name: 120, email: 200, company: 160, phone: 40, count: 12, hosting: 60, message: 4000 };

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
    topic: clean(data.topicLabel || data.topic, LIMITS.topic),
    name: clean(data.name, LIMITS.name),
    email: clean(data.email, LIMITS.email),
    company: clean(data.company, LIMITS.company),
    phone: clean(data.phone, LIMITS.phone),
    vehicles: clean(data.vehicles, LIMITS.count),
    equipment: clean(data.equipment, LIMITS.count),
    hosting: clean(data.hosting, LIMITS.hosting),
    message: String(data.message ?? "").trim().slice(0, LIMITS.message),
    page: clean(data.page, 200),
  };

  if (!form.topic || !form.name || !form.company || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    return respond(400, { error: "missing_fields" });
  }

  const text = [
    `Téma: ${form.topic}`,
    `Név: ${form.name}`,
    `E-mail: ${form.email}`,
    `Cég: ${form.company}`,
    `Telefon: ${form.phone || "–"}`,
    `Járművek: ${form.vehicles || "–"}  ·  Eszközök: ${form.equipment || "–"}`,
    `Üzemeltetés: ${form.hosting || "–"}`,
    `Oldal: ${form.page}`,
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
            Subject: { Data: `Új megkeresés (${form.topic}): ${form.company}, ${form.name}`, Charset: "UTF-8" },
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
