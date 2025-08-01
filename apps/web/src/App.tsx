import { Box } from '@mui/material';
import Scorecard from './components/Scorecard';
import { Suspense } from 'react';

const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Box sx={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
        <Scorecard />
      </Box>
    </Suspense>
  );
};

export default App;
