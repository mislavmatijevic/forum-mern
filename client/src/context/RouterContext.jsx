import { createContext } from 'react';

const RouterContext = createContext([
  {
    name: 'Home',
    link: '',
  },
  {
    name: 'Register',
    link: 'register',
  },
  {
    name: 'Login',
    link: 'login',
  },
  {
    name: 'Forum',
    link: 'forum',
  },
]);

export default RouterContext;
