import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import './App.css';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NotFound from './components/NotFound/NotFound';
import styled from 'styled-components';

const Content = styled(BrowserRouter)``;

const App = () => {
  return (
    <>
      <Content>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/alfa'>
            <Home />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Content>
      <Footer />
    </>
  );
};

export default App;
