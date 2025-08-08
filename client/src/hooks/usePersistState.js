import { useState } from 'react';

import { storageKey } from '../utils/consts.js';

export default function usePersistState(key) {
  const [state, setState] = useState(() => {
    const storageData = localStorage.getItem(key);

    const stateData = JSON.parse(storageData);

    return stateData;
  });

  const setPersistState = (data) => {
    const persistData = JSON.stringify(data);

    localStorage.setItem(storageKey, persistData);

    setState(data);
  }

  return {
    state,
    setPersistState,
  };
}
