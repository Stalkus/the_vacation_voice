import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Flights | The Vacation Voice",
  description: "Book international and domestic flights with your holiday—one team for air and land.",
};

export default function FlightsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-width py-12 md:py-20">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span className="text-foreground">Flights</span>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">Flights</h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          Bundle flights with your package or book land-only—we coordinate timings, baggage, and airport transfers so
          your trip starts smoothly. Share routes and dates for a quote.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button className="rounded-xl shadow-sm" asChild>
            <Link href="/contact">Get a flight quote</Link>
          </Button>
          <Button variant="outline" className="rounded-xl shadow-sm" asChild>
            <Link href="/packages">Browse packages</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
