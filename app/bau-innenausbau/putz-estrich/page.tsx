import { TradePage, tradeMetadata } from "@/components/TradePage";
import { trades } from "@/lib/trades";

// Inhalte: lib/trades.ts → putzEstrich
export const metadata = tradeMetadata(trades.putzEstrich);

export default function Page() {
  return <TradePage t={trades.putzEstrich} />;
}
