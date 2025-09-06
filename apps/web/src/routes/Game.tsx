import { Box } from '@mui/material';
import Scorecard from '../components/Scorecard';
import useGame from '../hooks/useGame';
import useSocket from '../hooks/useSocket';
import { useParams } from 'react-router';

const Game = () => {
  const { slug } = useParams();
  const socket = useSocket();
  const {} = useGame({ socket, slug });

  return (
    <Box sx={{ flex: 1 }}>
      <Scorecard />
    </Box>
  );
};

export default Game;
