import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      disallow: ["/admin", "/checkout", "/thank-you/"],
    },
    sitemap: "https://4dearest.com/sitemap.xml",
  };
}
