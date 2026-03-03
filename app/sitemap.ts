import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.altastradaconsulting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/portfolio", "/specialties", "/contact"];

  const lastModified = new Date();

  return routes.map((path) => ({
    url: new URL(path || "/", siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}

