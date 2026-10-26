import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const hostname = process.env.SITE_HOSTNAME ?? "reference.invalid";
  return ["/", "/about/"].map((route) => ({
    url: `https://${hostname}${route}`,
    lastModified: new Date("2026-01-01T00:00:00Z"),
  }));
}
