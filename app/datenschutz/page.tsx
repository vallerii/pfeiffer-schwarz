import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = { title: "Datenschutz", robots: { index: false } };

export default function Datenschutz() {
  return (
    <LegalPage title="Datenschutzerklärung">
      <p className="todo inline-block">
        [Datenschutzerklärung von der bestehenden Website übernehmen und für neue Dienste (Formulare, Foto-Upload, Hosting, Analytics) aktualisieren.]
      </p>
    </LegalPage>
  );
}
