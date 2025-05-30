import { useState } from 'react';
import { useNavigate } from 'react-router';

import { useAddLike, useLikeCount, useRemoveLike } from '../api/likeApi.js';
import useUserContext from './useUserContext.js';

export default function useToggleLike(artId) {
  const navigate = useNavigate();

  const [heart, setHeart] = useState('');
  const [inProcess, setInProcess] = useState(false);

  const { accessToken } = useUserContext();
  const { likeCount, setLikeCount } = useLikeCount(artId);

  const { like } = useAddLike();
  const { unlike } = useRemoveLike();

  const addLikeHandler = async () => {
    if (!accessToken) {
      navigate('/login');
      return;
    }

    setInProcess(true);
    setLikeCount(likeCount + 1);

    try {
      const res = await like({ artId });

      setHeart(res._id);
    } catch (err) {
      console.log(err.message)
      setLikeCount(likeCount - 1);
    } finally {
      setInProcess(false);
    }
  }

  const removeLikeHandler = async () => {
    setInProcess(true);
    setLikeCount(likeCount - 1);

    try {
      await unlike(heart);

      setHeart('');
    } catch (err) {
      console.log(err.message)
      setLikeCount(likeCount + 1);
    } finally {
      setInProcess(false);
    }
  }

  const toggleHandler = () => {
    if (inProcess) {
      return;
    }

    if (heart) {
      removeLikeHandler();
    } else {
      addLikeHandler();
    }
  }

  return {
    heart,
    setHeart,
    inProcess,
    likeCount,
    toggleHandler,
  };
}
