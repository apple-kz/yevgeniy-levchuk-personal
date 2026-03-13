import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.elevchuk.online";

  return [
    {
      url: "https://www.elevchuk.online",
      lastModified: new Date().toISOString(),
    },
  ];
}
