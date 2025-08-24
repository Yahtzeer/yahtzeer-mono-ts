import 'dotenv/config';
import { cleanEnv, num, str } from 'envalid';

const env = cleanEnv(process.env, {
  PORT: num({ default: 3001 }),
  DATABASE_URL: str(),
  JWT_SECRET: str(),
});

export const { PORT, JWT_SECRET } = env;
