import { useContext } from 'react';

import { UserContext } from '../contexts/UserContext.js';

export default function useUserContext() {
  const ctxData = useContext(UserContext);

  return ctxData;
}
