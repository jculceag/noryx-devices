export const locales = ["pt", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

export const localeLabels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
};

/** Future locales (structure ready): es, ar */
export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  pt: "ltr",
  en: "ltr",
  // es: "ltr",
  // ar: "rtl",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
