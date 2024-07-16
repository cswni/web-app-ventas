import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import MainLayout from '../layout/MainLayout.tsx';

const PrivateRoutes = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoutes;
