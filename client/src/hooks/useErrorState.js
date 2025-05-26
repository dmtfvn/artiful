import { useState } from 'react';

export default function useErrorState() {
  const [errors, setErrors] = useState({
    imageUrl: '',
    title: '',
    creator: '',
    depiction: '',
  });

  const errorHandler = (error) => {
    if (error.name === 'ValidationError') {
      const accErrors = error.inner.reduce((acc, err) => {
        acc[err.path] = err.message;

        return acc;
      }, {});

      setErrors(accErrors);
    } else {
      setErrors({ general: 'Something went wrong, please try again' });
    }
  }

  return {
    errors,
    errorHandler,
  };
}
