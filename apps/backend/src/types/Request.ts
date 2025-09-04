import { User } from '@prisma/client';
import { Request } from 'express';
import { JwtPayload } from 'jsonwebtoken';

export interface AuthedRequest<TBody = any, TQuery = any, TParams = any>
  extends Request<TParams, any, TBody, TQuery> {
  user: Omit<User, 'password'>;
}

export type TokenPayload = JwtPayload & Omit<User, 'password'>;
