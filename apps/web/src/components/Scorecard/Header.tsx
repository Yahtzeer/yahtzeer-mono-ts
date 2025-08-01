import { IconButton, TableHead, TableRow, TextField } from '@mui/material';
import Cell from './Cell';
import type { Player } from '@repo/game-utils/types';

type Props = {
  players: Player[];
  editPlayer: (id: number, name: string) => void;
};

const Header = ({ players, editPlayer }: Props) => {
  return (
    <TableHead>
      <TableRow>
        <Cell>
          <IconButton></IconButton>
        </Cell>
        {players.map((player) => (
          <Cell key={player.id} align="center" sx={{ minWidth: 100 }}>
            <TextField
              value={player.name}
              variant="standard"
              slotProps={{
                input: {
                  inputProps: {
                    style: { textAlign: 'center' },
                  },
                  disableUnderline: true,
                },
              }}
              onChange={(e) => editPlayer(player.id, e.target.value)}
            />
          </Cell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default Header;
