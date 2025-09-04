import { Response } from 'express';
import { createGame, getUserGames } from '../serivces/game';
import { AuthedRequest } from '../../../types/Request';

export const createGameController = async (
  req: AuthedRequest,
  res: Response
) => {
  const game = await createGame(req.user.id);

  res.status(200).json(game);
};

export const getUserGamesController = async (
  req: AuthedRequest,
  res: Response
) => {
  const games = await getUserGames(req.user.id);

  res.status(200).json(games);
};
