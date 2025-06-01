import { useEffect, useState } from 'react';

import useUserContext from '../hooks/useUserContext.js';

import request from '../utils/request.js';
import { baseUrl } from '../utils/consts.js';

const url = `${baseUrl}/data/arts`;

export const useMostLiked = () => {
  const [mostLiked, setMostLiked] = useState([]);
  const [processing, setProcessing] = useState(true);
  const [noFetch, setNoFetch] = useState('');

  useEffect(() => {
    setProcessing(true);
    setNoFetch('');

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
      })
      .catch(err => {
        setNoFetch(err.message);
      })
      .finally(() => {
        setProcessing(false);
      });
  }, []);

  return {
    mostLiked,
    processing,
    mostLikedError: noFetch,
  };
}

export const useLatest = () => {
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noFetch, setNoFetch] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNoFetch(false);

    const searchParams = new URLSearchParams({
      sortBy: '_createdOn desc',
      pageSize: 3,
      select: 'imageUrl,title,_id',
    });

    request.get(`${url}?${searchParams.toString()}`)
      .then(data => {
        setLatest(data);
      })
      .catch(err => {
        setNoFetch(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    latest,
    loading,
    latestError: noFetch,
  };
}

export const useCreated = () => {
  const { _id } = useUserContext();

  const [created, setCreated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noFetch, setNoFetch] = useState(false);

  useEffect(() => {
    setLoading(true);

    const searchParams = new URLSearchParams({
      sortBy: '_createdOn desc',
      where: `_ownerId="${_id}"`,
    });

    request.get(`${url}?${searchParams.toString()}`)
      .then(data => {
        setCreated(data);
      })
      .catch(err => {
        setNoFetch(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [_id]);

  return {
    created,
    loading,
    noFetch,
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
