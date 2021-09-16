import React, { useContext, useState } from 'react';
import {
  HamburgerLine,
  HamburgerLinesWrapper,
  HeaderImage,
  HeaderLinks,
  HeaderLinksWrapper,
  HeaderLogOutButton,
  HeaderWrapper,
} from './HeaderStyles';

import logoImage from '../../assets/forum-logo.png';
import AuthContext from '../../context/AuthContext';
import { useHistory } from 'react-router';

const Header = () => {
  const authContext = useContext(AuthContext);
  const history = useHistory();
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

  const handleLogOut = () => {
    localStorage.setItem('jwt', '');
    authContext.jwt = '';
    history.push('/');
  };

  return (
    <>
      <HeaderWrapper $ishamburgeropened={isHamburgerOpened}>
        <HeaderImage alt='Logo image' src={logoImage} />
        <HeaderLinksWrapper $ishamburgeropened={isHamburgerOpened}>
          <HeaderLinks to='/' onClick={() => setIsHamburgerOpened(false)}>
            Home
          </HeaderLinks>
          <HeaderLinks to='/register' onClick={() => setIsHamburgerOpened(false)}>
            Register
          </HeaderLinks>
          <HeaderLinks to='/login' onClick={() => setIsHamburgerOpened(false)}>
            Login
          </HeaderLinks>
          <HeaderLinks to='/forum' onClick={() => setIsHamburgerOpened(false)}>
            Forum
          </HeaderLinks>
          {authContext.jwt && <HeaderLogOutButton onClick={handleLogOut} />}
        </HeaderLinksWrapper>
        <HamburgerLinesWrapper
          onClick={() => setIsHamburgerOpened((currentState) => !currentState)}
          $ishamburgeropened={isHamburgerOpened}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerLinesWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
