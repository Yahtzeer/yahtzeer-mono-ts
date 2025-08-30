import 'dotenv/config';
import { cleanEnv, num, str } from 'envalid';

const env = cleanEnv(process.env, {
  PORT: num({ default: 3001 }),
  DATABASE_URL: str(),
  JWT_SECRET: str(),
  CORS_ORIGIN: str({ default: '*' }),
});

export const { PORT, JWT_SECRET, CORS_ORIGIN } = env;
