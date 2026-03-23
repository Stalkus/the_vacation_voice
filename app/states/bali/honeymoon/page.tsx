import type { Metadata } from "next";
import BaliHoneymoonPage from "@/components/destinations/BaliHoneymoonPage";

export const metadata: Metadata = {
  title: "Bali Honeymoon Packages | The Vacation Voice",
  description:
    "Book Bali honeymoon packages from India—curated stays, transfers, and experiences. Transparent pricing, expert planning, and on-trip support.",
  openGraph: {
    title: "Bali Honeymoon Packages | The Vacation Voice",
    description:
      "Romantic Bali itineraries for couples: Ubud, Seminyak, beaches, and culture. Request a custom quote.",
  },
};

export default function BaliHoneymoonRoutePage() {
  return <BaliHoneymoonPage />;
}
