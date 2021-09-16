import React, { useContext, useEffect } from 'react';
import { Switch, Route, useHistory, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';

import './App.css';

import Footer from './components/Footer/Footer';

import Main from './components/Main/Main';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Forum from './pages/Forum';
import AuthContext from './context/AuthContext';

const App = () => {
  const history = useHistory();
  const location = useLocation();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.jwt = localStorage.getItem('jwt');
  }, [authContext, location.pathname]);

  return (
    <>
      <Header />
      <Main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
          <Route exact path='/forum'>
            <Forum />
          </Route>
          <Route path='*'>{() => history.push('')}</Route>
        </Switch>
      </Main>
      <Footer />
    </>
  );
};

export default App;
