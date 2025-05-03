async function request(method, url, data, token) {
  const options = {
    method,
    headers: {}
  };

  if (data !== undefined) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  if (token) {
    options.headers['X-Authorization'] = token;
  }

  try {
    const res = await fetch(url, options);

    if (!res.ok) {
      const err = await res.json();

      throw new Error(err.message);
    }

    if (res.status !== 204) {
      const data = await res.json();

      return data;
    }
  } catch (err) {
    console.log(err.message)

    throw err;
  }
}

export default {
  get: request.bind(null, 'GET'),
  post: request.bind(null, 'POST'),
  put: request.bind(null, 'PUT'),
  delete: request.bind(null, 'DELETE'),
};
