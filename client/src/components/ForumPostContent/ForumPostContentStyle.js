import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/theme';

export const ContentWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-left: 1px solid ${colors.borderColors};
`;

export const PostTitle = styled.h1`
  font-weight: 1000;
  font-size: medium;

  @media screen and (${breakpoints.desktop}) {
    font-size: large;
  }
`;

export const PostText = styled.p`
  font-size: small;

  align-self: flex-start;
  margin: 25px;

  @media screen and (${breakpoints.desktop}) {
    font-size: medium;
  }
`;

export const Separator = styled.div`
  height: 2px;
  color: black;
  width: 100%;
`;
