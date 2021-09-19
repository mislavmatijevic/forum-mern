import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/theme';

export const FooterWrapper = styled.footer`
  display: flex;
  position: relative;
  bottom: 0;
  justify-content: center;
  background-color: ${colors.backgroundColor};
  border: 1px solid ${colors.borderColor};
  width: 100%;
  padding: 10px;
  margin-top: 20px;

  @media screen and (${breakpoints.desktop}) {
    margin-top: 0;
  }
`;
