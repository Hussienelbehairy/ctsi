import type { MetadataRoute } from "next";

const fallbackSiteUrl = "https://www.cuttosize-interiors.com";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : fallbackSiteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const base = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;

  return [
    {
      url: `${base}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
