import { neon } from '@neondatabase/serverless';

export const sql = (strings: TemplateStringsArray, ...values: any[]) => {
  const dbUrl = process.env.DATABASE_URL;
  
  if (!dbUrl) {
    throw new Error('DATABASE_URL environment variable is missing.');
  }
  
  const client = neon(dbUrl);
  return client(strings, ...values);
};