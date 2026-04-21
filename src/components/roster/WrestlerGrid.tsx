import { WrestlerCard, type WrestlerCardData } from "./WrestlerCard";

interface WrestlerGridProps {
  wrestlers: WrestlerCardData[];
}

export function WrestlerGrid({ wrestlers }: WrestlerGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {wrestlers.map((w) => (
        <WrestlerCard key={w.id} wrestler={w} />
      ))}
    </div>
  );
}
