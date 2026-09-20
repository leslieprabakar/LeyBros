import type { MetadataRoute } from "next";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();
  const routes = ["", "/web", "/ai", "/market-insight", "/about", "/contact"];
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: now, changeFrequency: "weekly", priority: r === "" ? 1 : 0.8 }));
}
