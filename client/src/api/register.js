import { contactAPI } from './api';

export const registerUser = async (userRegister) => {
  return contactAPI('register', 'POST', userRegister);
};
