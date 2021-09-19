import { contactAPI } from './api';

export const loginUser = async (userLogin) => {
  return contactAPI('login', 'POST', userLogin);
};
