import { Game, User } from '@prisma/client';

export type ServerToClientEvents = {
  gameCreated: (game: Game) => void;
  error: (message: string) => void;
};

export type ClientToServerEvents = {
  createGame: () => void;
  joinGame: (slug: string) => void;
};

export type InterServerEvents = {};

export type SocketData = {
  user: Omit<User, 'password'>;
};
