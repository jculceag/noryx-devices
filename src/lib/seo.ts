import type { Metadata } from "next";
import type { Locale } from "@/i18n/locales";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { locales } from "@/i18n/locales";
import { getSiteUrl } from "@/lib/env";

export function buildPageMetadata(
  locale: Locale,
  dict: Dictionary,
  path = "",
): Metadata {
  const site = getSiteUrl();
  const localizedPath = `/${locale}${path}`;
  const canonical = `${site}${localizedPath}`;

  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${site}/${l}${path}`;
  }
  languages["x-default"] = `${site}/en${path}`;

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    metadataBase: new URL(site),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      url: canonical,
      siteName: "NORYX Devices",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function organizationJsonLd() {
  const site = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NORYX Devices",
    url: site,
    description:
      "International ecosystem for mobile device sourcing, technical processing, quality control, digital traceability and B2B distribution.",
    areaServed: ["AE", "PY", "BR", "US"],
  };
}
