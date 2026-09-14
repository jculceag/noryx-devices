import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  locales,
  isLocale,
  localeDirections,
  type Locale,
} from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata, organizationJsonLd } from "@/lib/seo";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return buildPageMetadata(raw, dict);
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  const dict = await getDictionary(locale);
  const dir = localeDirections[locale];

  return (
    <div lang={locale} dir={dir}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd()),
        }}
      />
      <Header locale={locale} dict={dict.nav} />
      <main>{children}</main>
      <Footer locale={locale} dict={dict.footer} />
    </div>
  );
}
