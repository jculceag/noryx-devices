type ProcessFlowProps = {
  steps: readonly string[];
};

/** Visual 8-step technical process rail with device-oriented markers. */
export function ProcessFlow({ steps }: ProcessFlowProps) {
  return (
    <ol className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step}
          className="group relative border border-hairline bg-surface/40 p-5 transition-colors duration-200 hover:border-sand/30 hover:bg-surface"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="font-mono text-[11px] tracking-[0.2em] text-sand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full bg-titanium/40 transition-colors group-hover:bg-sand"
              aria-hidden
            />
          </div>
          <p className="text-sm uppercase tracking-[0.14em] text-titanium">
            {step}
          </p>
          {index < steps.length - 1 ? (
            <span
              className="pointer-events-none absolute -right-px top-1/2 z-10 hidden h-px w-3 -translate-y-1/2 bg-sand/40 lg:block"
              aria-hidden
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
