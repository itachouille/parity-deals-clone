import { PercentDiamondIcon } from "lucide-react";

export default function Logo() {
  return (
    <span className="flex items-center gap-2 font-semibold flex-shrink-0 text-lg">
      <PercentDiamondIcon className="size-8" />
      <span>Parity Deals clone</span>
    </span>
  );
}
