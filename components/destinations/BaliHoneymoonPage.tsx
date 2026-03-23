import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PackageCard } from "@/components/home/HomePackageSection";
import { baliFaqItems, baliHoneymoonPackages } from "@/lib/bali-honeymoon-data";

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-3xl space-y-4 text-base leading-relaxed text-zinc-600 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_p]:leading-relaxed">
      {children}
    </div>
  );
}

export default function BaliHoneymoonPage() {
  return (
    <article className="bg-white">
      {/* Hero band — Thrillophilia-style offer strip, TVV styling */}
      <section className="border-b border-border bg-zinc-50/90">
        <div className="container-width py-8 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <Link href="/packages/international" className="transition-colors hover:text-primary">
              International
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden />
            <span className="text-foreground">Bali honeymoon</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_minmax(0,280px)] lg:items-start">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                Limited-time offers on select dates
              </p>
              <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Bali honeymoon packages
              </h1>
              <p className="mt-4 text-lg text-zinc-600">
                Curated stays, private transfers, and experiences for two—planned by The Vacation Voice with
                transparent pricing and on-trip support.
              </p>
              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="text-sm text-muted-foreground">Packages from</span>
                <span className="text-3xl font-bold text-primary">INR 27,800</span>
                <span className="text-sm text-muted-foreground">/ person on select departures</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  className="rounded-xl bg-primary px-8 font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90"
                  asChild
                >
                  <Link href="/contact">Connect with an expert</Link>
                </Button>
                <Button variant="outline" className="rounded-xl border-border shadow-sm transition-all duration-200" asChild>
                  <Link href="#packages">View packages</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border/80 shadow-sm lg:aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1000&auto=format&fit=crop"
                alt="Bali rice terraces and tropical landscape"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 280px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-width section-padding border-b border-border/60">
        <Prose>
          <h2 className="mt-0 text-2xl text-foreground">Bali honeymoon packages from India</h2>
          <p>
            Whether you picture Ubud’s rice terraces and spa rituals or sunset beaches in Seminyak and Uluwatu,
            our Bali honeymoon itineraries balance romance, culture, and downtime. We handpick hotels, arrange
            airport transfers, and book experiences—so you focus on each other, not spreadsheets.
          </p>
          <p>
            Every package below can be tailored: add Nusa Penida day trips, cooking classes, volcano sunrise hikes,
            or extra nights in a private pool villa. Tell us your dates and city of departure—we’ll tailor flights
            and stays to match.
          </p>
        </Prose>
      </section>

      {/* Destinations */}
      <section className="container-width border-b border-border/60 py-12 md:py-16">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">Popular spots for couples</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Prose>
            <h3 className="mt-0 text-lg text-foreground">Ubud</h3>
            <p>
              The cultural heart of Bali—jungle cafés, art galleries, and sacred temples. Ideal for slow mornings,
              forest walks, and couples’ spa rituals.
            </p>
            <h3 className="text-lg text-foreground">Kuta & Seminyak</h3>
            <p>
              Sunsets, surf, and dining scene. Great for couples who want beach energy alongside day trips to
              temples and rice terraces.
            </p>
          </Prose>
          <Prose>
            <h3 className="mt-0 text-lg text-foreground">Nusa Penida</h3>
            <p>
              Dramatic cliffs and hidden beaches—perfect as a day or overnight add-on for adventurous pairs.
            </p>
            <h3 className="text-lg text-foreground">Jimbaran & Uluwatu</h3>
            <p>
              Cliff-top temples, seafood dinners on the sand, and quieter bays—ideal for a romantic finale to your
              trip.
            </p>
          </Prose>
        </div>
      </section>

      {/* Cities */}
      <section className="bg-zinc-50/80 py-12 md:py-16">
        <div className="container-width">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Departures from major Indian cities</h2>
          <p className="mt-3 max-w-3xl text-zinc-600">
            We structure itineraries around your nearest international hub. Direct options exist from select cities;
            others use one-stop connections via Singapore, Kuala Lumpur, or Bangkok—typical total travel time
            12–22 hours depending on routing.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Delhi NCR — wide choice of full-service and low-cost carriers",
              "Mumbai & Bengaluru — frequent one-stop connections",
              "Hyderabad, Chennai, Kolkata & more — curated routings",
            ].map((x) => (
              <li
                key={x}
                className="rounded-2xl border border-border/80 bg-white p-4 text-sm text-zinc-600 shadow-sm"
              >
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Visa + season */}
      <section className="container-width py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <Prose>
            <h2 className="mt-0 text-2xl text-foreground">Visa & entry</h2>
            <p>
              Many Indian passport holders use Indonesia’s visa-on-arrival or e-VOA for short leisure trips.
              Passport validity, fees, and stay length are set by Indonesian immigration—we share the latest
              checklist at booking so you land prepared.
            </p>
          </Prose>
          <Prose>
            <h2 className="mt-0 text-2xl text-foreground">When to go</h2>
            <p>
              <strong className="text-foreground">April–October:</strong> drier season, great for beaches and
              outdoor plans. <strong className="text-foreground">November–March:</strong> lush landscapes, fewer
              crowds, and attractive rates—pack a light rain layer.
            </p>
          </Prose>
        </div>
      </section>

      {/* Highlights */}
      <section className="border-t border-border/60 bg-zinc-50/50 py-12 md:py-16">
        <div className="container-width">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Experiences couples love</h2>
          <ul className="mt-6 grid gap-3 text-zinc-600 md:grid-cols-2">
            {[
              "Sunrise trek or jeep tour to Mount Batur viewpoints",
              "Couples’ spa & Balinese massage in Ubud",
              "Temple sunset at Uluwatu with Kecak dance",
              "Tegalalang rice terraces & jungle swing",
              "Snorkelling or day trip to Nusa Penida",
              "Candlelit dinner on the beach or cliff-side venue",
            ].map((item) => (
              <li key={item} className="flex gap-2 rounded-xl border border-border/60 bg-white px-4 py-3 text-sm shadow-sm">
                <span className="text-primary">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="container-width scroll-mt-24 py-12 md:py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">Featured Bali honeymoon packages</h2>
            <p className="mt-2 text-sm text-muted-foreground">Indicative pricing—confirm on enquiry for your dates.</p>
          </div>
          <Button variant="outline" className="rounded-full shadow-sm" asChild>
            <Link href="/contact">Request a custom quote</Link>
          </Button>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {baliHoneymoonPackages.map((pkg) => (
            <div key={pkg.id} className="flex justify-center">
              <PackageCard pkg={pkg} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-zinc-50/50 py-12 md:py-16">
        <div className="container-width max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Frequently asked questions</h2>
          <div className="mt-8 flex flex-col gap-3">
            {baliFaqItems.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl border border-border/80 bg-white p-4 shadow-sm transition-all duration-200 open:shadow-md"
              >
                <summary className="cursor-pointer list-none font-semibold text-foreground outline-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-baseline justify-between gap-2">
                    {item.q}
                    <span className="text-primary transition-transform group-open:rotate-180">▼</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 py-12 md:py-16">
        <div className="container-width flex flex-col items-center justify-between gap-6 rounded-3xl border border-primary/20 bg-primary/5 px-6 py-10 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-xl font-bold text-foreground md:text-2xl">Ready to plan your Bali honeymoon?</h2>
            <p className="mt-2 max-w-xl text-sm text-zinc-600">
              Share your travel dates and preferences—we’ll respond with a curated itinerary and clear inclusions.
            </p>
          </div>
          <Button
            className="shrink-0 rounded-xl bg-primary px-8 font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90"
            asChild
          >
            <Link href="/contact">Talk to us</Link>
          </Button>
        </div>
      </section>
    </article>
  );
}
