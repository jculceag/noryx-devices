import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  /** Compact rhythm for mid-page operational sections. */
  density?: "default" | "compact";
};

export function Section({
  id,
  children,
  className = "",
  containerClassName = "",
  density = "default",
}: SectionProps) {
  const padding =
    density === "compact"
      ? "py-16 md:py-24 lg:py-28"
      : "py-20 md:py-28 lg:py-36";

  return (
    <section id={id} className={`relative ${padding} ${className}`}>
      <div className={`container-noryx ${containerClassName}`}>{children}</div>
    </section>
  );
}
