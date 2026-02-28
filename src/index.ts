import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import 'dotenv/config';

const globalForDb = globalThis as unknown as { pgClient: ReturnType<typeof postgres> };

const client = globalForDb.pgClient ?? postgres(process.env.DATABASE_URL!, {
  ssl: process.env.NODE_ENV === 'production' ? true : { rejectUnauthorized: false },
});

if (process.env.NODE_ENV !== 'production') {
  globalForDb.pgClient = client;
}

export const db = drizzle(client);