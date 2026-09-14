type EyebrowProps = {
  children: string;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`text-[11px] font-medium uppercase tracking-[0.28em] text-sand ${className}`}
    >
      {children}
    </p>
  );
}
