import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";
import { HairlineRule } from "@/components/ui/HairlineRule";

type OpportunityProps = {
  dict: Dictionary["opportunity"];
};

export function Opportunity({ dict }: OpportunityProps) {
  return (
    <Section id={dict.id} density="compact" className="bg-surface/20">
      <Reveal>
        <Eyebrow>{dict.eyebrow}</Eyebrow>
        <Headline className="mt-5 max-w-4xl text-[clamp(1.85rem,4.5vw,3.5rem)]">
          <span className="block">{dict.titleLine1}</span>
          <span className="block text-titanium">{dict.titleLine2}</span>
        </Headline>
        <Prose className="mt-8 max-w-3xl">{dict.p1}</Prose>
        <Prose className="mt-4 max-w-3xl">{dict.p2}</Prose>
        <Prose className="mt-4 max-w-3xl text-sand/90">{dict.p3}</Prose>
      </Reveal>

      <Reveal delay={0.08} className="mt-12">
        <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-sand">
          {dict.problemsTitle}
        </p>
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {dict.problems.map((problem) => (
            <div
              key={problem.title}
              className="border-t border-hairline py-7 sm:border-t-0 sm:border-l sm:px-5 sm:first:border-l-0 sm:first:pl-0"
            >
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted">
                {problem.code}
              </p>
              <h3 className="mt-3 font-display text-sm uppercase tracking-[0.16em] text-white">
                {problem.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>

      <HairlineRule className="my-12 md:my-14" />

      <Reveal delay={0.12}>
        <p className="text-[11px] uppercase tracking-[0.28em] text-sand">
          {dict.responseEyebrow}
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-titanium">
          {dict.responseTitle}
        </p>

        <ol className="mt-10 flex flex-col gap-0 md:flex-row md:flex-wrap md:items-center">
          {dict.flow.map((step, i) => (
            <li key={step} className="flex items-center md:contents">
              <div className="border border-hairline bg-bg px-4 py-3 md:inline-flex">
                <span className="text-[11px] uppercase tracking-[0.2em] text-white">
                  {step}
                </span>
              </div>
              {i < dict.flow.length - 1 ? (
                <>
                  <span
                    className="mx-3 hidden text-sand/70 md:inline"
                    aria-hidden
                  >
                    ↓
                  </span>
                  <span
                    className="ml-5 block h-4 w-px bg-sand/40 md:hidden"
                    aria-hidden
                  />
                </>
              ) : null}
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
