import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";
import { ConceptLabel } from "@/components/ui/ConceptLabel";
import { OsBoard } from "@/components/visuals/OsBoard";
import { OsDashboard } from "@/components/visuals/OsDashboard";

type NoryxOsProps = {
  dict: Dictionary["technology"];
};

export function NoryxOs({ dict }: NoryxOsProps) {
  return (
    <Section id={dict.id} density="compact" className="bg-surface/30">
      <Reveal>
        <div className="flex flex-wrap items-center gap-3">
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <ConceptLabel>{dict.conceptLabel}</ConceptLabel>
        </div>
        <Headline className="mt-5 text-[clamp(2rem,5vw,4rem)]">
          {dict.title}
        </Headline>
        <Prose className="mt-6">{dict.intro}</Prose>
      </Reveal>

      <Reveal delay={0.08} className="mt-10">
        <OsBoard
          modules={dict.modules}
          osName={dict.platformName}
          tagline={dict.platformTagline}
          sampleValues={dict.sampleValues}
          conceptLabel={dict.conceptLabel}
        />
      </Reveal>

      <Reveal delay={0.12} className="relative mt-8">
        <OsDashboard dict={dict.dashboard} />
        <ConceptLabel className="mt-3">{dict.imageCaption}</ConceptLabel>
      </Reveal>
    </Section>
  );
}
