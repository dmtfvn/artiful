import { useState } from 'react';

export default function usePersistState(storageKey, curState) {
  const [state, setState] = useState(() => {
    const storageData = localStorage.getItem(storageKey);

    if (typeof curState === 'function') {
      return curState();
    }

    const stateData = JSON.parse(storageData);

    return stateData;
  });

  const setPersistState = (val) => {
    const data = (typeof val === 'function') ? val(state) : val;

    const persistData = JSON.stringify(data);

    localStorage.setItem('auth', persistData);

    setState(data);
  }

  return [
    state,
    setPersistState,
  ];
}
