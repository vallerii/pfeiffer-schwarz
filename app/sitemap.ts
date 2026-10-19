import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { tradeList } from "@/lib/trades";
import { articles } from "@/lib/ratgeber";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/hotelrenovierung", "/bau-innenausbau", ...tradeList.map((t) => `/bau-innenausbau/${t.slug}`), "/ratgeber", ...articles.map((a) => `/ratgeber/${a.slug}`)].map((path) => ({
    url: site.url + path,
    lastModified: new Date(),
  }));
}
