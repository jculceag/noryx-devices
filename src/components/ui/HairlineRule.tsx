type HairlineRuleProps = {
  className?: string;
};

export function HairlineRule({ className = "" }: HairlineRuleProps) {
  return <div className={`h-px w-full bg-hairline ${className}`} aria-hidden />;
}
