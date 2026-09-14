type FlowRailProps = {
  steps: readonly string[];
};

export function FlowRail({ steps }: FlowRailProps) {
  return (
    <ol className="relative">
      <div
        className="absolute left-0 right-0 top-3 hidden h-px bg-hairline md:block"
        aria-hidden
      />
      <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-8 md:gap-3">
        {steps.map((step, index) => (
          <li key={step} className="relative flex gap-4 md:flex-col md:gap-3">
            <span className="relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center md:mt-0">
              <span className="h-1.5 w-1.5 rounded-full bg-sand" />
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm text-titanium">{step}</p>
            </div>
          </li>
        ))}
      </div>
    </ol>
  );
}
