import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";
import { ConceptLabel } from "@/components/ui/ConceptLabel";
import { ProcessFlow } from "@/components/visuals/ProcessFlow";

type TechnicalProcessingProps = {
  dict: Dictionary["processing"];
};

export function TechnicalProcessing({ dict }: TechnicalProcessingProps) {
  return (
    <Section id={dict.id} density="compact">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <Reveal>
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <Headline className="mt-5 text-[clamp(1.85rem,4vw,3.1rem)]">
            {dict.title}
          </Headline>
          <Prose className="mt-6">{dict.intro}</Prose>
          <Prose className="mt-4 text-titanium/80">{dict.note}</Prose>
        </Reveal>

        <Reveal delay={0.08} className="relative">
          <div className="relative aspect-[16/11] overflow-hidden border border-hairline">
            <Image
              src="/images/noryx/processing/bench.webp"
              alt={dict.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
            <div
              className="absolute left-[8%] top-[6%] h-[36%] w-[32%] bg-bg/50 blur-[1px]"
              aria-hidden
            />
            <ConceptLabel className="absolute bottom-4 left-4">
              {dict.imageCaption}
            </ConceptLabel>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1} className="mt-12">
        <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-sand">
          {dict.flowTitle}
        </p>
        <ProcessFlow steps={dict.flowSteps} />
      </Reveal>

      <Reveal delay={0.12} className="mt-10">
        <ul className="grid gap-0 border-t border-hairline sm:grid-cols-3">
          {dict.steps.map((step, i) => (
            <li
              key={step}
              className="border-b border-hairline px-0 py-4 sm:border-r sm:px-4 sm:[&:nth-child(3n)]:border-r-0 sm:[&:nth-child(3n+1)]:pl-0"
            >
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-1.5 text-sm text-titanium">{step}</p>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
