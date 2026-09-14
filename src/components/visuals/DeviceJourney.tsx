type JourneyStep = {
  label: string;
};

type DeviceJourneyProps = {
  steps: readonly JourneyStep[];
};

export function DeviceJourney({ steps }: DeviceJourneyProps) {
  return (
    <ol className="flex flex-col gap-0 sm:flex-row sm:flex-wrap sm:items-center sm:gap-0">
      {steps.map((step, index) => (
        <li key={step.label} className="flex items-center sm:contents">
          <div className="flex items-center gap-3 border border-hairline bg-bg px-4 py-2.5 sm:inline-flex">
            <span className="font-mono text-[10px] text-sand">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-titanium">
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 ? (
            <span
              className="mx-3 hidden text-sand/60 sm:inline"
              aria-hidden
            >
              →
            </span>
          ) : null}
          {index < steps.length - 1 ? (
            <span
              className="ml-5 block h-4 w-px bg-sand/40 sm:hidden"
              aria-hidden
            />
          ) : null}
        </li>
      ))}
    </ol>
  );
}
