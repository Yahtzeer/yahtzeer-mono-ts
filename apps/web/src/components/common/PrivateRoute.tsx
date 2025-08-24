import { useCurrentUserQuery } from '../../redux/serivces/authService';
import { Navigate, Outlet } from 'react-router';
import Loading from './Loading';

const PrivateRoute = () => {
  const { data, isLoading } = useCurrentUserQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (!data) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
