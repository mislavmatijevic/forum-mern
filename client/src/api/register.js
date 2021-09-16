import apiOrigin from './api';

export const registerUser = async (userRegister) => {
  const responseJSON = await fetch(`${apiOrigin}/register`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(userRegister),
  });

  const response = await responseJSON.json();

  if (!responseJSON.ok && !response?.success) {
    throw response;
  } else {
    return response;
  }
};
