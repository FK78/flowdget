import { db } from '@/index';
import { transactionsTable, categoriesTable, accountsTable } from '@/db/schema';
import { and, desc, eq, sum, gte, lt } from 'drizzle-orm';

const transactionSelect = {
  id: transactionsTable.id,
  accountName: accountsTable.name,
  type: transactionsTable.type,
  amount: transactionsTable.amount,
  category: categoriesTable.name,
  description: transactionsTable.description,
  date: transactionsTable.date,
  is_recurring: transactionsTable.is_recurring,
};

function baseTransactionsQuery(userId: number) {
  return db.select(transactionSelect)
    .from(transactionsTable)
    .innerJoin(categoriesTable, eq(transactionsTable.category_id, categoriesTable.id))
    .innerJoin(accountsTable, eq(transactionsTable.account_id, accountsTable.id))
    .where(eq(accountsTable.user_id, userId))
    .$dynamic();
}

export async function getTransactionsWithDetails(userId: number) {
  return await baseTransactionsQuery(userId);
}

export async function getLatestFiveTransactionsWithDetails(userId: number) {
  return await baseTransactionsQuery(userId)
    .orderBy(desc(transactionsTable.date))
    .limit(5);
}

export async function getTotalIncomeOfTransactionsThisMonth(userId: number) {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  return await db.select({ total: sum(transactionsTable.amount) })
    .from(transactionsTable)
    .innerJoin(accountsTable, eq(transactionsTable.account_id, accountsTable.id))
    .where(
      and(
        eq(accountsTable.user_id, userId),
        eq(transactionsTable.type, 'income'),
        gte(transactionsTable.date, startOfMonth.toISOString().split('T')[0]),
        lt(transactionsTable.date, startOfNextMonth.toISOString().split('T')[0])
      )
    );
}