type WhyIconName =
  | "integration"
  | "quality"
  | "traceability"
  | "distribution"
  | "intelligence";

export type { WhyIconName };

type WhyIconProps = {
  name: WhyIconName;
  className?: string;
};

export function WhyIcon({ name, className = "h-7 w-7" }: WhyIconProps) {
  const stroke = "currentColor";
  const common = {
    fill: "none",
    stroke,
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
      role="presentation"
    >
      {name === "integration" ? (
        <>
          <rect x="3" y="3" width="10" height="10" {...common} />
          <rect x="19" y="3" width="10" height="10" {...common} />
          <rect x="3" y="19" width="10" height="10" {...common} />
          <rect x="19" y="19" width="10" height="10" {...common} />
          <path d="M13 8h6M8 13v6M24 13v6M13 24h6" {...common} />
        </>
      ) : null}
      {name === "quality" ? (
        <>
          <path d="M16 3l3.2 6.5 7.2 1-5.2 5.1 1.2 7.2L16 19.8 9.6 22.8l1.2-7.2L5.6 10.5l7.2-1z" {...common} />
        </>
      ) : null}
      {name === "traceability" ? (
        <>
          <rect x="5" y="5" width="10" height="22" rx="1.5" {...common} />
          <path d="M18 10h9M18 16h9M18 22h6" {...common} />
          <circle cx="10" cy="23" r="1.2" fill={stroke} stroke="none" />
        </>
      ) : null}
      {name === "distribution" ? (
        <>
          <circle cx="16" cy="16" r="11" {...common} />
          <path d="M5 16h22M16 5c3.5 3.8 3.5 18.2 0 22M16 5c-3.5 3.8-3.5 18.2 0 22" {...common} />
        </>
      ) : null}
      {name === "intelligence" ? (
        <>
          <path d="M8 22V12M14 22V8M20 22V14M26 22V10" {...common} />
          <circle cx="8" cy="10" r="1.5" fill={stroke} stroke="none" />
          <circle cx="14" cy="6" r="1.5" fill={stroke} stroke="none" />
          <circle cx="20" cy="12" r="1.5" fill={stroke} stroke="none" />
          <circle cx="26" cy="8" r="1.5" fill={stroke} stroke="none" />
        </>
      ) : null}
    </svg>
  );
}
