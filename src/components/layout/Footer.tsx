import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/locales";
import { Logo } from "@/components/ui/Logo";
import { HairlineRule } from "@/components/ui/HairlineRule";

type FooterProps = {
  locale: Locale;
  dict: Dictionary["footer"];
};

export function Footer({ locale, dict }: FooterProps) {
  const links = [
    { href: "#company", label: dict.links.company },
    { href: "#operations", label: dict.links.operations },
    { href: "#technology", label: dict.links.technology },
    { href: "#quality", label: dict.links.quality },
    { href: "#contact", label: dict.links.contact },
    { href: `/${locale}/privacy`, label: dict.links.privacy },
  ];

  return (
    <footer className="border-t border-hairline bg-bg pb-10 pt-16">
      <div className="container-noryx">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo className="h-8 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-muted">{dict.tagline}</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-sand">
              {dict.domain}
            </p>
          </div>

          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-muted">
              {dict.navigateLabel}
            </p>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      className="cursor-pointer text-sm text-titanium transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="cursor-pointer text-sm text-titanium transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-muted">
              {dict.regionsLabel}
            </p>
            <ul className="space-y-2">
              {dict.regions.map((region) => (
                <li key={region} className="text-sm text-titanium">
                  {region}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <HairlineRule className="my-10" />

        <p className="max-w-3xl text-xs leading-relaxed text-muted">
          {dict.stageNote}
        </p>

        <p className="mt-6 text-xs text-muted/80">{dict.copyright}</p>
      </div>
    </footer>
  );
}
