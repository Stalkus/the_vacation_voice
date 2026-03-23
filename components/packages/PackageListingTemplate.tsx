import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/home/HomePackageSection";
import type { PackageListingConfig } from "@/lib/package-listing-data";

type Props = {
  config: PackageListingConfig;
};

export default function PackageListingTemplate({ config }: Props) {
  return (
    <article className="min-h-screen bg-white">
      <section className="border-b border-border bg-zinc-50/90">
        <div className="container-width py-8 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            {config.breadcrumb.map((b) => (
              <span key={b.label} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                {b.href ? (
                  <Link href={b.href} className="transition-colors hover:text-primary">
                    {b.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{b.label}</span>
                )}
              </span>
            ))}
            <span className="flex items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              <span className="text-foreground">{config.title}</span>
            </span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,320px)] lg:items-start">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                {config.title}
              </h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-600">
                {config.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="rounded-xl bg-primary px-8 font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90"
                  asChild
                >
                  <Link href="/contact">Enquire now</Link>
                </Button>
                <Button variant="outline" className="rounded-xl border-border shadow-sm transition-all duration-200" asChild>
                  <Link href="#packages">View sample itineraries</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/80 shadow-sm lg:aspect-[4/5]">
              <Image
                src={config.heroImage}
                alt={config.heroAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="packages" className="container-width scroll-mt-24 py-12 md:py-16">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">Featured itineraries</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Indicative pricing—confirm inclusions and dates on enquiry.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {config.packages.map((pkg) => (
            <div key={pkg.id} className="flex justify-center">
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-zinc-50/50 py-10">
        <div className="container-width flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/15 bg-primary/5 px-6 py-8 text-center md:flex-row md:text-left">
          <p className="max-w-xl text-sm text-zinc-600">
            Need flights, visa guidance, or a fully custom route? Our team builds end-to-end plans for leisure,
            honeymoon, and corporate groups.
          </p>
          <Button className="shrink-0 rounded-xl shadow-sm" asChild>
            <Link href="/contact">Talk to an expert</Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
