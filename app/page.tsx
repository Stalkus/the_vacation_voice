import Hero from "@/components/home/Hero";
import DestinationCategories from "@/components/home/DestinationCategories";
import HomePackageSection from "@/components/home/HomePackageSection";
import AwardBanner from "@/components/home/AwardBanner";
import TrendingDestinations from "@/components/home/TrendingDestinations";
import { andamanPackages, europePackages } from "@/lib/home-package-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Hero />
      <DestinationCategories />
      <HomePackageSection title="Europe" href="/packages/europe" packages={europePackages} />
      <HomePackageSection
        title="Andaman"
        href="/packages/andaman"
        packages={andamanPackages}
        className="bg-zinc-50"
      />
      <AwardBanner />
      <TrendingDestinations />
    </div>
  );
}
