import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';

import './App.css';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import styled from 'styled-components';
import RouterContext from './context/RouterContext';
import { breakpoints } from './styles/theme';

const Main = styled.main`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${breakpoints.tablet}) {
    display: initial;
  }
`;

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
