import { Navigate, Outlet } from 'react-router';

import useUserContext from '../../hooks/useUserContext.js';

export default function Guest() {
  const { accessToken } = useUserContext();

  if (accessToken) {
    return <Navigate to="/profile" />;
  }

  return <Outlet />;
}
