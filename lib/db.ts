import { neon } from '@neondatabase/serverless';

export const getSql = () => {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    throw new Error('DATABASE_URL is missing in environment variables');
  }
  return neon(dbUrl);
};

export const sql = (strings: TemplateStringsArray, ...values: any[]) => {
  const dbUrl = process.env.DATABASE_URL || 'postgresql://user:pass@localhost:5432/db';
  const client = neon(dbUrl);
  return client(strings, ...values);
};