import { useCurrentUserQuery } from '../../redux/serivces/authService';
import { Navigate, Outlet } from 'react-router';
import Loading from './Loading';
import { Box, Toolbar as MuiToolbar } from '@mui/material';
import Toolbar from '../Toolbar';

const PrivateRoute = () => {
  const { data, isLoading } = useCurrentUserQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
      }}
    >
      <Toolbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - 150px)` },
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <MuiToolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default PrivateRoute;
