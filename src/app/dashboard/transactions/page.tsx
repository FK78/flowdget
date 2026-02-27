import { getTransactionsWithDetails } from "@/db/queries/transactions";
import { getAccountsWithDetails } from "@/db/queries/accounts";
import { getCategoriesByUser } from "@/db/queries/categories";
import { TransactionsClient } from "@/components/TransactionsClient";
import { getCurrentUserId } from "@/lib/auth";

export default async function Transactions() {
  const userId = await getCurrentUserId();
  
  const [transactions, accounts, categories] = await Promise.all([
    getTransactionsWithDetails(userId),
    getAccountsWithDetails(userId),
    getCategoriesByUser(userId),
  ]);

  return (
    <TransactionsClient
      transactions={transactions}
      accounts={accounts}
      categories={categories}
    />
  );
}
