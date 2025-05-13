import { useState } from 'react';

export default function useImagePreview(initialPreview = '') {
  const [imageUrl, setImageUrl] = useState('');
  const [preview, setPreview] = useState(initialPreview);
  const [imageError, setImageError] = useState(false);

  const imageErrorHandler = () => {
    setImageError(true);
  }

  const inputChangeHandler = async (e) => {
    const url = e.target.value;

    setImageUrl(url);

    if (!url.match(/^https?:\/\/.*\.(jpeg|jpg|png)$/)) {
      setPreview('');
      setImageError(true);
      return;
    }

    setPreview(url);
    setImageError(false);
  }

  return [
    imageUrl,
    preview,
    setPreview,
    imageError,
    imageErrorHandler,
    inputChangeHandler,
  ];
}
