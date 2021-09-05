import React, { useContext, useState } from 'react';
import {
  HamburgerLine,
  HamburgerLinesWrapper,
  HeaderImage,
  HeaderLinks,
  HeaderWrapper,
} from './HeaderStyles';

import logoImage from '../../assets/forum-logo.png';
import RouterContext from '../../context/RouterContext';

const Header = () => {
  const links = useContext(RouterContext);
  const [isHamburgerOpened, setIsHamburgerOpened] = useState(false);

  return (
    <>
      <HeaderWrapper isHamburgerOpened={isHamburgerOpened}>
        <HeaderImage alt='Logo image' src={logoImage} />
        {links.map((value, index) => (
          <HeaderLinks
            to={value.link}
            key={index}
            onClick={() => setIsHamburgerOpened((currentState) => false)}
            isHamburgerOpened={isHamburgerOpened}>
            {value.name}
          </HeaderLinks>
        ))}
        <HamburgerLinesWrapper
          onClick={() => setIsHamburgerOpened((currentState) => !currentState)}
          isHamburgerOpened={isHamburgerOpened}>
          <HamburgerLine />
          <HamburgerLine />
          <HamburgerLine />
        </HamburgerLinesWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
