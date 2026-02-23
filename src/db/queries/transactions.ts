import { db } from '@/index'; // you'll create this shared db instance
import { transactionsTable } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function getTransactions(userId: number) {
  return await db.select().from(transactionsTable).where(eq(transactionsTable.id, userId));
}