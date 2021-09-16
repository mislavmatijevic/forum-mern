import { createContext } from 'react';

const AuthContext = createContext({
  jwt: localStorage.getItem('jwt'),
});

export default AuthContext;
