type CertRow = {
  label: string;
  value: string;
};

type CertificationPanelProps = {
  title: string;
  deviceId: string;
  demoNote: string;
  grade: string;
  gradeSub?: string;
  status: string;
  rows: readonly CertRow[];
};

export function CertificationPanel({
  title,
  deviceId,
  demoNote,
  grade,
  gradeSub,
  status,
  rows,
}: CertificationPanelProps) {
  return (
    <div className="border border-hairline-strong bg-surface p-5 md:p-7">
      <div className="mb-6 flex flex-wrap items-start justify-between gap-3 border-b border-hairline pb-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.28em] text-sand">
            {title}
          </p>
          <p className="mt-2 font-mono text-xs text-muted">{deviceId}</p>
        </div>
        <div className="max-w-[14rem] text-right">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
            {demoNote}
          </p>
          <p className="mt-2 font-display text-lg tracking-wide text-white md:text-xl">
            {grade}
          </p>
          {gradeSub ? (
            <p className="mt-1 text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted">
              {gradeSub}
            </p>
          ) : null}
          <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-sand">
            {status}
          </p>
        </div>
      </div>

      <ul className="space-y-0">
        {rows.map((row) => (
          <li
            key={row.label}
            className="grid grid-cols-[1fr_auto] items-center gap-4 border-t border-hairline py-3 first:border-t-0 first:pt-0"
          >
            <span className="text-[11px] uppercase tracking-[0.16em] text-muted">
              {row.label}
            </span>
            <span className="font-mono text-xs text-titanium">{row.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
