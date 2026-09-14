import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Reveal } from "@/components/ui/Reveal";
import { WhyIcon, type WhyIconName } from "@/components/visuals/WhyIcon";

type WhyNoryxProps = {
  dict: Dictionary["why"];
};

export function WhyNoryx({ dict }: WhyNoryxProps) {
  return (
    <Section id={dict.id} density="compact">
      <Reveal>
        <Eyebrow>{dict.eyebrow}</Eyebrow>
        <Headline className="mt-5 text-[clamp(1.85rem,4vw,3.25rem)]">
          {dict.title}
        </Headline>
      </Reveal>

      <div className="mt-12 grid gap-0 md:grid-cols-2 lg:grid-cols-5">
        {dict.pillars.map((pillar, i) => (
          <Reveal
            key={pillar.title}
            delay={0.06 * i}
            className="border-t border-hairline py-8 md:border-t-0 md:border-l md:px-5 md:first:border-l-0 md:first:pl-0 lg:px-4 xl:px-5"
          >
            <WhyIcon
              name={pillar.icon as WhyIconName}
              className="h-7 w-7 text-sand"
            />
            <p className="mt-5 text-[10px] uppercase tracking-[0.24em] text-muted">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-display text-sm uppercase tracking-[0.14em] text-white">
              {pillar.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {pillar.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
