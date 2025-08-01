import type { Player, ScoreField, Scores } from '@repo/game-utils/types';
import {
  createInitialPlayers,
  createInitialScores,
} from '@repo/game-utils/utils';
import { useState } from 'react';

const useScorecard = () => {
  const [players, setPlayers] = useState<Player[]>(createInitialPlayers());
  const [scores, setScores] = useState<Scores>(createInitialScores());

  const editPlayer = (id: number, name: string) => {
    setPlayers((prev) => {
      return prev.map((player) => {
        if (player.id === id) {
          return { ...player, name };
        }
        return player;
      });
    });
  };

  const editScore = (
    playerId: number,
    field: ScoreField,
    value: number | null
  ) => {
    setScores((prev) => {
      return {
        ...prev,
        [field]: {
          ...prev[field],
          [playerId]: value,
        },
      };
    });
  };

  return {
    players,
    scores,
    editPlayer,
    editScore,
  };
};

export default useScorecard;
