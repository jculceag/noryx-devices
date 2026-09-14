export const locales = ["en", "pt"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  pt: "PT",
};

/** Future locales (structure ready): es, ar */
export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  pt: "ltr",
  // es: "ltr",
  // ar: "rtl",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
