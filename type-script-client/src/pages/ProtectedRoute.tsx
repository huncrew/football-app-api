import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactNode } from 'react';

import { RootState } from '../store';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useSelector((store: RootState) => store.user);
  if (!user) {
    return <Navigate to='/landing' />;
  }
  return <>{children}</>;
};
export default ProtectedRoute;
