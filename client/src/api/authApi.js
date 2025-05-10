import { useEffect } from 'react';

import useUserContext from '../hooks/useUserContext.js';
import request from '../utils/request.js';

const url = 'http://localhost:3030/users';

export const useLogin = () => {
  const login = async (email, password) => {
    const result = await request.post(`${url}/login`, { email, password });

    return result;
  }

  return {
    login,
  };
}

export const useRegister = () => {
  const register = (username, email, password) => {
    return request.post(`${url}/register`, { username, email, password });
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

    request.get(`${url}/logout`, undefined, accessToken)
      .finally(() => {
        userLogout();
      });

  }, [accessToken, userLogout]);

  return {
    isLoggedOut: !!accessToken,
  };
}
