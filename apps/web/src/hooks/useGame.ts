import { useEffect, useState } from 'react';
import type { Socket } from 'socket.io-client';

type UseGameOptions = {
  socket: Socket | null;
  slug?: string;
};

const useGame = ({ socket, slug }: UseGameOptions) => {
  const [game, setGame] = useState();

  useEffect(() => {
    if (!socket || !game) {
      return;
    }

    socket.emit('joinGame', slug);

    socket.on('gameUpdated', (newState) => {
      setGame(newState);
    });
  }, [slug]);

  return { game };
};

export default useGame;
