import { NextFunction, Request, Response } from 'express';
import logger from './logger';

export const requestLogger = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  logger.info(`${req.method} ${req.path} ${req.headers.origin}`);
  next();
};

export const tryCatchWrapper =
  (callback: (Req: Request, res: Response) => Promise<unknown>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await callback(req, res);
    } catch (error) {
      next(error);
    }
  };
