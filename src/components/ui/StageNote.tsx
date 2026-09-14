import type { Dictionary } from "@/i18n/dictionaries/en";
import { Reveal } from "@/components/ui/Reveal";

type StageNoteProps = {
  text: string;
};

export function StageNote({ text }: StageNoteProps) {
  return (
    <div className="container-noryx pb-2 pt-4 md:pb-4">
      <Reveal>
        <p className="max-w-3xl border-l border-sand/50 pl-4 text-sm leading-relaxed text-muted">
          {text}
        </p>
      </Reveal>
    </div>
  );
}

export type StageNoteDict = Dictionary["stage"];
