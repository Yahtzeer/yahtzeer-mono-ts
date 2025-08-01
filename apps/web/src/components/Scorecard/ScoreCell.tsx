import { TextField } from '@mui/material';
import Cell from './Cell';
import { isComputedRow } from '@repo/game-utils/utils';
import type { RenderableRow, ScoreField, Scores } from '@repo/game-utils/types';

type Props = {
  scores: Scores;
  playerId: number;
  editScore: (
    playerId: number,
    field: ScoreField,
    value: number | null
  ) => void;
  row: RenderableRow;
};

const renderValue = (value: number | null) => {
  if (value === null) {
    return '';
  }

  return value;
};

const ScoreCell = ({ scores, playerId, editScore, row }: Props) => {
  return (
    <Cell editable={!isComputedRow(row)} sx={{ padding: 0 }} align="center">
      {isComputedRow(row) ? (
        row.compute(scores, playerId)
      ) : (
        <TextField
          value={renderValue(scores[row.field as ScoreField][playerId])}
          variant="standard"
          type="number"
          fullWidth
          slotProps={{
            input: {
              inputProps: {
                style: { textAlign: 'center' },
              },
              disableUnderline: true,
            },
          }}
          sx={{
            '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button':
              {
                display: 'none',
              },
            '& input[type=number]': {
              MozAppearance: 'textfield',
            },
          }}
          onChange={(e) =>
            editScore(
              playerId,
              row.field as ScoreField,
              e.target.value ? Number(e.target.value) : null
            )
          }
        />
      )}
    </Cell>
  );
};

export default ScoreCell;
