type OsBoardProps = {
  modules: readonly string[];
  osName: string;
  tagline: string;
  sampleValues: readonly string[];
  conceptLabel: string;
};

export function OsBoard({
  modules,
  osName,
  tagline,
  sampleValues,
  conceptLabel,
}: OsBoardProps) {
  return (
    <div className="border border-hairline bg-surface p-5 md:p-8">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-hairline pb-5">
        <div>
          <p className="font-display text-base tracking-wide text-white md:text-lg">
            {osName}
          </p>
          <p className="mt-1 text-sm text-muted">{tagline}</p>
        </div>
        <span className="text-[10px] uppercase tracking-[0.24em] text-sand">
          {conceptLabel}
        </span>
      </div>

      <ul className="mb-6 flex flex-wrap gap-2">
        {sampleValues.map((value) => (
          <li
            key={value}
            className="border border-hairline px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted"
          >
            {value}
          </li>
        ))}
      </ul>

      <ul className="grid grid-cols-2 gap-px bg-hairline sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {modules.map((mod, i) => (
          <li
            key={mod}
            className="bg-bg px-3 py-4 text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.16em] text-titanium">
              {mod}
            </p>
            <p className="mt-2 font-mono text-[10px] tracking-[0.14em] text-muted">
              {sampleValues[i % sampleValues.length]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
