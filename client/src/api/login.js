import apiOrigin from './api';

export const loginUser = async (userLogin) => {
  const responseJSON = await fetch(`${apiOrigin}/login`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(userLogin),
  });

  const response = await responseJSON.json();

  if (!responseJSON.ok && !response?.success) {
    throw response;
  } else {
    return response;
  }
};
