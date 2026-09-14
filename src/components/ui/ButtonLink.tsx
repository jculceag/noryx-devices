import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

const variants: Record<Variant, string> = {
  primary:
    "border border-sand/60 bg-sand/10 text-white hover:bg-sand/20 hover:border-sand",
  secondary:
    "border border-hairline-strong text-titanium hover:border-titanium hover:text-white",
  ghost: "border border-transparent text-muted hover:text-white",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  const isHash = href.startsWith("#");
  const classes = `inline-flex min-h-11 cursor-pointer items-center justify-center px-6 text-[12px] font-medium uppercase tracking-[0.22em] transition-colors duration-200 ${variants[variant]} ${className}`;

  if (isHash) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
