import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Exclusive experiences | The Vacation Voice",
  description: "Private tours, boutique stays, and members-only departures—crafted by our global travel team.",
};

export default function ExclusivePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-width py-12 md:py-20">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span className="text-foreground">Exclusive</span>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">Exclusive travel</h1>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600">
          Hand-crafted itineraries with premium stays, private transfers, and priority support—ideal for honeymoons,
          milestone trips, and celebrations. Tell us your vision; we’ll build the journey.
        </p>
        <Button className="mt-8 rounded-xl shadow-sm" asChild>
          <Link href="/contact">Request a private consultation</Link>
        </Button>
      </div>
    </div>
  );
}
