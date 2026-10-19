import { TradePage, tradeMetadata } from "@/components/TradePage";
import { trades } from "@/lib/trades";

// Inhalte: lib/trades.ts → innenausbau
export const metadata = tradeMetadata(trades.innenausbau);

export default function Page() {
  return <TradePage t={trades.innenausbau} />;
}
