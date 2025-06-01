import { useEffect, useState } from 'react';

import useUserContext from '../hooks/useUserContext.js';

import request from '../utils/request.js';
import { baseUrl } from '../utils/consts.js';

const url = `${baseUrl}/data/arts`;

export const useArts = () => {
  const [arts, setArts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noFetch, setNoFetch] = useState('');

  useEffect(() => {
    setLoading(true);

    request.get(url)
      .then(data => {
        setArts(data);
      })
      .catch(err => {
        setNoFetch(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    arts,
    setArts,
    loading,
    noFetch,
  };
}

export const useArt = (id) => {
  const [art, setArt] = useState({});
  const [loading, setLoading] = useState(true);
  const [noFetch, setNoFetch] = useState('');

  useEffect(() => {
    setLoading(true);

    request.get(`${url}/${id}`)
      .then(data => {
        setArt(data);
      })
      .catch(err => {
        setNoFetch(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return {
    art,
    loading,
    noFetch,
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
