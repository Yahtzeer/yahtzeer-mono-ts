import { NextFunction, Request, RequestHandler, Response } from 'express';
import logger from './logger';
import { ValidationError } from 'yup';
import { Prisma } from '@prisma/client';
import { getToken, getUserFromToken } from './auth';
import { AuthedRequest } from '../types/Request';

export const requestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  logger.info(`${req.method} ${req.path} ${req.headers.origin}`);
  next();
};

export const tryCatchWrapper =
  <T extends Request = Request>(
    callback: (Req: T, res: Response) => Promise<unknown>
  ): RequestHandler =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req as T, res);
    } catch (error) {
      next(error);
    }
  };

export const errorMiddleware = (error: Error, _req: Request, res: Response) => {
  if (error instanceof ValidationError) {
    return res.status(400).json({ error: error.errors });
  }

  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      return res
        .status(409)
        .json({ error: 'Unique constraint failed', details: error.meta });
    }
  }

  return res.status(500).json({ error: 'Internal Server Error' });
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = getToken(req);

    if (!token) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const user = getUserFromToken(token);

    if (!user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }

    const { id, createdAt, updatedAt, username } = user;

    (req as AuthedRequest).user = { id, createdAt, updatedAt, username };

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
};
