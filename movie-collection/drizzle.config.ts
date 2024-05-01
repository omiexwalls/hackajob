import '@/drizzle/envConfig';
import { defineConfig } from 'drizzle-kit';

console.log('Using database:', process.env.POSTGRES_URL);

export default defineConfig({
  schema: './drizzle/schema.ts',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL!,
  },
});
