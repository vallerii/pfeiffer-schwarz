import type { NextConfig } from "next";

// 301-Weiterleitungen von der alten WordPress-Struktur (siehe SEO-Audit, Abschnitt 4)
const legacy: [string, string][] = [
  ["/hotelrenovierung-bad-laasphe", "/hotelrenovierung"],
  ["/bauarbeiten-bad-laasphe", "/bau-innenausbau"],
  ["/fliesen-bad-laasphe", "/bau-innenausbau/fliesenarbeiten"],
  ["/maler-bad-laasphe", "/bau-innenausbau/malerarbeiten"],
  ["/trockenbau-bad-laasphe", "/bau-innenausbau/trockenbau"],
  ["/innenausbau-bad-laasphe", "/bau-innenausbau/innenausbau"],
  ["/putz-bad-laasphe", "/bau-innenausbau/putz-estrich"],
  ["/estrich-bad-laasphe", "/bau-innenausbau/putz-estrich"],
  ["/sanitaer-bad-laasphe", "/bau-innenausbau/sanitaer"],
  ["/3d-zeichnungen-bad-laasphe", "/ueber-uns"],
  ["/gebaeudetrocknung-bad-laasphe", "/schadensanierung/gebaeudetrocknung"],
  ["/jobs", "/karriere"],
  ["/testimonial/:path*", "/referenzen"],
  ["/author/:path*", "/"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacy.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
