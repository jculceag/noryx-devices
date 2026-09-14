"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/locales";

type ContactFormProps = {
  dict: Dictionary["contact"];
  locale: Locale;
};

type FormState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full border border-hairline-strong bg-surface-elevated px-4 py-3.5 text-sm text-white placeholder:text-muted/70 transition-all duration-200 hover:border-titanium/40 focus:border-sand focus:bg-surface focus:outline-none focus:ring-1 focus:ring-sand/40 invalid:border-red-500/60 aria-[invalid=true]:border-red-500/70";

export function ContactForm({ dict, locale }: ContactFormProps) {
  const [state, setState] = useState<FormState>("idle");
  const [touched, setTouched] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTouched(true);
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      setState("error");
      form.reportValidity();
      return;
    }

    setState("submitting");
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || ""),
      company: String(data.get("company") || ""),
      country: String(data.get("country") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      type: String(data.get("type") || "other"),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
      locale,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setState("error");
        return;
      }

      setState("success");
      form.reset();
      setTouched(false);
    } catch {
      setState("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-sm border border-hairline bg-surface/60 p-5 md:p-7"
      noValidate={false}
      data-touched={touched || undefined}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <Field label={dict.fields.name} name="name" required />
        <Field label={dict.fields.company} name="company" required />
        <Field label={dict.fields.country} name="country" required />
        <Field label={dict.fields.email} name="email" type="email" required />
        <Field label={dict.fields.phone} name="phone" type="tel" />
        <div>
          <label
            htmlFor="contact-type"
            className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-muted"
          >
            {dict.fields.type}
          </label>
          <select
            id="contact-type"
            name="type"
            required
            defaultValue=""
            className={`${inputClass} cursor-pointer appearance-none`}
          >
            <option value="" disabled>
              ···
            </option>
            {dict.types.map((t) => (
              <option key={t.value} value={t.value} className="bg-bg text-white">
                {t.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-muted"
        >
          {dict.fields.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          minLength={10}
          rows={5}
          className={`${inputClass} resize-y`}
        />
      </div>

      <div className="absolute -left-[9999px] opacity-0" aria-hidden>
        <label htmlFor="website">{dict.honeypot}</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex min-h-11 cursor-pointer items-center border border-sand/70 bg-sand/15 px-6 text-[12px] font-medium uppercase tracking-[0.22em] text-white transition-colors hover:border-sand hover:bg-sand/25 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-sand disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "submitting" ? dict.submitting : dict.submit}
        </button>
        <p
          className={`text-sm ${
            state === "success"
              ? "text-sand"
              : state === "error"
                ? "text-red-400"
                : "text-muted"
          }`}
          role="status"
          aria-live="polite"
        >
          {state === "success" ? dict.success : null}
          {state === "error" ? dict.error : null}
        </p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  const id = `contact-${name}`;
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-muted"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className={inputClass}
        autoComplete={
          name === "email"
            ? "email"
            : name === "name"
              ? "name"
              : name === "phone"
                ? "tel"
                : name === "company"
                  ? "organization"
                  : name === "country"
                    ? "country-name"
                    : "off"
        }
      />
    </div>
  );
}
