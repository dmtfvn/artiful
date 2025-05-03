import { UserContext } from '../../contexts/UserContext.js';

import usePersistState from '../../hooks/usePersistState.js';

export default function UserProvider({
  children,
}) {
  const [user, setUser] = usePersistState('auth', {});

  const userLogin = (authData) => {
    setUser(authData);
  }

  const userLogout = () => {
    setUser({});
  }

  return (
    <UserContext.Provider value={{ ...user, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
}
