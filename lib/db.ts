import { neon } from '@neondatabase/serverless';

const getDatabaseUrl = () => {
  return process.env.DATABASE_URL || 'postgresql://placeholder:placeholder@localhost:5432/placeholder';
};

export const sql = neon(getDatabaseUrl());