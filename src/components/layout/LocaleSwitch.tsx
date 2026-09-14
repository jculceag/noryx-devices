"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/i18n/locales";
import { locales, localeLabels } from "@/i18n/locales";

type LocaleSwitchProps = {
  locale: Locale;
  languageLabel: string;
};

export function LocaleSwitch({ locale, languageLabel }: LocaleSwitchProps) {
  const pathname = usePathname();

  function hrefFor(next: Locale) {
    const segments = pathname.split("/");
    if (segments.length > 1) {
      segments[1] = next;
    }
    return segments.join("/") || `/${next}`;
  }

  return (
    <div
      className="flex items-center gap-1 text-[11px] uppercase tracking-[0.22em]"
      role="group"
      aria-label={languageLabel}
    >
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 ? <span className="text-muted/50">|</span> : null}
          <Link
            href={hrefFor(l)}
            hrefLang={l}
            className={`cursor-pointer px-1 py-2 transition-colors ${
              l === locale ? "text-white" : "text-muted hover:text-titanium"
            }`}
            aria-current={l === locale ? "true" : undefined}
          >
            {localeLabels[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}
