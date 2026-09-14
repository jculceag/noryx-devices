import Image from "next/image";

type LogoProps = {
  className?: string;
  variant?: "default" | "light";
  priority?: boolean;
};

/**
 * Official lockup from /public/brand.
 * - noryx-logo.svg (dark backgrounds)
 * - noryx-logo-light.svg (light backgrounds)
 * - noryx-symbol.svg (icon only)
 */
export function Logo({
  className = "h-8 w-auto",
  variant = "default",
  priority = false,
}: LogoProps) {
  const src =
    variant === "light"
      ? "/brand/noryx-logo-light.svg"
      : "/brand/noryx-logo.svg";

  return (
    <Image
      src={src}
      alt="NORYX Devices"
      width={224}
      height={38}
      className={className}
      priority={priority}
    />
  );
}

export function Symbol({
  className = "h-8 w-8",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/brand/noryx-symbol.svg"
      alt=""
      width={40}
      height={40}
      className={className}
      priority={priority}
      aria-hidden
    />
  );
}
