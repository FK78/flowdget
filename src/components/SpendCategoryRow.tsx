import { formatCurrency } from "@/lib/formatCurrency";

export function SpendCategoryRow({ category, total, color, income, currency }: {
  category: string;
  total: string | null;
  color: string;
  income: number;
  currency: string;
}) {
  const amount = Number(total) || 0;
  const pct = income > 0 ? (amount / income) * 100 : 0;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium">{category}</span>
        <span className="text-muted-foreground">
          {formatCurrency(amount, currency)}
        </span>
      </div>
      <div className="bg-muted h-2 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
