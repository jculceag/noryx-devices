import type { Dictionary } from "@/i18n/dictionaries/en";

type OsDashboardProps = {
  dict: Dictionary["technology"]["dashboard"];
};

export function OsDashboard({ dict }: OsDashboardProps) {
  const nav = [
    dict.overview,
    dict.inventoryIntelligence,
    dict.supplierNetwork,
    dict.riskAssessment,
    dict.diagnosticScans,
    dict.alertCenter,
    dict.reportsAudit,
    dict.systemSettings,
  ];

  const kpis = [
    { label: dict.inventoryHealth, value: dict.sampleValue },
    { label: dict.supplierRisk, value: dict.demoValue },
    { label: dict.diagnosticCoverage, value: dict.sampleValue },
    { label: dict.openInvestigations, value: dict.placeholder },
  ];

  const diagnostics = [
    dict.stockoutRisk,
    dict.slowMovingStock,
    dict.qualityAlerts,
    dict.demandSignalGap,
  ];

  return (
    <div className="overflow-hidden border border-hairline bg-bg">
      <div className="grid lg:grid-cols-[220px_1fr]">
        <aside className="hidden border-r border-hairline bg-surface/60 p-5 lg:block">
          <p className="text-[10px] uppercase tracking-[0.22em] text-sand">
            {dict.brandMark}
          </p>
          <p className="mt-2 text-xs text-muted">{dict.title}</p>
          <ul className="mt-6 space-y-1">
            {nav.map((item, i) => (
              <li
                key={item}
                className={`px-3 py-2 text-[11px] uppercase tracking-[0.14em] ${
                  i === 0
                    ? "border border-hairline bg-bg text-white"
                    : "text-muted"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-hairline pt-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
              {dict.systemStatus}
            </p>
            <p className="mt-2 flex items-center gap-2 text-xs text-titanium">
              <span className="h-1.5 w-1.5 rounded-full bg-sand" aria-hidden />
              {dict.operational}
            </p>
          </div>
        </aside>

        <div className="p-5 md:p-7">
          <div className="mb-6 border-b border-hairline pb-5">
            <h3 className="font-display text-lg tracking-wide text-white">
              {dict.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{dict.subtitle}</p>
          </div>

          <div className="grid gap-px bg-hairline sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="bg-bg p-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                  {kpi.label}
                </p>
                <p className="mt-3 font-mono text-sm text-sand">{kpi.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-sand">
                {dict.inventoryDiagnostics}
              </p>
              <ul className="grid gap-px bg-hairline sm:grid-cols-2">
                {diagnostics.map((item) => (
                  <li key={item} className="bg-bg p-4">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-titanium">
                      {item}
                    </p>
                    <p className="mt-3 font-mono text-xs text-muted">
                      {dict.demoValue}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5">
              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-sand">
                  {dict.topPriorities}
                </p>
                <ul className="space-y-2">
                  {[dict.demoValue, dict.sampleValue, dict.placeholder].map(
                    (value, i) => (
                      <li
                        key={`priority-${i}`}
                        className="flex items-center justify-between border border-hairline px-3 py-2.5"
                      >
                        <span className="text-[11px] uppercase tracking-[0.14em] text-muted">
                          {dict.diagnosticScans}
                        </span>
                        <span className="font-mono text-[10px] text-sand">
                          {value}
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div>
                <p className="mb-3 text-[10px] uppercase tracking-[0.2em] text-sand">
                  {dict.recentActivity}
                </p>
                <ul className="space-y-2">
                  {[dict.sampleValue, dict.demoValue, dict.placeholder].map(
                    (value, i) => (
                      <li
                        key={`activity-${i}`}
                        className="border-t border-hairline pt-2 text-[11px] uppercase tracking-[0.14em] text-muted"
                      >
                        {value}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
