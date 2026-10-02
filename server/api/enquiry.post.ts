/**
 * POST /api/enquiry
 * -----------------
 * Receives an enquiry from the contact form, validates it, and forwards it
 * to whatever destination is configured in `NUXT_ENQUIRY_WEBHOOK`
 * (e.g. a Formspree / Zapier / Make / Google Apps Script endpoint, or your
 * own mail service).
 *
 * If no webhook is configured the route responds 501 and the form falls back
 * to telling the visitor to call or WhatsApp the centre — it never silently
 * swallows a parent's message.
 */

interface EnquiryBody {
  parentName?: string;
  phone?: string;
  email?: string;
  childAge?: string;
  concern?: string;
  message?: string;
  /** Honeypot — must be empty */
  website?: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<EnquiryBody>(event);

  // Honeypot: silently accept, do not forward.
  if (body?.website) {
    return { ok: true };
  }

  const parentName = body?.parentName?.trim() ?? "";
  const phone = body?.phone?.trim() ?? "";
  const email = body?.email?.trim() ?? "";
  const message = body?.message?.trim() ?? "";

  const errors: Record<string, string> = {};
  if (!parentName) errors.parentName = "Name is required.";
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!/^[+\d][\d\s-]{7,16}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message) errors.message = "Please tell us a little about your child.";

  if (Object.keys(errors).length) {
    throw createError({
      statusCode: 422,
      statusMessage: "Validation failed",
      data: { errors },
    });
  }

  const webhook = useRuntimeConfig(event).enquiryWebhook;

  if (!webhook) {
    throw createError({
      statusCode: 501,
      statusMessage:
        "Enquiry forwarding is not configured. Set NUXT_ENQUIRY_WEBHOOK.",
    });
  }

  await $fetch(webhook, {
    method: "POST",
    body: {
      parentName,
      phone,
      email: email || "(not provided)",
      childAge: body?.childAge?.trim() || "(not provided)",
      concern: body?.concern?.trim() || "(not specified)",
      message,
      receivedAt: new Date().toISOString(),
      source: "nitara-website-contact-form",
    },
  });

  return { ok: true };
});
