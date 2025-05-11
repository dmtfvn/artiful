import { useEffect, useState } from 'react';

import useUserContext from '../hooks/useUserContext.js';
import request from '../utils/request.js';

const url = 'http://localhost:3030/data/arts';

export const useLatest = () => {
  const [latest, setLatest] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const searchParams = new URLSearchParams({
      sortBy: '_createdOn desc',
      pageSize: 3,
      select: 'imageUrl,title,_id'
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

export const useCreatedArt = () => {
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
