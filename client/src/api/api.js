const apiOrigin = 'http://localhost:5000/api/v1';

export const contactAPI = async (route, method = 'GET', body) => {
  const jwt = localStorage.getItem('jwt');

  const responseJSON = await fetch(`${apiOrigin}/${route}`, {
    method,
    headers: { authorization: `Bearer ${jwt}`, 'Content-type': 'application/json' },
    body: JSON.stringify(body),
  });

  const response = await responseJSON.json();

  if (!responseJSON.ok && !response?.success) {
    throw response;
  } else {
    return response;
  }
};
