import { useEffect, useState } from 'react';

import useUserContext from '../hooks/useUserContext.js';
import request from '../utils/request.js';

const url = 'http://localhost:3030/data/arts';

export const useMostLiked = () => {
  const [mostLiked, setMostLiked] = useState([]);
  const [processing, setProcessing] = useState(true);

  useEffect(() => {
    setProcessing(true);

    const searchParams = new URLSearchParams({
      load: '_likes=artId:likes',
    });

    request.get(`${url}?${searchParams.toString()}`)
      .then(data => {
        const artsWithLikes = data.map(a => {
          const filteredLikes = a._likes.filter(l => l.artId === a._id);

          return {
            ...a,
            _likes: filteredLikes,
            _likesCount: filteredLikes.length,
          };
        });

        artsWithLikes.sort((a, b) => b._likesCount - a._likesCount);

        setMostLiked(artsWithLikes);
        setProcessing(false);
      });
  }, []);

  return {
    mostLiked,
    processing,
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
