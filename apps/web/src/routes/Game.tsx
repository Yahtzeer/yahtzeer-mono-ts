import { Box } from '@mui/material';
import { useParams } from 'react-router';

const Game = () => {
  const { slug } = useParams();
  console.log('Slug: ', slug);
  return <Box>{slug}</Box>;
};

export default Game;
