import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import './App.css';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';

import RouterContext from './context/RouterContext';
import Main from './components/Main/Main';

const App = () => {
  const links = useContext(RouterContext);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Main>
          <Switch>
            {links.map((value, index) => (
              <Route key={index} exact path={value.link}>
                <React.Fragment>{value.component}</React.Fragment>
              </Route>
            ))}
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
