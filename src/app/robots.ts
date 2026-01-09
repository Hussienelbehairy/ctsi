import type { MetadataRoute } from "next";

const fallbackSiteUrl = "https://www.cuttosize-interiors.com";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : fallbackSiteUrl;

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
