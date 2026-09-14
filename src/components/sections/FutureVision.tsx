import Image from "next/image";
import type { Dictionary } from "@/i18n/dictionaries/en";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Headline } from "@/components/ui/Headline";
import { Prose } from "@/components/ui/Prose";
import { Reveal } from "@/components/ui/Reveal";

type FutureVisionProps = {
  dict: Dictionary["future"];
};

export function FutureVision({ dict }: FutureVisionProps) {
  return (
    <section
      id={dict.id}
      className="relative flex min-h-[60vh] items-end overflow-hidden py-20 md:min-h-[70vh] md:py-28"
    >
      <Image
        src="/images/noryx/future/horizon.webp"
        alt={dict.imageAlt}
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/30"
        aria-hidden
      />

      <div className="container-noryx relative z-10">
        <Reveal>
          <Eyebrow>{dict.eyebrow}</Eyebrow>
          <Headline className="mt-5 max-w-4xl text-[clamp(2rem,5.5vw,4.5rem)]">
            <span className="block">{dict.titleLine1}</span>
            <span className="block">{dict.titleLine2}</span>
          </Headline>
          <Prose className="mt-8 max-w-2xl text-titanium/90">{dict.body}</Prose>
        </Reveal>
      </div>
    </section>
  );
}
