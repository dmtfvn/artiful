import { useState } from 'react';

export default function useErrorState() {
  const [errors, setErrors] = useState({});

  const errorHandler = (error) => {
    if (error.name === 'ValidationError') {
      const accErrors = error.inner.reduce((acc, err) => {
        acc[err.path] = err.message;

        return acc;
      }, {});

      setErrors(accErrors);
    } else {
      setErrors({ general: error.message });
    }
  }

  return {
    errors,
    errorHandler,
  };
}
