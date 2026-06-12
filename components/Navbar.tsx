"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import RequestDemoButton from "@/components/RequestDemoButton";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 shadow-lg backdrop-blur-sm"
          : "bg-navy/0 backdrop-blur-0"
      }`}
    >
      <nav className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between sm:h-20">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-base font-bold text-white">
            R
          </span>
          <span className="text-lg font-bold text-white sm:text-xl">
            RMN<span className="text-accent">Max</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="https://app.rmnmax.co.za"
            className="text-sm font-semibold text-white/80 transition hover:text-white"
          >
            Login
          </a>
          <RequestDemoButton className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-dark">
            Request Demo
          </RequestDemoButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-white lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-6 w-6"
          >
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-navy px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://app.rmnmax.co.za"
              className="text-sm font-semibold text-white/80 transition hover:text-white"
            >
              Login
            </a>
            <RequestDemoButton className="w-full rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-dark">
              Request Demo
            </RequestDemoButton>
          </div>
        </div>
      )}
    </header>
  );
}
