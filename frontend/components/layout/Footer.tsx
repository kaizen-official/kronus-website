import { Youtube, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const FOOTER_LINKS = {
  Properties: ["Apartments", "Villas", "Plots", "Commercial", "Penthouses"],
  Company: ["Our Story", "Team", "Careers", "Press"],
  Help: ["Contact", "FAQ", "Privacy Policy", "Terms"],
};

const SOCIALS = [
  { icon: <Youtube className="w-4 h-4" />, href: "https://www.youtube.com/@kronusinfratech", label: "YouTube" },
  { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/kronus_infratech", label: "Instagram" },
  { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/Kronusinfra", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-warm-bg pt-20 pb-8 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image src="/logo.png" alt="Kronus logo" width={200} height={40} />
            <p className="text-sm text-dark-gray/60 leading-relaxed max-w-xs my-6">
              Rooted in Sonipat. Driven by integrity. Building the addresses families pass down through generations.
            </p>
            <nav aria-label="Social media links" className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow Kronus on ${s.label}`}
                  className="w-9 h-9 rounded-lg border border-dark-gray/8 flex items-center justify-center text-spanish-gray hover:text-teal hover:border-teal/30 transition-colors"
                >
                  {s.icon}
                </Link>
              ))}
            </nav>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <nav key={heading} aria-label={`${heading} links`}>
              <h4 className="text-sm font-semibold text-dark-gray mb-4 font-heading">{heading}</h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-dark-gray/60 hover:text-teal transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Divider */}
        <div className="brand-rule mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-spanish-gray">&copy; 2026 Kronus Infratech &amp; Consultants. All rights reserved.</p>
          <p className="text-xs text-spanish-gray">Sonipat, Haryana &middot; RERA Registered</p>
        </div>
      </div>
    </footer>
  );
}
