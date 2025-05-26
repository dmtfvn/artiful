import { useState } from 'react';

export default function useImagePreview(state) {
  const [imageUrl, setImageUrl] = useState(state);
  const [preview, setPreview] = useState(state);
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
    setImageUrl,
    preview,
    setPreview,
    imageError,
    imageErrorHandler,
    inputChangeHandler,
  ];
}
