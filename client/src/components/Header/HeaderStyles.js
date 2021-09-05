import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { breakpoints, colors } from '../../styles/theme';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: ${(props) => (props.isHamburgerOpened ? 'column' : 'row')};
  justify-content: space-around;
  align-items: center;
  ${(props) => props.isHamburgerOpened && 'gap: 75px'};

  width: 100%;
  padding: 10px 0;

  background-color: ${colors.backgroundColor};
  border: 1px solid ${colors.borderColor};
`;

export const HeaderImage = styled.img`
  width: 65px;
  object-fit: contain;
  border-radius: 25px;
`;

export const HeaderLinksWrapper = styled.div`
  display: ${(props) => (props.isHamburgerOpened ? 'none' : 'block')};
  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const HamburgerLinesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  cursor: pointer;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const HamburgerLine = styled.div`
  height: 3px;
  width: 40px;
  background-color: black;
`;

const HeaderLinksStyle = css`
  display: block;
  text-decoration: none;
  color: #20272f;
  font-size: larger;
  font-weight: 700;

  transition: 0.3s all cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    cursor: pointer;
    color: hsl(203, 39%, 44%);
  }
`;

export const HeaderLinks = styled(Link)`
  ${HeaderLinksStyle};
  display: ${(props) => (props.isHamburgerOpened ? 'block' : 'none')};

  @media screen and (${breakpoints.desktop}) {
    display: block;
    ${HeaderLinksStyle};
  }
`;
