"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react";

const regions = [
  { label: "Europe", href: "/packages/international/europe" },
  { label: "Asia & Pacific", href: "/packages/international/asia-pacific" },
  { label: "Americas", href: "/packages/international/americas" },
  { label: "Middle East & Africa", href: "/packages/international/middle-east-africa" },
  { label: "Indian Ocean", href: "/packages/international/indian-ocean" },
  { label: "India & Himalayas", href: "/packages/domestic" },
] as const;

const company = [
  { label: "About us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Partner with us", href: "/partners" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Press", href: "/press" },
  { label: "Contact & support", href: "/contact" },
] as const;

const travellers = [
  { label: "Holiday packages", href: "/packages" },
  { label: "Hot deals", href: "/hot-deals" },
  { label: "Travel guides", href: "/guides" },
  { label: "Visa & entry tips", href: "/visa" },
  { label: "Corporate & MICE", href: "/corporate" },
] as const;

const social = [
  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: Twitter, href: "https://twitter.com", label: "X (Twitter)" },
  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
] as const;

const linkClass =
  "text-sm text-zinc-400 transition-all duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-sm";

const headingClass = "text-xs font-semibold uppercase tracking-[0.12em] text-primary";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950 text-zinc-300">
      <div className="container-width pt-16 pb-10 md:pt-20">
        <div className="mb-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-4">
            <div>
              <p className={headingClass}>The Vacation Voice</p>
              <p className="mt-3 text-lg font-semibold tracking-tight text-zinc-100">
                Global journeys, personal service
              </p>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              We&apos;re a global travel company designing trips across six continents—curated itineraries,
              vetted hotels, local experts, and round-the-clock support wherever you roam.
            </p>
            <div className="flex flex-wrap gap-2">
              {social.map(({ Icon, href, label }) => (
                <Button
                  key={label}
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border-white/10 bg-white/5 text-zinc-300 shadow-sm transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Regions */}
          <div className="lg:col-span-2">
            <h2 className={headingClass}>Explore by region</h2>
            <ul className="mt-6 flex flex-col gap-2">
              {regions.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h2 className={headingClass}>Company</h2>
            <ul className="mt-6 flex flex-col gap-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Travellers + newsletter */}
          <div className="space-y-10 sm:col-span-2 lg:col-span-4">
            <div>
              <h2 className={headingClass}>For travellers</h2>
              <ul className="mt-6 flex flex-col gap-2">
                {travellers.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={headingClass}>Stay updated</h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400">
                Get destination inspiration, limited-time fares, and member-only offers for trips worldwide.
              </p>
              <form
                className="mt-4 flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Email address"
                  className="h-11 border-white/10 bg-white/5 text-zinc-100 shadow-sm placeholder:text-zinc-500 focus-visible:ring-primary"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="h-11 w-11 shrink-0 rounded-lg bg-primary text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-zinc-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} The Vacation Voice. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="transition-colors duration-200 hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors duration-200 hover:text-primary">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="transition-colors duration-200 hover:text-primary">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
