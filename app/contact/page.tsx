import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const metadata: Metadata = {
  title: "Contact & support | The Vacation Voice",
  description: "Reach our travel team for quotes, custom itineraries, and on-trip support.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-width py-12 md:py-16">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-1">/</span>
          <span className="text-foreground">Contact</span>
        </nav>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">Contact us</h1>
        <p className="mt-4 max-w-2xl text-zinc-600">
          Share your destination, dates, and travel style—we’ll reply with a tailored plan and next steps.
        </p>
        <form className="mt-10 max-w-xl space-y-4" action="#" method="post">
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground" htmlFor="name">
              Name
            </label>
            <Input id="name" name="name" required placeholder="Your name" className="h-11" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground" htmlFor="email">
              Email
            </label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" className="h-11" />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-foreground" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              placeholder="Where and when would you like to travel?"
            />
          </div>
          <Button type="submit" className="rounded-xl shadow-sm">
            Send enquiry
          </Button>
        </form>
        <p className="mt-8 text-sm text-muted-foreground">
          Prefer WhatsApp or phone? Add your preferred channel in the message—we’ll wire this form to your CRM in
          a later step.
        </p>
      </div>
    </div>
  );
}
