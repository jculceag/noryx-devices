"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries/en";
import type { Locale } from "@/i18n/locales";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { LocaleSwitch } from "@/components/layout/LocaleSwitch";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary["nav"];
};

export function Header({ locale, dict }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: `#company`, label: dict.company },
    { href: `#operations`, label: dict.operations },
    { href: `#technology`, label: dict.technology },
    { href: `#quality`, label: dict.quality },
    { href: `#global-network`, label: dict.globalNetwork },
    { href: `#contact`, label: dict.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-hairline bg-bg/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-noryx flex h-16 items-center justify-between gap-4 md:h-20">
        <Link
          href={`/${locale}`}
          className="relative z-10 flex items-center gap-2"
          onClick={() => setOpen(false)}
          aria-label="NORYX Devices"
        >
          <Logo priority className="h-7 w-auto md:h-8" />
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex"
          aria-label={dict.primaryNav}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <LocaleSwitch locale={locale} languageLabel={dict.language} />
          <ButtonLink href="#contact" variant="primary">
            {dict.contactUs}
          </ButtonLink>
        </div>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 cursor-pointer items-center justify-center border border-hairline lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? dict.closeMenu : dict.openMenu}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? dict.closeMenu : dict.openMenu}</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden>
            <span
              className={`h-px w-full bg-titanium transition-transform ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-full bg-titanium transition-transform ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-menu"
          className="border-t border-hairline bg-bg/95 backdrop-blur-md lg:hidden"
        >
          <nav
            className="container-noryx flex flex-col gap-1 py-6"
            aria-label={dict.mobileNav}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="cursor-pointer py-3 text-sm uppercase tracking-[0.2em] text-titanium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex items-center justify-between gap-4 border-t border-hairline pt-5">
              <LocaleSwitch locale={locale} languageLabel={dict.language} />
              <ButtonLink href="#contact" variant="primary">
                {dict.contactUs}
              </ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
