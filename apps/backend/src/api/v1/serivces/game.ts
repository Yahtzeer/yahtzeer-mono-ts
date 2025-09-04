import { createSlug } from '@repo/game-utils/utils';
import db from '../../../db';

export const createGame = async (userId: number) => {
  return db.game.create({
    data: {
      slug: createSlug(),
      players: { create: [{ playerId: userId }] },
      turns: { create: [] },
    },
    include: {
      players: true,
      turns: true,
    },
  });
};

export const getUserGames = async (userId: number) => {
  return db.game.findMany({
    where: {
      players: { some: { playerId: userId } },
    },
  });
};
