import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";
import { HairlineRule } from "@/components/ui/HairlineRule";
import { ConceptLabel } from "@/components/ui/ConceptLabel";

type AboutProps = {
  dict: Dictionary["about"];
};

export function About({ dict }: AboutProps) {
  return (
    <Section id={dict.id} density="compact">
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>{dict.eyebrow}</Eyebrow>
            <Headline className="mt-5 text-[clamp(2rem,4.5vw,3.75rem)]">
              {dict.title}
            </Headline>
          </Reveal>
          <Reveal delay={0.08}>
            <Prose className="mt-8">{dict.p1}</Prose>
            <Prose className="mt-5">{dict.p2}</Prose>
          </Reveal>

          <Reveal delay={0.14}>
            <ul className="mt-10 grid gap-0 sm:grid-cols-2">
              {dict.pillars.map((pillar) => (
                <li
                  key={pillar}
                  className="border-t border-hairline py-5 text-[11px] uppercase tracking-[0.22em] text-titanium"
                >
                  {pillar}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden border border-hairline">
            <Image
              src="/images/noryx/about/editorial.webp"
              alt={dict.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent"
              aria-hidden
            />
            <ConceptLabel className="absolute bottom-4 left-4">
              {dict.imageCaption}
            </ConceptLabel>
          </div>
        </Reveal>
      </div>
      <HairlineRule className="mt-14 md:mt-16" />
    </Section>
  );
}
