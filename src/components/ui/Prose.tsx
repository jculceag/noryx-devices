import type { ReactNode } from "react";

type ProseProps = {
  children: ReactNode;
  className?: string;
};

export function Prose({ children, className = "" }: ProseProps) {
  return (
    <p
      className={`measure text-base leading-relaxed text-muted md:text-[17px] ${className}`}
    >
      {children}
    </p>
  );
}
