import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/locales";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";

type ContactProps = {
  dict: Dictionary["contact"];
  locale: Locale;
};

export function Contact({ dict, locale }: ContactProps) {
  return (
    <Section id={dict.id} density="compact">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <Headline className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)]">
            <span className="block">{dict.titleLine1}</span>
            <span className="block">{dict.titleLine2}</span>
          </Headline>
          <Prose className="mt-6">{dict.intro}</Prose>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm dict={dict} locale={locale} />
        </Reveal>
      </div>
    </Section>
  );
}
