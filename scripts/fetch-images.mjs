// Lädt die vorhandenen Projektfotos von der aktuellen Website nach public/img.
// Läuft automatisch vor `npm run dev` und `npm run build`; bereits vorhandene Dateien werden übersprungen.
// Später einfach durch eigene, optimierte Fotos mit gleichem Dateinamen ersetzen.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const BASE = "https://www.pfeiffer-schwarz.com/wp-content/uploads/";
const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "img");

const IMAGES = {
  // Hotel (vorhandene Website-Bilder, teils Stock – durch echte Projekte ersetzen)
  "hotel-zimmer.jpg": "2023/03/hotelzimmer-saniert-1.jpg",
  "hotel-zimmer-2.jpg": "2023/03/hochwertige-hotelrenovierung.jpg",
  "hotel-bad.jpg": "2023/03/Spabereich-eines-Hotels-1.jpg",
  "hotel-bad-2.jpg": "2021/02/Raumgestaltung.jpg",
  "hotel-bad-3.jpg": "2023/03/badgestaltung-hotelsanierung-1.jpg",
  "hotel-spa.jpg": "2023/03/wellnessbereich-hotel.jpg",
  "hotel-terrasse.jpg": "2023/03/hotels-zum-wohlfuehlen.jpg",
  // Bau & Innenausbau (eigene Projektfotos 2025)
  "team-einsatz.jpg": "2025/09/IMG_2002.jpg",
  "team-flotte.jpg": "2021/02/Team.jpg",
  "3d-planung.jpg": "2021/02/3D-Zeichnungen.jpg",
  "fliesen-bad-1.jpg": "2025/09/IMG_9296.jpg",
  "fliesen-dusche-1.jpg": "2025/09/37d3dd42-da8b-4c64-aa86-3b8b226d97d7.jpg",
  "fliesen-dusche-2.jpg": "2025/09/1d8f5629-b9f7-4f83-8e6d-cc4f893c3cae.jpg",
  "fliesen-dusche-3.jpg": "2025/09/IMG_9290.jpg",
  "fliesen-dusche-4.jpg": "2025/09/IMG_6726.jpg",
  "fliesen-wc.jpg": "2025/09/IMG_9279.jpg",
  "fliesen-waschtisch.jpg": "2025/09/33190496-2c81-4f9d-8351-6c555dfff39b.jpg",
  "fliesen-bad-2.jpg": "2025/09/IMG_9294.jpg",
  "fliesen-bad-3.jpg": "2025/09/IMG_20230416_124703.jpg",
  "fliesen-boden.jpg": "2021/02/Fliesenboden2.jpg",
  "innenausbau-1.jpg": "2025/09/IMG_9367.jpg",
  "innenausbau-2.jpg": "2025/09/IMG_9362.jpg",
  "innenausbau-3.jpg": "2025/09/IMG_9378.jpg",
  "innenausbau-4.jpg": "2025/09/IMG_9343.jpg",
  "maler-1.jpg": "2025/09/IMG_9373.jpg",
  "maler-2.jpg": "2025/09/IMG_2056.jpg",
  "maler-3.jpg": "2025/09/IMG_7436.jpg",
  "trockenbau-1.jpg": "2021/02/Trockenbau-1.jpg",
  "putz-1.jpg": "2021/02/Putz-1.jpg",
  "estrich-1.jpg": "2025/09/IMG_8377.jpg",
  "sanitaer-1.jpg": "2025/09/IMG_4926.jpg",
  "sanitaer-2.jpg": "2025/09/eda715bb-ac9e-43cf-a0c0-2938aaa7d447.jpg",
  "hotel-sauna.jpg": "2023/03/sauna-landschaften.jpg",
  "hotel-pool.jpg": "2023/03/schwimmbaeder-hotels.jpg",
  "vb-premiumpartner.jpg": "2023/03/premiumpartner-villeroy-boch.jpg",
  "maler-4.jpg": "2025/09/IMG_2048.jpg",
  "maler-5.jpg": "2025/09/IMG_2034.jpg",
  "maler-6.jpg": "2025/09/IMG_7361.jpg",
  "innenausbau-5.jpg": "2025/09/IMG_9394.jpg",
  "innenausbau-6.jpg": "2025/09/IMG_9342.jpg",
  "innenausbau-7.jpg": "2025/09/IMG_9478.jpg",
  "trockenbau-2.jpg": "2021/02/Trockenbau2.jpg",
  "trockenbau-3.jpg": "2021/02/Trockenbau3.jpg",
  "trockenbau-4.jpg": "2021/02/Trockenbau4.jpg",
  "trockenbau-5.jpg": "2021/02/Bilder-quer.jpg",
  "putz-2.jpg": "2021/02/Putz2.jpg",
  "putz-3.jpg": "2021/02/Putz3.jpg",
  "putz-4.jpg": "2021/02/Putz4.jpg",
  "putz-5.jpg": "2021/02/Putz5.jpg",
  "putz-6.jpg": "2021/02/Putz6.jpg",
  "sanitaer-3.jpg": "2025/09/IMG_4928.jpg",
};

mkdirSync(OUT, { recursive: true });
const missing = Object.entries(IMAGES).filter(([name]) => !existsSync(join(OUT, name)));
if (missing.length === 0) process.exit(0);

console.log(`[images] Lade ${missing.length} Fotos von pfeiffer-schwarz.com …`);
let ok = 0;
await Promise.all(
  missing.map(async ([name, path]) => {
    try {
      const res = await fetch(BASE + path, { signal: AbortSignal.timeout(30000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      writeFileSync(join(OUT, name), Buffer.from(await res.arrayBuffer()));
      ok++;
    } catch (e) {
      console.warn(`[images] ${name}: ${e.message}`);
    }
  }),
);
console.log(`[images] ${ok}/${missing.length} geladen.`);
