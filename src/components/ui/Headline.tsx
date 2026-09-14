import type { ReactNode } from "react";

type HeadlineProps = {
  children: ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
  metallic?: boolean;
};

export function Headline({
  children,
  as: Tag = "h2",
  className = "",
  metallic = true,
}: HeadlineProps) {
  return (
    <Tag
      className={`font-display font-semibold tracking-tight leading-[1.05] ${
        metallic ? "text-metallic" : "text-white"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
