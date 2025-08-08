import { UserContext } from '../../contexts/UserContext.js';

import usePersistState from '../../hooks/usePersistState.js';
import { storageKey } from '../../utils/consts.js';

export default function UserProvider({
  children,
}) {
  const { state, setPersistState } = usePersistState(storageKey);

  const userLogin = (authData) => {
    setPersistState(authData);
  }

  const userLogout = () => {
    setPersistState({});
  }

  return (
    <UserContext.Provider value={{ ...state, userLogin, userLogout }}>
      {children}
    </UserContext.Provider>
  );
}
