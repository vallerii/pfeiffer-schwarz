import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Impressum", robots: { index: false } };

export default function Impressum() {
  return (
    <LegalPage title="Impressum">
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        {site.legalName}
        <br />
        {site.street}
        <br />
        {site.zip} {site.city}
      </p>
      <p>
        Vertreten durch die Geschäftsführer: Thomas Pfeiffer, Sascha Schwarz
        <br />
        Registergericht: Amtsgericht Siegen, HRB 12794
        <br />
        Umsatzsteuer-ID: DE346817248
      </p>
      <h2>Kontakt</h2>
      <p>
        Telefon: {site.phone}
        <br />
        E-Mail: {site.email}
      </p>
      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p className="todo inline-block">[Name, Anschrift – mit Kunden abstimmen und rechtlich prüfen lassen]</p>
    </LegalPage>
  );
}
