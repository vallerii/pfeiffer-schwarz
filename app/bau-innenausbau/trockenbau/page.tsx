import { TradePage, tradeMetadata } from "@/components/TradePage";
import { trades } from "@/lib/trades";

// Inhalte: lib/trades.ts → trockenbau
export const metadata = tradeMetadata(trades.trockenbau);

export default function Page() {
  return <TradePage t={trades.trockenbau} />;
}
