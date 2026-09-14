import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";
import { WorldMap } from "@/components/visuals/WorldMap";

type GlobalModelProps = {
  dict: Dictionary["globalModel"];
};

export function GlobalModel({ dict }: GlobalModelProps) {
  return (
    <Section id={dict.id} density="compact">
      <Reveal>
        <Eyebrow>{dict.eyebrow}</Eyebrow>
        <Headline className="mt-5 text-[clamp(1.85rem,4vw,3.25rem)]">
          {dict.title}
        </Headline>
        <Prose className="mt-6">{dict.subtitle}</Prose>
        <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-sand">
          {dict.flowLabel}
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 hidden md:block">
        <WorldMap
          labels={dict.regions.map((r) => ({ code: r.code, role: r.role }))}
          ariaLabel={dict.mapAria}
        />
      </Reveal>

      <div className="mt-10 grid gap-0 md:grid-cols-2 lg:grid-cols-4">
        {dict.regions.map((region, i) => (
          <Reveal
            key={region.code}
            delay={0.06 * i}
            className="border-t border-hairline py-7 md:border-t-0 md:border-l md:px-6 md:first:border-l-0 md:first:pl-0"
          >
            <p className="font-display text-2xl tracking-wide text-white">
              {region.code}
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-sand">
              {region.role}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {region.description}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
