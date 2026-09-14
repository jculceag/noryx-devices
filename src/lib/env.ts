export function getSiteUrl(): string {
  return (
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://noryxdevices.com.br"
  );
}

export function getLeadWebhook(): {
  url: string | undefined;
  token: string | undefined;
} {
  return {
    url: process.env.LEAD_WEBHOOK_URL || undefined,
    token: process.env.LEAD_WEBHOOK_TOKEN || undefined,
  };
}

export function getResendConfig(): {
  apiKey: string | undefined;
  to: string | undefined;
  from: string;
} {
  return {
    apiKey: process.env.RESEND_API_KEY || undefined,
    to: process.env.LEAD_TO_EMAIL || undefined,
    from: process.env.LEAD_FROM_EMAIL || "noreply@noryxdevices.com.br",
  };
}

export function getGaId(): string | undefined {
  const id = process.env.NEXT_PUBLIC_GA_ID?.trim();
  return id || undefined;
}
