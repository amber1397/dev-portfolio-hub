import { neon } from '@neondatabase/serverless';

const dbUrl = process.env.DATABASE_URL || 'postgresql://placeholder:placeholder@localhost:5432/placeholder';

export const sql = neon(dbUrl);