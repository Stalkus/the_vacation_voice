"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search } from "lucide-react";

const navLinks = [
  { href: "/packages/india", label: "India Packages" },
  { href: "/packages/international", label: "International Packages" },
  { href: "/activities", label: "Activities" },
  { href: "/corporate", label: "MICE" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white shadow-sm">
      <div className="relative mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 md:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 transition-opacity duration-200 hover:opacity-90"
        >
          <span
            className="hidden h-9 w-9 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-lg shadow-sm sm:flex"
            aria-hidden
          >
            ✈
          </span>
          <span className="text-lg font-bold tracking-tight text-primary md:text-xl">The Vacation Voice</span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-[15px] font-medium text-foreground/85 lg:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap transition-all duration-200 hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-lg border-border bg-white shadow-sm transition-all duration-200 hover:bg-zinc-50"
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px]" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="hidden h-10 gap-2 rounded-lg border-border bg-white px-2.5 text-sm font-medium shadow-sm transition-all duration-200 hover:bg-zinc-50 sm:inline-flex"
              >
                <span className="text-base leading-none" aria-hidden>
                  🇮🇳
                </span>
                <span>INR ₹</span>
                <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="transition-colors duration-200">
                <span className="mr-2">🇮🇳</span> INR ₹
              </DropdownMenuItem>
              <DropdownMenuItem className="transition-colors duration-200">
                <span className="mr-2">🇺🇸</span> USD $
              </DropdownMenuItem>
              <DropdownMenuItem className="transition-colors duration-200">
                <span className="mr-2">🇪🇺</span> EUR €
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" className="px-2 text-sm font-semibold shadow-none sm:px-3" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
