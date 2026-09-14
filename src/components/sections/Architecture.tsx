import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";

type ArchitectureProps = {
  dict: Dictionary["architecture"];
};

export function Architecture({ dict }: ArchitectureProps) {
  return (
    <Section id={dict.id} density="compact" className="bg-surface/25">
      <Reveal>
        <Eyebrow>{dict.eyebrow}</Eyebrow>
        <Headline className="mt-5 text-[clamp(1.85rem,4vw,3.25rem)]">
          {dict.title}
        </Headline>
        <Prose className="mt-5 max-w-3xl">{dict.subtitle}</Prose>
        <p className="mt-4 max-w-2xl text-xs leading-relaxed text-muted">
          {dict.plannedNote}
        </p>
      </Reveal>

      <Reveal delay={0.08} className="mt-12">
        <div className="grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-4">
          {dict.arms.map((arm) => (
            <div key={arm.code} className="bg-bg p-6 md:p-7">
              <p className="text-[10px] uppercase tracking-[0.22em] text-sand">
                {arm.code}
              </p>
              <h3 className="mt-4 font-display text-sm uppercase tracking-[0.14em] text-white">
                {arm.name}
              </h3>
              <p className="mt-3 text-sm text-muted">{arm.role}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.12} className="mt-10">
        <div className="border border-hairline-strong bg-bg px-6 py-8 md:px-10 md:py-10">
          <p className="text-[11px] uppercase tracking-[0.24em] text-sand">
            {dict.coreTitle}
          </p>
          <ul className="mt-6 flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-0">
            {dict.coreItems.map((item, i) => (
              <li key={item} className="flex items-center md:contents">
                <span className="border border-hairline px-4 py-2.5 text-[11px] uppercase tracking-[0.16em] text-titanium md:inline-flex">
                  {item}
                </span>
                {i < dict.coreItems.length - 1 ? (
                  <span
                    className="mx-3 hidden text-sand/60 md:inline"
                    aria-hidden
                  >
                    +
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted">
            {dict.coreNote}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
