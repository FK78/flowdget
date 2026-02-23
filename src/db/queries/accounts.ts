import { db } from '@/index'; // you'll create this shared db instance
import { transactionsTable, accountsTable } from '@/db/schema';
import { eq, count } from 'drizzle-orm';

export async function getAccountsWithDetails(userId: number) {
  return await db.select({
    id: accountsTable.id,
    accountName: accountsTable.name,
    type: accountsTable.type,
    balance: accountsTable.balance,
    currency: accountsTable.currency,
    transactions: count(transactionsTable.id),
  })
    .from(accountsTable)
    .innerJoin(transactionsTable, eq(transactionsTable.account_id, accountsTable.id))
    .where(eq(accountsTable.user_id, userId))
    .groupBy(accountsTable.id, accountsTable.name, accountsTable.type, accountsTable.balance, accountsTable.currency);
}
