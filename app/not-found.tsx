import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap max-w-3xl">
        <p className="num font-display text-7xl font-extrabold text-blue">404</p>
        <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">Diese Seite ist noch im Bau.</h1>
        <p className="lead mt-6">
          Wir bauen die neue Website Schritt für Schritt aus. Bis dahin helfen wir Ihnen gern persönlich weiter.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Zur Startseite
          </Link>
          <a href={site.phoneHref} className="btn-ghost num">
            {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
