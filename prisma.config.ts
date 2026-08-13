// prisma.config.ts
// Prisma 7 Configuration
// Datasource URL is now configured here instead of schema.prisma

import { defineConfig } from 'prisma/config';

export default defineConfig({
	earlyAccess: true,
	schema: './prisma/schema.prisma',
	datasourceUrl: process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:5432/agentic_ai_trading?schema=public',
});
