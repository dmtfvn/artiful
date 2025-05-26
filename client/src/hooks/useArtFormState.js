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

    setFormState((curState) => ({
      ...curState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  const setEditInitial = useCallback((art) => {
    setFormState({
      _createdOn: '',
      _updatedOn: '',
      _ownerId: '',
      _id: art._id || '',
      check: art.check || false,
      creator: art.creator || '',
      depiction: art.depiction || '',
      email: art.email || '',
      imageUrl: art.imageUrl || '',
      title: art.title || '',
    });
  }, []);

  return {
    formState,
    changeHandler,
    setEditInitial,
  };
}
