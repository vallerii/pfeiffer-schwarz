import { TradePage, tradeMetadata } from "@/components/TradePage";
import { trades } from "@/lib/trades";

// Inhalte: lib/trades.ts → sanitaer
export const metadata = tradeMetadata(trades.sanitaer);

export default function Page() {
  return <TradePage t={trades.sanitaer} />;
}
