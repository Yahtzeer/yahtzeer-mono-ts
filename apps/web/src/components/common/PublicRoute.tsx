import { useCurrentUserQuery } from '../../redux/serivces/authService';
import { Navigate, Outlet } from 'react-router';
import Loading from './Loading';

const PublicRoute = () => {
  const { data, isLoading } = useCurrentUserQuery();

  if (isLoading) {
    return <Loading />;
  }

  if (data) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
