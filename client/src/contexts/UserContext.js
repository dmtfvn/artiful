import { createContext } from 'react';

export const UserContext = createContext({
  _id: '',
  email: '',
  username: '',
  accessToken: '',
  userLogin: () => null,
  userLogout: () => null,
});
