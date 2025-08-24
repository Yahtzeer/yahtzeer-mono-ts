import { Prisma } from '@prisma/client';
import db from '../../../db';
import { createInputUser } from '../../../utils/auth';

export const findUser = (where: Prisma.UserWhereUniqueInput) => {
  return db.user.findUnique({ where });
};

export const createUser = async (username: string, password: string) => {
  const data = await createInputUser(username, password);

  return db.user.create({ data });
};
