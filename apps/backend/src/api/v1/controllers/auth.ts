import { Request, Response } from 'express';
import {
  getToken,
  getUserFromToken,
  passwordsMatch,
  createToken,
} from '../../../utils/auth';
import { baseUserSchema } from '../../../utils/validators/auth';
import { createUser, findUser } from '../serivces/auth';
import { User } from '@prisma/client';

export const currentUser = async (req: Request, res: Response) => {
  let user = null;

  const token = getToken(req);

  if (token) {
    user = getUserFromToken(token);
  }

  return res.status(200).json(user);
};

export const createUserController = async (req: Request, res: Response) => {
  const { username, password } = await baseUserSchema.validate(req.body);

  await createUser(username, password);

  return res.sendStatus(204);
};

export const loginController = async (req: Request, res: Response) => {
  const { username, password } = await baseUserSchema.validate(req.body);

  const user = await findUser({ username });

  if (user && (await passwordsMatch(password, user.password))) {
    const copy = { ...user } as Partial<User>;

    delete copy.password;

    const token = createToken(copy);

    return res.status(200).json({ ...copy, token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};
