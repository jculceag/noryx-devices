import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";
import { ConceptLabel } from "@/components/ui/ConceptLabel";
import { FlowRail } from "@/components/visuals/FlowRail";

type DubaiCenterProps = {
  dict: Dictionary["dubai"];
};

export function DubaiCenter({ dict }: DubaiCenterProps) {
  return (
    <Section
      id={dict.id}
      density="compact"
      className="radial-glow-emerald overflow-hidden"
    >
      <Reveal>
        <Eyebrow>{dict.eyebrow}</Eyebrow>
        <Headline className="mt-5 max-w-4xl text-[clamp(1.85rem,4.2vw,3.4rem)]">
          <span className="block">{dict.titleLine1}</span>
          <span className="mt-1 block text-[0.72em] text-titanium">
            {dict.titleLine2}
          </span>
        </Headline>
        <Prose className="mt-6">{dict.intro}</Prose>
        <Prose className="mt-4">{dict.body}</Prose>
      </Reveal>

      <Reveal delay={0.08} className="relative mt-10">
        <div className="relative aspect-[16/9] overflow-hidden border border-hairline md:aspect-[21/9]">
          <Image
            src="/images/noryx/dubai/facility.webp"
            alt={dict.imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={false}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent"
            aria-hidden
          />
          {/* Softens embedded monitor UI text so locale language stays in HTML */}
          <div
            className="absolute left-[4%] top-[18%] h-[42%] w-[28%] bg-bg/55 blur-[1px]"
            aria-hidden
          />
          <ConceptLabel className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
            {dict.imageCaption}
          </ConceptLabel>
        </div>
      </Reveal>

      <Reveal delay={0.12} className="mt-12 md:mt-14">
        <FlowRail steps={dict.steps} />
      </Reveal>
    </Section>
  );
}
