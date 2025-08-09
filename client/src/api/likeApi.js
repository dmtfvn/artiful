import { useEffect, useState } from 'react';

import useUserContext from '../hooks/useUserContext.js';

import request from '../utils/request.js';
import { baseUrl } from '../utils/consts.js';

const url = `${baseUrl}/data/likes`;

export const useLike = (_id, artId) => {
  const [artLike, setArtLike] = useState([]);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      where: `_ownerId="${_id}" AND artId="${artId}"`,
    });

    request.get(`${url}?${searchParams.toString()}`)
      .then(data => {
        setArtLike(data);
      });
  }, [_id, artId]);

  return {
    artLike,
  };
}

export const useUserLikes = () => {
  const [userLikes, setUserLikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noFetch, setNoFetch] = useState('');

  const { _id } = useUserContext();

  useEffect(() => {
    setLoading(true);

    const searchParams = new URLSearchParams({
      load: '_art=artId:arts',
      where: `_ownerId="${_id}"`,
    });

    request.get(`${url}?${searchParams.toString()}`)
      .then(data => {
        setUserLikes(data);
      })
      .catch(err => {
        setNoFetch(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [_id]);

  return {
    userLikes,
    loading,
    noFetch,
  };
}

export const useLikeCount = (artId) => {
  const [likeCount, setLikeCount] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams({
      where: `artId="${artId}"`,
    });

    request.get(`${url}?${searchParams.toString()}`)
      .then(data => {
        setLikeCount(data.length);
      });
  }, [artId]);

  return {
    likeCount,
    setLikeCount,
  };
}

export const useAddLike = () => {
  const { accessToken } = useUserContext();

  const like = (artId) => {
    return request.post(url, { artId }, accessToken);
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
