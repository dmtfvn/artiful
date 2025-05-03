import { Navigate, Outlet } from 'react-router';

import useUserContext from '../../hooks/useUserContext.js';

export default function Auth() {
  const { accessToken } = useUserContext();

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
