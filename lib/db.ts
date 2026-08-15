import { neon } from '@neondatabase/serverless';

const dbUrl = process.env.DATABASE_URL || '';

if (!dbUrl && process.env.NODE_ENV === 'production') {
  console.warn('DATABASE_URL is not defined in environment variables.');
}

export const sql = neon(dbUrl);