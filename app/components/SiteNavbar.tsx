"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type SiteNavbarProps = {
  active: "home" | "about" | "treatment" | "blog" | "contact";
  variant?: "transparent" | "solid";
};

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "treatment", label: "Treatment", href: "/treatments" },
  { id: "blog", label: "Blog", href: "/blog" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

function Logo({ bordered = false }: { bordered?: boolean }) {
  return (
    <Link
      href="/"
      className={`flex shrink-0 items-center rounded-sm bg-white px-2 py-1 shadow-sm ${
        bordered ? "border border-slate-300" : ""
      }`}
      aria-label="Dr. Vivek Kumar David home"
    >
      <Image
        src="/logo.png"
        alt="Dr. Vivek Kumar David"
        width={124}
        height={45}
        priority
        className="h-11 w-auto"
      />
    </Link>
  );
}

export function SiteNavbar({
  active,
  variant = "solid",
}: SiteNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isTransparent = variant === "transparent";
  const hasSolidDesktopHeader = !isTransparent || isScrolled;

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 8);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  const desktopWrapperClass = isTransparent
    ? `fixed inset-x-0 top-0 z-40 hidden transition-colors duration-300 md:block ${
        isScrolled
          ? "border-b border-[#d5e5f4] bg-white/95 shadow-sm backdrop-blur"
          : ""
      }`
    : "fixed inset-x-0 top-0 z-40 hidden border-b border-[#d5e5f4] bg-white/90 backdrop-blur md:block";
  const innerClass = isTransparent
    ? "mx-auto flex h-24 max-w-6xl items-center justify-between px-5"
    : "mx-auto flex h-[76px] max-w-6xl items-center justify-between px-5";
  const spacerClass = isTransparent ? "h-[70px] md:h-24" : "h-[70px] md:h-[76px]";
  const navClass = !hasSolidDesktopHeader
    ? "hidden items-center gap-5 text-base font-semibold text-white/90 md:flex"
    : "hidden items-center gap-5 text-sm font-medium text-[#2f6ba2] md:flex";
  const dividerClass = !hasSolidDesktopHeader
    ? "border-l border-white/45 pl-5"
    : "border-l border-[#b6d0e9] pl-5";
  const activeClass = !hasSolidDesktopHeader
    ? "font-bold text-white"
    : "font-bold text-[#123d6f]";
  const hoverClass = !hasSolidDesktopHeader
    ? "hover:text-white"
    : "hover:text-[#123d6f]";
  const contactClass = !hasSolidDesktopHeader
    ? "rounded border border-white/70 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
    : "rounded border border-[#2d7ec8] px-4 py-2 text-sm font-semibold text-[#2d7ec8] transition hover:bg-[#e8f3ff]";
  const activeContactClass = !hasSolidDesktopHeader
    ? "rounded border border-white px-4 py-2 text-sm font-bold text-white"
    : "rounded bg-[#2d7ec8] px-4 py-2 text-sm font-bold text-white shadow-sm";

  const desktopContent = (
    <>
      <Logo bordered={hasSolidDesktopHeader} />
      <nav className={navClass}>
        <Link
          className={active === "home" ? activeClass : hoverClass}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${dividerClass} ${
            active === "about" ? activeClass : hoverClass
          }`}
          href="/about"
        >
          About
        </Link>
        <Link
          className={`${dividerClass} ${
            active === "treatment" ? activeClass : hoverClass
          }`}
          href="/treatments"
        >
          Treatment
        </Link>
        <Link
          className={`${dividerClass} ${
            active === "blog" ? activeClass : hoverClass
          }`}
          href="/blog"
        >
          Blog
        </Link>
      </nav>
      <Link
        href="/contact"
        className={active === "contact" ? activeContactClass : contactClass}
      >
        Contact
      </Link>
    </>
  );

  const mobileHeader = (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[70px] items-center justify-between border-b border-slate-200 bg-[#f5f6fa] px-4 md:hidden">
      <Logo />
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-sm text-[#4a4a4a]"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-menu"
        onClick={() => setIsMenuOpen(true)}
      >
        <span className="flex h-6 w-6 flex-col justify-center gap-1.5" aria-hidden="true">
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
          <span className="block h-0.5 w-5 rounded-full bg-current" />
        </span>
      </button>
    </header>
  );

  const mobileMenu = isMenuOpen ? (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-[60] bg-white text-[#064990] md:hidden"
    >
      <div className="flex h-[66px] items-center justify-between border-b border-slate-300 px-4 shadow-[0_2px_4px_rgba(0,0,0,0.22)]">
        <p className="text-2xl font-bold leading-none">MENU</p>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center text-black"
          aria-label="Close menu"
          onClick={() => setIsMenuOpen(false)}
        >
          <span className="relative block h-6 w-6" aria-hidden="true">
            <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-current" />
            <span className="absolute left-1/2 top-1/2 h-0.5 w-5 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-current" />
          </span>
        </button>
      </div>
      <nav className="px-4 pt-6 text-xl">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={`block border-b border-slate-200 px-2 py-[18px] ${
              active === item.id ? "font-bold" : "font-normal"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  ) : null;

  if (isTransparent) {
    return (
      <>
        {mobileHeader}
        {mobileMenu}
        <header className={desktopWrapperClass}>
          <div className={innerClass}>{desktopContent}</div>
        </header>
        <div className={spacerClass} aria-hidden="true" />
      </>
    );
  }

  return (
    <>
      {mobileHeader}
      {mobileMenu}
      <header className={desktopWrapperClass}>
        <div className={innerClass}>{desktopContent}</div>
      </header>
      <div className={spacerClass} aria-hidden="true" />
    </>
  );
}
