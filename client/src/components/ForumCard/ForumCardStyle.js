import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/theme';

export const CardWrapper = styled.article`
  border: 2px solid ${colors.borderColor};
  border-left: none;

  padding: 10px 15px;

  cursor: pointer;

  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);

  box-shadow: 0px 0px 6px 1px rgba(174, 174, 174, 0.85);

  &:hover {
    box-shadow: 0px 0px 10px 1px rgba(174, 174, 174, 0.85);
  }

  @media screen and (${breakpoints.desktop}) {
    padding: 15px 25px;
  }
`;

export const CardText = styled.span`
  font-style: italic;
  font-size: small;
  font-stretch: condensed;

  @media screen and (${breakpoints.tablet}) {
    font-size: medium;
    font-stretch: normal;
  }
`;
