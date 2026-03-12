/**
 * Environment variables validation
 * Add your env vars here for type safety
 */

export const env = {
  APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  // Add more env vars here
} as const;
