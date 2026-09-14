type DeviceSpecPanelProps = {
  fields: readonly string[];
  exampleNote: string;
};

export function DeviceSpecPanel({ fields, exampleNote }: DeviceSpecPanelProps) {
  return (
    <div className="border border-hairline bg-surface/80 p-5 md:p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <p className="text-[10px] uppercase tracking-[0.28em] text-sand">
          NORYX VERIFIED
        </p>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
          {exampleNote}
        </p>
      </div>
      <ul className="space-y-0">
        {fields.map((field) => (
          <li
            key={field}
            className="flex items-center justify-between gap-4 border-t border-hairline py-3 first:border-t-0 first:pt-0"
          >
            <span className="text-xs uppercase tracking-[0.16em] text-muted">
              {field}
            </span>
            <span className="h-px flex-1 bg-hairline" aria-hidden />
            <span className="font-mono text-xs text-titanium/80">····</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
