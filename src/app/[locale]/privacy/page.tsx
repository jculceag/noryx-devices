import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { isLocale } from "@/i18n/locales";
import { getDictionary } from "@/i18n/get-dictionary";
import { buildPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";

type PageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const dict = await getDictionary(raw);
  return {
    ...buildPageMetadata(raw, dict, "/privacy"),
    title: `${dict.privacy.title} · NORYX Devices`,
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const dict = await getDictionary(raw);

  return (
    <Section className="pt-32 md:pt-40">
      <Eyebrow>LEGAL</Eyebrow>
      <Headline className="mt-5 text-[clamp(2rem,4vw,3.25rem)]">
        {dict.privacy.title}
      </Headline>
      <p className="mt-3 text-sm text-muted">{dict.privacy.updated}</p>
      <div className="mt-10 space-y-5">
        {dict.privacy.body.map((paragraph) => (
          <Prose key={paragraph.slice(0, 24)}>{paragraph}</Prose>
        ))}
      </div>
      <Link
        href={`/${raw}#contact`}
        className="mt-12 inline-flex cursor-pointer text-[11px] uppercase tracking-[0.22em] text-sand hover:text-white"
      >
        Contact
      </Link>
    </Section>
  );
}
