import { Box } from '@mui/material';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';
import { useCurrentUserQuery } from './redux/serivces/authService';
import Center from './components/common/Center';

const App = () => {
  const { t } = useTranslation();
  const { isLoading } = useCurrentUserQuery();

  return (
    <Suspense fallback={t('common.loading')}>
      <Box sx={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        {isLoading ? <Center>{t('common.loading')}</Center> : <Outlet />}
      </Box>
    </Suspense>
  );
};

export default App;
