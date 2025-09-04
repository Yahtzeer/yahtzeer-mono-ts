import apiService from '.';

type GameState = 'CREATED' | '' | '';

type GameMode = 'CLASSIC';

type ScoreColumn = {};

type Turn = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  rolls: number;
  gameId: number;
  playerColumnId: number;
  player: ScoreColumn;
  dice: [];
};

type Game = {
  id: number;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  turns: Turn[];
  status: GameState;
  mode: GameMode;
  players: ScoreColumn[];
};

const gameService = apiService.injectEndpoints({
  endpoints: (build) => ({
    createGame: build.mutation<Game, void>({
      query: () => ({
        url: '/game',
        method: 'POST',
      }),
    }),
  }),
});

export const { useCreateGameMutation } = gameService;
