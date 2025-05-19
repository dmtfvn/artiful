import { useEffect, useState } from 'react';

import useUserContext from '../hooks/useUserContext.js';
import request from '../utils/request.js';

const url = 'http://localhost:3030/data/arts';

export const useMostLiked = () => {
  const [mostLiked, setMostLiked] = useState([]);
  const [evaluating, setEvaluating] = useState(true);

  useEffect(() => {
    setEvaluating(true);

    request.get(url)
      .then(arts => {
        const artsWithLikes = Promise.all(arts.map(a => {
          const searchParams = new URLSearchParams({
            where: `artId="${a._id}"`,
          });

          return request.get(`http://localhost:3030/data/likes?${searchParams.toString()}`)
            .then(likes => ({
              ...a,
              _likes: likes,
              _likesCount: likes.length,
            }));
        }));

        artsWithLikes.then(updatedArts => {
          const sortedArts = updatedArts.sort((a, b) => b._likesCount - a._likesCount);

          setMostLiked(sortedArts);
          setEvaluating(false);
        });
      });
  }, []);

  return {
    mostLiked,
    evaluating,
  };
}

export const useLatest = () => {
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const searchParams = new URLSearchParams({
      sortBy: '_createdOn desc',
      pageSize: 3,
      select: 'imageUrl,title,_id',
    });

    request.get(`${url}?${searchParams.toString()}`)
      .then(data => {
        setLatest(data);
        setLoading(false);
      });
  }, []);

  return {
    latest,
    loading,
  };
}

export const useCreated = () => {
  const { _id } = useUserContext();

  const [created, setCreated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const searchParams = new URLSearchParams({
      sortBy: '_createdOn desc',
      where: `_ownerId="${_id}"`,
    });

    request.get(`${url}?${searchParams.toString()}`)
      .then(data => {
        setCreated(data);
        setLoading(false);
      });
  }, [_id]);

  return {
    created,
    loading,
  };
}

export const useSearch = () => {
  const search = (selectOption, inputValue) => {
    const searchParams = new URLSearchParams({
      where: `${selectOption} LIKE "${inputValue}"`,
    });

    return request.get(`${url}?${searchParams.toString()}`);
  }

  return {
    search,
  };
}
