import { TableBody, TableRow } from '@mui/material';
import type { Player, ScoreField, Scores } from '@repo/game-utils/types';
import Cell from './Cell';
import { getRenderableRows, isComputedRow } from '@repo/game-utils/utils';
import ScoreCell from './ScoreCell';
import { useTranslation } from 'react-i18next';

type Props = {
  players: Player[];
  scores: Scores;
  editScore: (
    playerId: number,
    field: ScoreField,
    value: number | null
  ) => void;
};

const rows = getRenderableRows();

const Body = ({ players, scores, editScore }: Props) => {
  const { t } = useTranslation();

  return (
    <TableBody>
      {rows.map((row) => (
        <TableRow key={row.field}>
          <Cell
            sx={{
              fontWeight: (theme) =>
                isComputedRow(row)
                  ? theme.typography.fontWeightBold
                  : undefined,
            }}
          >
            {t(`components.scorecard.fields.classic.${row.field}`)}
          </Cell>
          {players.map((player) => (
            <ScoreCell
              key={player.id}
              row={row}
              scores={scores}
              playerId={player.id}
              editScore={editScore}
            />
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Body;
