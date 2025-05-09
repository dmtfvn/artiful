import { useEffect, useState } from 'react';

import useUserContext from '../hooks/useUserContext.js';
import request from '../utils/request.js';

const url = 'http://localhost:3030/data/arts';

export const useArts = () => {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    request.get(url)
      .then(data => {
        setArts(data);
        setLoading(false);
      });
  }, []);

  return {
    arts,
    loading,
  };
}

export const useArtId = (id) => {
  const [art, setArt] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    request.get(`${url}/${id}`)
      .then(data => {
        setArt(data);
        setLoading(false);
      });
  }, [id]);

  return {
    art,
    loading,
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

export const useCreate = () => {
  const { accessToken } = useUserContext();

  const create = (data) => {
    return request.post(url, data, accessToken);
  }

  return {
    create,
  };
}

export const useEdit = () => {
  const { accessToken } = useUserContext();

  const edit = (id, data) => {
    return request.put(`${url}/${id}`, data, accessToken);
  }

  return {
    edit,
  };
}

export const useDelete = () => {
  const { accessToken } = useUserContext();

  const del = (id) => {
    return request.delete(`${url}/${id}`, undefined, accessToken);
  }

  return {
    del,
  };
}

export const useCreatedArt = () => {
  const { _id } = useUserContext();

  const [created, setCreated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const searchParams = new URLSearchParams({
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
