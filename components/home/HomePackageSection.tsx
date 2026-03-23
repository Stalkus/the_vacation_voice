"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type PackageCardData = {
  id: string;
  image: string;
  alt: string;
  nights: string;
  rating: string;
  reviews: string;
  title: string;
  stops: string[];
  priceWas: string;
  save: string;
  priceNow: string;
};

type Props = {
  title: string;
  href?: string;
  packages: PackageCardData[];
  className?: string;
};

export function PackageCard({ pkg }: { pkg: PackageCardData }) {
  return (
    <article
      className={cn(
        "group/card w-[280px] flex-shrink-0 overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm transition-all duration-200 hover:shadow-md md:w-[300px]"
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.alt}
          fill
          className="object-cover transition-transform duration-200 group-hover/card:scale-[1.03]"
          sizes="300px"
        />
      </div>
      <div className="space-y-3 p-4">
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>{pkg.nights}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 font-medium text-amber-800">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {pkg.rating}
            <span className="font-normal text-muted-foreground">({pkg.reviews})</span>
          </span>
        </div>
        <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground md:text-base">
          {pkg.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {pkg.stops.map((s) => (
            <span
              key={s}
              className="rounded-md border border-border bg-muted/40 px-2 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap items-baseline gap-2 border-t border-border/60 pt-3 text-sm">
          <span className="text-muted-foreground line-through">{pkg.priceWas}</span>
          <span className="text-xs font-medium text-emerald-700">save {pkg.save}</span>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-foreground">{pkg.priceNow}</span>
          <span className="text-xs text-muted-foreground">/ Adult</span>
        </div>
        <Button className="w-full rounded-xl bg-primary font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90">
          Enquire
        </Button>
      </div>
    </article>
  );
}

export default function HomePackageSection({ title, href = "#", packages, className }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    rowRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className={cn("bg-white py-12 md:py-16", className)}>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">{title}</h2>
          <div className="flex items-center gap-3">
            <Link
              href={href}
              className="text-sm font-semibold text-primary transition-all duration-200 hover:underline"
            >
              View All
            </Link>
            <Button
              size="icon"
              className="h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-sm transition-all duration-200 hover:scale-105 hover:bg-primary/90"
              asChild
            >
              <Link href={href} aria-label={`View all ${title}`}>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <div className="hidden items-center gap-2 sm:flex">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full border-border shadow-sm transition-all duration-200"
                onClick={() => scrollBy(-320)}
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-9 w-9 rounded-full border-border shadow-sm transition-all duration-200"
                onClick={() => scrollBy(320)}
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div
          ref={rowRef}
          className="scrollbar-hide flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
