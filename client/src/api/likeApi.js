import { useEffect, useState } from 'react';

import useUserContext from '../hooks/useUserContext.js';
import request from '../utils/request.js';

const url = 'http://localhost:3030/data/likes';

export const useArtLikeId = (_id, artId) => {
  const [artLike, setArtLike] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      where: `_ownerId="${_id}" AND artId="${artId}"`,
    });

    request.get(`${url}?${searchParams.toString()}`)
      .then(data => {
        setArtLike(data);
      })

  }, [_id, artId]);

  return {
    artLike,
  };
}

export const useAddLike = () => {
  const { accessToken } = useUserContext();

  const like = (artId) => {
    return request.post(url, artId, accessToken);
  }

  return {
    like,
  };
}

export const useRemoveLike = () => {
  const { accessToken } = useUserContext();

  const unlike = (likeId) => {
    return request.delete(`${url}/${likeId}`, undefined, accessToken);
  }

  return {
    unlike,
  };
}
