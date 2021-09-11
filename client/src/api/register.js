import apiOrigin from './api';

export const registerUser = async (user) => {
  const responseJSON = await fetch(`${apiOrigin}/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  const response = await responseJSON.json();

  if (!responseJSON.ok) {
    throw response;
  } else if (response.success) {
    return response;
  }
};
