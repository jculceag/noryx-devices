import type { Dictionary } from "@/i18n/dictionaries/en";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";
import { WorldMap } from "@/components/visuals/WorldMap";

type GlobalNetworkProps = {
  dict: Dictionary["network"];
};

export function GlobalNetwork({ dict }: GlobalNetworkProps) {
  const mapLabels = dict.nodes
    .filter((n) => n.code !== "GLOBAL")
    .map((n) => ({ code: n.code, role: n.role }));

  return (
    <Section id={dict.id} density="compact">
      <Reveal>
        <Eyebrow>{dict.eyebrow}</Eyebrow>
        <Headline className="mt-5 text-[clamp(1.85rem,4vw,3.25rem)]">
          {dict.title}
        </Headline>
        <Prose className="mt-5">{dict.subtitle}</Prose>
      </Reveal>

      <Reveal delay={0.08} className="mt-10 hidden md:block">
        <WorldMap labels={mapLabels} ariaLabel={dict.mapAria} />
      </Reveal>

      <div className="mt-10 grid gap-px bg-hairline sm:grid-cols-2 lg:grid-cols-5">
        {dict.nodes.map((node, i) => (
          <Reveal key={node.code} delay={0.05 * i} className="bg-bg p-6 md:p-7">
            <p className="text-[10px] uppercase tracking-[0.22em] text-sand">
              {node.code}
            </p>
            <h3 className="mt-4 font-display text-base tracking-wide text-white">
              {node.name}
            </h3>
            <p className="mt-3 text-sm text-muted">{node.role}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
