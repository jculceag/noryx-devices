import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";
import { ConceptLabel } from "@/components/ui/ConceptLabel";
import { CertificationPanel } from "@/components/visuals/CertificationPanel";

type VerifiedProps = {
  dict: Dictionary["verified"];
};

export function Verified({ dict }: VerifiedProps) {
  return (
    <Section id={dict.id} density="compact" className="bg-surface/40">
      <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
        <Reveal>
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <Headline className="mt-5 text-[clamp(2rem,4.5vw,3.5rem)]">
            {dict.title}
          </Headline>
          <p className="mt-4 text-lg text-titanium">{dict.subtitle}</p>
          <Prose className="mt-6">{dict.body}</Prose>
          <Prose className="mt-4 text-sand/90">{dict.designed}</Prose>

          <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-sand">
            {dict.historyIntro}
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3">
            {dict.historyFields.map((field) => (
              <li
                key={field}
                className="border-t border-hairline pt-2 text-[11px] uppercase tracking-[0.12em] text-muted"
              >
                {field}
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-muted">
            {dict.developmentNote}
          </p>

          <div className="relative mt-8 aspect-[3/4] max-w-sm overflow-hidden border border-hairline">
            <Image
              src="/images/noryx/verified/device.webp"
              alt={dict.imageAlt}
              fill
              sizes="(max-width: 1024px) 80vw, 28vw"
              className="object-cover object-[18%_center] scale-110"
            />
            <div
              className="absolute inset-y-0 right-0 w-[42%] bg-gradient-to-l from-bg via-bg/90 to-transparent"
              aria-hidden
            />
            <ConceptLabel className="absolute bottom-4 left-4">
              {dict.imageCaption}
            </ConceptLabel>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <CertificationPanel
            title={dict.panelTitle}
            deviceId={dict.deviceId}
            demoNote={dict.demoNote}
            grade={dict.grade}
            gradeSub={dict.gradeSub}
            status={dict.certStatus}
            rows={dict.rows}
          />
        </Reveal>
      </div>
    </Section>
  );
}
