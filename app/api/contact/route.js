import { businessStages, challengeOptions, consultMethods } from "@/content/site";

/* Server-side validation and email for the consultation form, through Resend (resend.com).
   The form uses this route when NEXT_PUBLIC_WEB3FORMS_KEY is not set. Needs RESEND_API_KEY and CONTACT_TO_EMAIL. See .env.example. */
const clean = (value, max) => String(value == null ? "" : value).trim().slice(0, max);
const oneLine = (value, max) => clean(value, max).replace(/\s+/g, " ");
const json = (body, status = 200) => Response.json(body, { status });
const fail = (field) => json({ ok: false, error: "invalid", field }, 400);

export async function POST(request) {
  let data;
  try { data = await request.json(); } catch (error) { return json({ ok: false, error: "invalid" }, 400); }
  if (!data || typeof data !== "object") return json({ ok: false, error: "invalid" }, 400);
  if (clean(data.website, 200)) return json({ ok: true }); // hidden field: only bots fill it in

  const name = oneLine(data.name, 120), business = oneLine(data.organisation, 160), email = oneLine(data.email, 200);
  const phone = oneLine(data.phone, 40), stage = oneLine(data.stage, 80), challenge = oneLine(data.challenge, 80), method = oneLine(data.method, 40), message = clean(data.message, 5000);
  if (!name) return fail("name");
  if (!business) return fail("organisation");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail("email");
  if (phone && !/^[0-9+()\-.\s]{6,40}$/.test(phone)) return fail("phone");
  if (!challengeOptions.includes(challenge)) return fail("challenge");
  if (stage && !businessStages.includes(stage)) return fail("stage");
  if (method && !consultMethods.includes(method)) return fail("method");
  if (message.length < 10) return fail("message");

  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
  if (!key || !to) {
    console.error("Contact form: RESEND_API_KEY and CONTACT_TO_EMAIL are not set, so the enquiry was not sent.");
    return json({ ok: false, error: "not_configured" }, 503);
  }
  const text = ["Name: " + name, "Business: " + business, "Email: " + email, "Phone: " + (phone || "-"), "Size or stage: " + (stage || "-"), "Primary challenge: " + challenge, "Preferred method: " + (method || "-"), "", message].join("\n");
  const sent = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
    body: JSON.stringify({ from: process.env.CONTACT_FROM_EMAIL || "MwegaTech website <onboarding@resend.dev>", to: [to], reply_to: email, subject: "Website enquiry: " + challenge + " (" + name + ", " + business + ")", text }),
  });
  if (!sent.ok) {
    console.error("Contact form: Resend answered " + sent.status + ". " + (await sent.text()));
    return json({ ok: false, error: "send_failed" }, 502);
  }
  return json({ ok: true });
}
