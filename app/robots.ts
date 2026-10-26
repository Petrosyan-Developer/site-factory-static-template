import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const hostname = process.env.SITE_HOSTNAME ?? "reference.invalid";
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `https://${hostname}/sitemap.xml`,
  };
}
