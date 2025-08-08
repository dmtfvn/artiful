import { useCallback, useState } from 'react';

export default function useArtFormState() {
  const [formState, setFormState] = useState({
    imageUrl: '',
    title: '',
    creator: '',
    check: false,
    depiction: '',
  });

  const changeHandler = (e) => {
    const { name, type, value, checked } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  const setEditInitial = useCallback((art) => {
    setFormState({
      _id: art._id || '',
      imageUrl: art.imageUrl || '',
      title: art.title || '',
      creator: art.creator || '',
      check: art.check || false,
      email: art.email || '',
      depiction: art.depiction || '',
    });
  }, []);

  return {
    formState,
    changeHandler,
    setEditInitial,
  };
}
