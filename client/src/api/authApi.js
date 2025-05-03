import { useEffect } from 'react';

import useUserContext from '../hooks/useUserContext.js';
import request from '../utils/request.js';

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () => {
  const login = async (email, password) => {
    const result = await request.post(`${baseUrl}/login`, { email, password });

    return result;
  }

  return {
    login,
  };
}

export const useRegister = () => {
  const register = (email, password) => {
    return request.post(`${baseUrl}/register`, { email, password });
  }

  return {
    register,
  };
}

export const useLogout = () => {
  const { accessToken, userLogout } = useUserContext();

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    request.get(`${baseUrl}/logout`, undefined, accessToken)
      .finally(() => {
        userLogout();
      });

  }, [accessToken, userLogout]);

  return {
    isLoggedOut: !!accessToken,
  };
}
