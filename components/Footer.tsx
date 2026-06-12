import Link from "next/link";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
];

const companyLinks = [
  { label: "Login", href: "https://app.rmnmax.co.za" },
  { label: "Contact", href: "mailto:roynaude.roy@gmail.com" },
];

const legalLinks = [
  { label: "Privacy Policy (POPIA)", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer id="about" className="bg-navy-dark">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-base font-bold text-white">
                R
              </span>
              <span className="text-lg font-bold text-white">
                RMN<span className="text-accent">Max</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              RMNMax helps South African employers meet their Occupational
              Health & Safety Act obligations with automated reporting, AI
              hazard identification, and audit-ready compliance records —
              all in one platform.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/50 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/50 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/50 transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} RMNMax. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-white/40">
            <span>POPIA compliant</span>
            <span className="text-white/20">&bull;</span>
            <span>Built in South Africa 🇿🇦</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
