import { Navigate, Outlet } from 'react-router-dom';
import auth from '../api/auth';

const PrivateRoute = () => {
  const user = auth.getCurrentUser();
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;