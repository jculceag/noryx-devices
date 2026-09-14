import { z } from "zod";
import { getLeadWebhook, getResendConfig } from "@/lib/env";

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(1).max(160),
  country: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  type: z.enum([
    "supplier",
    "distributor",
    "retailer",
    "partner",
    "investor",
    "other",
  ]),
  message: z.string().trim().min(10).max(4000),
  website: z.string().max(0).optional().or(z.literal("")),
  locale: z.enum(["en", "pt"]).optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;

export type DispatchResult =
  | { ok: true; transport: "webhook" | "email" | "log" }
  | { ok: false; error: string };

export async function dispatchLead(
  payload: ContactPayload,
): Promise<DispatchResult> {
  const lead = {
    name: payload.name,
    company: payload.company,
    country: payload.country,
    email: payload.email,
    phone: payload.phone,
    type: payload.type,
    message: payload.message,
    locale: payload.locale,
  };
  const webhook = getLeadWebhook();

  if (webhook.url) {
    try {
      const res = await fetch(webhook.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhook.token
            ? { Authorization: `Bearer ${webhook.token}` }
            : {}),
        },
        body: JSON.stringify({
          source: "noryx-devices-web",
          receivedAt: new Date().toISOString(),
          ...lead,
        }),
      });

      if (!res.ok) {
        return {
          ok: false,
          error: `Webhook responded with ${res.status}`,
        };
      }

      return { ok: true, transport: "webhook" };
    } catch {
      return { ok: false, error: "Webhook request failed" };
    }
  }

  const resend = getResendConfig();
  if (resend.apiKey && resend.to) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resend.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: resend.from,
          to: [resend.to],
          subject: `[NORYX] Contact · ${lead.type} · ${lead.company}`,
          text: [
            `Name: ${lead.name}`,
            `Company: ${lead.company}`,
            `Country: ${lead.country}`,
            `Email: ${lead.email}`,
            `Phone: ${lead.phone || "-"}`,
            `Type: ${lead.type}`,
            `Locale: ${lead.locale || "pt"}`,
            "",
            lead.message,
          ].join("\n"),
        }),
      });

      if (!res.ok) {
        return { ok: false, error: `Email provider responded with ${res.status}` };
      }

      return { ok: true, transport: "email" };
    } catch {
      return { ok: false, error: "Email request failed" };
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.info("[noryx-lead:dev]", lead);
    return { ok: true, transport: "log" };
  }

  return {
    ok: false,
    error:
      "No lead transport configured. Set LEAD_WEBHOOK_URL or RESEND_API_KEY.",
  };
}
