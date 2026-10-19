import { TradePage, tradeMetadata } from "@/components/TradePage";
import { trades } from "@/lib/trades";

// Inhalte: lib/trades.ts → maler
export const metadata = tradeMetadata(trades.maler);

export default function Page() {
  return <TradePage t={trades.maler} />;
}
