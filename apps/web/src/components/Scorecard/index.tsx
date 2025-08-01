import { Paper, Table, TableContainer } from '@mui/material';
import useScorecard from '../../hooks/useScorecard';
import Header from './Header';
import Body from './Body';

const Scorecard = () => {
  const { players, editPlayer, scores, editScore } = useScorecard();

  return (
    <TableContainer
      component={Paper}
      sx={{ height: '100%', overflowX: 'auto', bgcolor: 'background.default' }}
    >
      <Table sx={{ height: '100%' }} stickyHeader>
        <Header players={players} editPlayer={editPlayer} />
        <Body players={players} scores={scores} editScore={editScore} />
      </Table>
    </TableContainer>
  );
};

export default Scorecard;
