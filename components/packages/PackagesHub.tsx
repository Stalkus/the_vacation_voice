import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { domesticMegaColumns, internationalMegaColumns } from "@/lib/nav-mega-data";
import { Button } from "@/components/ui/button";

export default function PackagesHub() {
  return (
    <div className="min-h-screen bg-white">
      <section className="border-b border-border bg-zinc-50/90">
        <div className="container-width py-10 md:py-14">
          <nav className="mb-4 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-1">/</span>
            <span className="text-foreground">Packages</span>
          </nav>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
            Tour packages worldwide
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-zinc-600">
            Browse India and international holidays—each page includes sample itineraries you can tailor. Inspired by
            how leading platforms like{" "}
            <a
              href="https://www.thrillophilia.com/"
              className="font-medium text-primary underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Thrillophilia
            </a>{" "}
            organise destinations, with The Vacation Voice&apos;s planning and support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button className="rounded-xl shadow-sm" asChild>
              <Link href="/packages/domestic">India packages</Link>
            </Button>
            <Button variant="outline" className="rounded-xl shadow-sm" asChild>
              <Link href="/packages/international">International packages</Link>
            </Button>
            <Button variant="outline" className="rounded-xl shadow-sm" asChild>
              <Link href="/contact">Plan with an expert</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="container-width py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <section>
            <h2 className="text-xl font-bold text-foreground">India</h2>
            <p className="mt-2 text-sm text-zinc-600">Regions, islands, and road-trip favourites.</p>
            <ul className="mt-6 space-y-2">
              {domesticMegaColumns.flatMap((c) => c.links).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2 py-2 text-sm text-foreground/90 transition-all hover:border-border hover:bg-zinc-50"
                  >
                    <span>{l.label}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="text-xl font-bold text-foreground">International</h2>
            <p className="mt-2 text-sm text-zinc-600">Long breaks, short breaks, and honeymoon ideas.</p>
            <ul className="mt-6 space-y-2">
              {internationalMegaColumns.flatMap((c) => c.links).map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center justify-between gap-2 rounded-lg border border-transparent px-2 py-2 text-sm text-foreground/90 transition-all hover:border-border hover:bg-zinc-50"
                  >
                    <span>{l.label}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
