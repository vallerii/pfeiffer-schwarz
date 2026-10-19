import { NextResponse } from "next/server";

/**
 * Empfängt Anfragen aus Quiz und Formularen.
 * TODO: an E-Mail (z. B. Resend/SMTP) oder CRM anbinden. Foto-Uploads benötigen zusätzlich einen Speicher.
 */
export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data) return NextResponse.json({ ok: false }, { status: 400 });
  console.info("[anfrage]", JSON.stringify(data));
  return NextResponse.json({ ok: true });
}
