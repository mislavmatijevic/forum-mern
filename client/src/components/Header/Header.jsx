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
      <HeaderWrapper $ishamburgeropened={isHamburgerOpened}>
        <HeaderImage alt='Logo image' src={logoImage} />
        {links.map((value, index) => (
          <HeaderLinks
            to={value.link}
            key={index}
            onClick={() => setIsHamburgerOpened(false)}
            $ishamburgeropened={isHamburgerOpened}>
            {value.name}
          </HeaderLinks>
        ))}
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
