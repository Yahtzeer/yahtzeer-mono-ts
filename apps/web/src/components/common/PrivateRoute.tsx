import { useCurrentUserQuery } from '../../redux/serivces/authService';
import { Navigate, Outlet } from 'react-router';
import Loading from './Loading';
import { Box } from '@mui/material';
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
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Toolbar />
      <Box component="main" sx={{ p: 3, flex: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default PrivateRoute;
