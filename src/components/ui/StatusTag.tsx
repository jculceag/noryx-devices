type Status = "planned" | "in-design" | "concept";

type StatusTagProps = {
  status: Status;
  label: string;
  className?: string;
};

export function StatusTag({ status, label, className = "" }: StatusTagProps) {
  const tone =
    status === "planned"
      ? "border-sand/40 text-sand"
      : status === "in-design"
        ? "border-titanium/40 text-titanium"
        : "border-hairline-strong text-muted";

  return (
    <span
      className={`inline-flex items-center border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.24em] ${tone} ${className}`}
    >
      {label}
    </span>
  );
}
