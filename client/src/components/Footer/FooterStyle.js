import styled from 'styled-components';
import { colors } from '../../styles/theme';

export const FooterWrapper = styled.footer`
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: center;
  background-color: ${colors.backgroundColor};
  border: 1px solid ${colors.borderColor};
  width: 100%;
  padding: 10px;
`;
