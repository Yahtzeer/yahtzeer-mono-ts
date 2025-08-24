import { Prisma, User } from '@prisma/client';
import { Request } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { JWT_SECRET } from './config';

export const getToken = (req: Request) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.substring(7, authHeader.length);
  }

  return null;
};

export const getUserFromToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export const createInputUser = async (username: string, password: string) => ({
  username,
  password: await bcrypt.hash(password, 12),
});

export const passwordsMatch = async (
  password: string,
  hashedPassword: string
) => {
  return bcrypt.compare(password, hashedPassword);
};

export const createToken = (user: Partial<User>) => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: '7d' });
};
