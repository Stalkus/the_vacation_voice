import type { Metadata } from "next";
import PackageListingTemplate from "@/components/packages/PackageListingTemplate";
import PackagesHub from "@/components/packages/PackagesHub";
import { collectPackagePathsFromNav, getPackageListingConfig } from "@/lib/package-listing-data";

type Props = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = true;

export async function generateStaticParams() {
  const paths = collectPackagePathsFromNav();
  return [{ slug: [] }, ...paths.map((p) => ({ slug: p.split("/").filter(Boolean) }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!slug?.length) {
    return {
      title: "Tour Packages | The Vacation Voice",
      description:
        "Explore India and international holiday packages—curated itineraries, transparent pricing, and expert support.",
    };
  }
  const key = slug.join("/");
  const config = getPackageListingConfig(key);
  return {
    title: `${config.title} | The Vacation Voice`,
    description: config.metaDescription,
  };
}

export default async function PackagesCatchAllPage({ params }: Props) {
  const { slug } = await params;
  if (!slug?.length) {
    return <PackagesHub />;
  }
  const key = slug.join("/");
  const config = getPackageListingConfig(key);
  return <PackageListingTemplate config={config} />;
}
