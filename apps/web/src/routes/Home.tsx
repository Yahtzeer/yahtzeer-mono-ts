import { Button } from '@mui/material';
import Center from '../components/common/Center';
import { useTranslation } from 'react-i18next';
import { useCreateGameMutation } from '../redux/serivces/gameService';
import { useNavigate } from 'react-router';

const Home = () => {
  const { t } = useTranslation();
  const [createGame, { isLoading }] = useCreateGameMutation();
  const navigate = useNavigate();

  const handleCreateGame = async () => {
    const { data } = await createGame();

    if (data?.slug) {
      navigate(`/game/${data.slug}`);
    }
  };

  return (
    <Center>
      <Button
        variant="contained"
        loading={isLoading}
        onClick={() => handleCreateGame()}
      >
        {t('New Game')}
      </Button>
    </Center>
  );
};

export default Home;
