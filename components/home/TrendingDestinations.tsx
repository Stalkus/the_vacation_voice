"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const trending = [
  {
    title: "Europe",
    subtitle: "Old World Charm",
    image:
      "https://images.unsplash.com/photo-1499856871940-a09627c6d7db?q=80&w=2020&auto=format&fit=crop",
  },
  {
    title: "Dubai",
    subtitle: "City of Life",
    image:
      "https://images.unsplash.com/photo-1547234935-80c7142ee969?q=80&w=2074&auto=format&fit=crop",
  },
  {
    title: "Japan",
    subtitle: "Rising Sun",
    image:
      "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Singapore",
    subtitle: "Lion City",
    image:
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Maldives",
    subtitle: "Island Bliss",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1965&auto=format&fit=crop",
  },
];

export default function TrendingDestinations() {
  return (
    <section className="bg-white py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Trending destinations
          </h2>
          <div className="flex gap-2">
            <Button
              size="icon"
              variant="outline"
              className="h-9 w-9 rounded-full border-border"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              className="h-9 w-9 rounded-full border-border"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {trending.map((dest) => (
            <motion.div key={dest.title} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
              <Link
                href="#"
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-border/80 bg-muted/20 shadow-sm"
              >
                <Image
                  src={dest.image}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width:768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-0 right-0 px-3 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-white/75">
                    {dest.subtitle}
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white md:text-xl">{dest.title}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
