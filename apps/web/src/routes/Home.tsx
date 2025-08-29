import { Button } from '@mui/material';
import Center from '../components/common/Center';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <Center>
      <Button variant="contained">{t('New Game')}</Button>
    </Center>
  );
};

export default Home;
