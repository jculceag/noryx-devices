import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";
import { DeviceJourney } from "@/components/visuals/DeviceJourney";
import { PassportCard } from "@/components/visuals/PassportCard";

type DevicePassportProps = {
  dict: Dictionary["passport"];
};

export function DevicePassport({ dict }: DevicePassportProps) {
  return (
    <Section id={dict.id} density="compact">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <Headline className="mt-5 text-[clamp(2rem,4.5vw,3.75rem)]">
            <span className="block">{dict.titleLine1}</span>
            <span className="block">{dict.titleLine2}</span>
          </Headline>
          <p className="mt-4 text-lg text-titanium">{dict.subtitle}</p>
          <Prose className="mt-5">{dict.body}</Prose>
          <p className="mt-5 text-sm tracking-wide text-sand/90">
            {dict.impactLine}
          </p>

          <ol className="mt-8 flex flex-wrap gap-3">
            {dict.flow.map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-3 border border-hairline px-4 py-2.5 text-[11px] uppercase tracking-[0.22em] text-titanium"
              >
                <span className="text-sand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-sand">
              {dict.journeyTitle}
            </p>
            <DeviceJourney steps={dict.journey} />
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
            {dict.fields.map((field) => (
              <li
                key={field}
                className="border-t border-hairline pt-3 text-[11px] uppercase tracking-[0.16em] text-muted"
              >
                {field}
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs leading-relaxed text-muted">{dict.qrNote}</p>
        </Reveal>

        <Reveal delay={0.1} className="relative">
          <PassportCard dict={dict.visual} caption={dict.imageCaption} />
        </Reveal>
      </div>
    </Section>
  );
}
