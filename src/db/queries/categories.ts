import { db } from '@/index';
import { categoriesTable } from '@/db/schema';
import { eq, sql } from 'drizzle-orm';

const DEFAULT_CATEGORIES = [
  { name: 'Groceries', color: '#4CAF50', icon: 'shopping-cart' },
  { name: 'Rent', color: '#F44336', icon: 'home' },
  { name: 'Salary', color: '#2196F3', icon: 'briefcase' },
  { name: 'Utilities', color: '#607D8B', icon: 'zap' },
];

async function ensureDefaultCategoriesByUser(userId: string) {
  const [row] = await db
    .select({ total: sql<number>`count(*)`.mapWith(Number) })
    .from(categoriesTable)
    .where(eq(categoriesTable.user_id, userId));

  // Bootstrap defaults only for brand new users with no categories.
  if ((row?.total ?? 0) > 0) {
    return;
  }

  await db.insert(categoriesTable).values(
    DEFAULT_CATEGORIES.map((category) => ({
      user_id: userId,
      name: category.name,
      color: category.color,
      icon: category.icon,
      is_default: true,
    })),
  );
}

export async function getCategoriesByUser(userId: string) {
  await ensureDefaultCategoriesByUser(userId);

  return await db.select()
    .from(categoriesTable)
    .where(eq(categoriesTable.user_id, userId));
}
