"use client";

import { useRef } from "react";
import {
  ChevronRight,
  Flame,
  Landmark,
  Palmtree,
  Building2,
  Mountain,
  Waves,
  MapPin,
  Tent,
  UtensilsCrossed,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Cat = {
  id: string;
  label: string;
  icon: React.ElementType;
  trending?: boolean;
};

const categories: Cat[] = [
  { id: "explore", label: "Explore", icon: Flame },
  { id: "europe", label: "Europe", icon: Landmark },
  { id: "japan", label: "Japan", icon: Sparkles, trending: true },
  { id: "singapore", label: "Singapore", icon: Building2, trending: true },
  { id: "maldives", label: "Maldives", icon: Palmtree, trending: true },
  { id: "ne", label: "North East India", icon: Mountain },
  { id: "dubai", label: "Dubai", icon: Building2, trending: true },
  { id: "thailand", label: "Thailand", icon: UtensilsCrossed },
  { id: "vietnam", label: "Vietnam", icon: MapPin },
  { id: "norway", label: "Norway", icon: Waves, trending: true },
  { id: "rajasthan", label: "Rajasthan", icon: Landmark },
  { id: "bali", label: "Bali", icon: Palmtree },
  { id: "kerala", label: "Kerala", icon: Waves },
  { id: "andaman", label: "Andaman", icon: Palmtree },
  { id: "ladakh", label: "Ladakh", icon: Mountain },
  { id: "kashmir", label: "Kashmir", icon: Tent, trending: true },
  { id: "bhutan", label: "Bhutan", icon: Mountain },
  { id: "spiti", label: "Spiti Valley", icon: Mountain },
];

export default function DestinationCategories() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (delta: number) => {
    scrollerRef.current?.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="relative border-b border-border/80 bg-white pb-2 pt-4">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative flex items-stretch gap-2">
          <div
            ref={scrollerRef}
            className="scrollbar-hide flex flex-1 gap-10 overflow-x-auto pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((c) => {
              const Icon = c.icon;
              const active = c.id === "explore";
              return (
                <Button
                  key={c.id}
                  type="button"
                  variant="ghost"
                  className={cn(
                    "group flex h-auto min-w-[76px] flex-shrink-0 flex-col items-center gap-2 rounded-xl px-1 py-2 text-center shadow-none transition-all duration-200 hover:bg-zinc-50",
                    active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "relative flex h-12 w-12 items-center justify-center rounded-2xl border bg-white shadow-sm transition-all duration-200",
                      active
                        ? "border-primary/35 bg-primary/5"
                        : "border-border group-hover:border-primary/25"
                    )}
                  >
                    {c.trending && (
                      <span className="absolute -top-2.5 left-1/2 z-[1] flex -translate-x-1/2 items-center gap-0.5 whitespace-nowrap rounded bg-primary px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wide text-primary-foreground shadow-sm">
                        <TrendingUp className="h-2.5 w-2.5" aria-hidden />
                        Trending
                      </span>
                    )}
                    <Icon
                      className={cn(
                        "h-6 w-6",
                        active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                      )}
                      strokeWidth={1.5}
                    />
                  </span>
                  <span className="text-xs font-medium leading-tight text-foreground">{c.label}</span>
                  <span
                    className={cn(
                      "h-1 w-10 rounded-full transition-all duration-200",
                      active ? "bg-primary" : "opacity-0"
                    )}
                    aria-hidden
                  />
                </Button>
              );
            })}
          </div>
          <div className="flex flex-shrink-0 items-start pt-1">
            <Button
              type="button"
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border-border shadow-sm transition-all duration-200 hover:bg-zinc-50"
              aria-label="Scroll categories"
              onClick={() => scrollBy(280)}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
