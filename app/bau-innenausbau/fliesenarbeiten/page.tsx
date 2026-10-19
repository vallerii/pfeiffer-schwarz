import { TradePage, tradeMetadata } from "@/components/TradePage";
import { trades } from "@/lib/trades";

// Inhalte: lib/trades.ts → fliesen
export const metadata = tradeMetadata(trades.fliesen);

export default function Page() {
  return <TradePage t={trades.fliesen} />;
}
