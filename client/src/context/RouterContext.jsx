import React, { createContext } from 'react';
import Forum from '../pages/Forum';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

const RouterContext = createContext([
  {
    name: 'Home',
    link: '/',
    component: (
      <React.Fragment>
        <Home />
      </React.Fragment>
    ),
  },
  {
    name: 'Register',
    link: '/register',
    component: (
      <React.Fragment>
        <Register />
      </React.Fragment>
    ),
  },
  {
    name: 'Login',
    link: '/login',
    component: (
      <React.Fragment>
        <Login />
      </React.Fragment>
    ),
  },
  {
    name: 'Forum',
    link: '/forum',
    component: (
      <React.Fragment>
        <Forum />
      </React.Fragment>
    ),
  },
]);

export default RouterContext;
