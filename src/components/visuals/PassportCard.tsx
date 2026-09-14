import type { Dictionary } from "@/i18n/dictionaries/en";
import { QrMark } from "@/components/visuals/QrMark";

type PassportCardProps = {
  dict: Dictionary["passport"]["visual"];
  caption: string;
};

export function PassportCard({ dict, caption }: PassportCardProps) {
  return (
    <div className="relative overflow-hidden border border-hairline bg-surface">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(217,201,167,0.18), transparent 55%), linear-gradient(160deg, #0c0c0c, #080808 60%, #101010)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[420px] max-w-sm flex-col justify-center p-6 md:min-h-[480px] md:p-8">
        <div className="border border-hairline-strong bg-bg/90 p-5 backdrop-blur-sm md:p-6">
          <div className="flex items-start justify-between gap-3 border-b border-hairline pb-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-sand">
                {dict.title}
              </p>
              <p className="mt-2 text-xs text-titanium">{dict.subtitle}</p>
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] text-muted">
              {caption}
            </span>
          </div>

          <div className="my-5 flex justify-center">
            <div className="border border-hairline bg-surface p-3">
              <QrMark className="h-24 w-24" />
            </div>
          </div>

          <div className="mb-5 border border-hairline px-4 py-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-sand">
              {dict.statusLabel}
            </p>
            <p className="mt-1 font-display text-xl tracking-wide text-white">
              {dict.statusValue}
            </p>
            <p className="mt-2 text-[11px] text-muted">{dict.issued}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-sand">
              {dict.authentic}
            </p>
          </div>

          <dl className="grid grid-cols-2 gap-x-4 gap-y-4">
            <div>
              <dt className="text-[9px] uppercase tracking-[0.18em] text-muted">
                {dict.documentIdLabel}
              </dt>
              <dd className="mt-1 font-mono text-[11px] text-titanium">
                {dict.documentIdValue}
              </dd>
            </div>
            <div>
              <dt className="text-[9px] uppercase tracking-[0.18em] text-muted">
                {dict.validUntilLabel}
              </dt>
              <dd className="mt-1 font-mono text-[11px] text-titanium">
                {dict.validUntilValue}
              </dd>
            </div>
            <div>
              <dt className="text-[9px] uppercase tracking-[0.18em] text-muted">
                {dict.zoneLabel}
              </dt>
              <dd className="mt-1 font-mono text-[11px] text-titanium">
                {dict.zoneValue}
              </dd>
            </div>
          </dl>

          <p className="mt-5 border-t border-hairline pt-4 text-center text-[10px] uppercase tracking-[0.2em] text-muted">
            {dict.footer}
          </p>
        </div>
      </div>
    </div>
  );
}
