type ConceptLabelProps = {
  children: string;
  className?: string;
};

/** Discreet label for conceptual renders and interfaces. */
export function ConceptLabel({ children, className = "" }: ConceptLabelProps) {
  return (
    <span
      className={`inline-flex items-center border border-hairline-strong bg-bg/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.24em] text-muted backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  );
}
