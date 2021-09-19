import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/theme';

import { FiLogOut } from 'react-icons/fi';

export const HeaderWrapper = styled.header`
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  width: 100%;
  max-height: auto;
  height: ${(props) => (props.$ishamburgeropened ? '500px' : '75px')};
  padding: 10px 0;
  z-index: 1;
  margin-bottom: 20px;
  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 60px;
  }
  @media screen and (${breakpoints.desktop}) {
    height: 60px;
    margin-bottom: 0px;
  }

  background-color: ${colors.backgroundColor};
  border: 1px solid ${colors.borderColor};
`;

export const HeaderImage = styled.img`
  position: absolute;
  left: 30px;
  top: 20px;
  width: 65px;
  object-fit: contain;
  border-radius: 25px;

  @media screen and (${breakpoints.desktop}) {
    top: 10px;
  }
`;

export const HeaderLinksWrapper = styled.div`
  position: absolute;
  width: 90%;

  display: ${(props) => (props.$ishamburgeropened ? 'flex' : 'none')};
  padding-top: ${(props) => props.$ishamburgeropened && '30px'};

  flex-direction: ${(props) => (props.$ishamburgeropened ? 'column' : 'row')};
  justify-content: space-around;
  align-items: center;

  gap: ${(props) => props.$ishamburgeropened && '75px'};

  @media screen and (${breakpoints.desktop}) {
    height: 30px;
    margin: 15px 100px;
    display: flex;
  }
`;

export const HeaderLink = styled(Link)`
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

  @media screen and (${breakpoints.desktop}) {
    display: block;
  }
`;

export const HeaderLogOutButton = styled(FiLogOut)`
  height: 30px;
  width: 30px;

  &:hover {
    cursor: pointer;
    color: ${colors.error};
  }
`;

export const HamburgerLinesWrapper = styled.div`
  position: absolute;
  right: 50px;
  top: 32.5px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  cursor: pointer;

  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const HamburgerLine = styled.div`
  height: 4px;
  width: 40px;
  background-color: black;
`;
