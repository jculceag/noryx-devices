import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { Symbol } from "@/components/ui/Logo";

type HeroProps = {
  dict: Dictionary["hero"];
};

export function Hero({ dict }: HeroProps) {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-28 md:items-center md:pb-24 md:pt-20">
      <Image
        src="/images/noryx/hero/hero.webp"
        alt={dict.imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_center] md:object-[62%_center]"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-bg/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/40"
        aria-hidden
      />
      <div className="radial-glow absolute inset-0" aria-hidden />

      <div className="container-noryx relative z-10 w-full">
        <Reveal immediate>
          <div className="mb-8 flex items-center gap-4">
            <Symbol className="h-10 w-10" priority />
            <Eyebrow>{dict.eyebrow}</Eyebrow>
          </div>
        </Reveal>

        <Reveal immediate motionSafe delay={0.06}>
          <Headline
            as="h1"
            className="max-w-5xl text-[clamp(2.5rem,7vw,5.75rem)]"
          >
            <span className="block">{dict.headlineLine1}</span>
            <span className="block">{dict.headlineLine2}</span>
          </Headline>
        </Reveal>

        <Reveal immediate delay={0.12}>
          <Prose className="mt-8 max-w-xl text-titanium/90">
            {dict.subheadline}
          </Prose>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-sand/85">
            {dict.journeyLine}
          </p>
        </Reveal>

        <Reveal immediate delay={0.18}>
          <div className="mt-10 flex flex-wrap gap-3">
            <ButtonLink href="#company" variant="primary">
              {dict.ctaPrimary}
            </ButtonLink>
            <ButtonLink href="#operations" variant="secondary">
              {dict.ctaSecondary}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal immediate delay={0.24}>
          <p className="mt-14 text-[11px] uppercase tracking-[0.28em] text-muted">
            {dict.markets}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
