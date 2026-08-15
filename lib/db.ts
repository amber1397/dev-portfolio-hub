import { neon } from '@neondatabase/serverless';

const getSql = () => {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error('DATABASE_URL is missing in environment variables');
  }
  return neon(url);
};

export const sql = (strings: TemplateStringsArray, ...values: any[]) => {
  const sqlClient = getSql();
  return sqlClient(strings, ...values);
};