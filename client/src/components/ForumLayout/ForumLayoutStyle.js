import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';

export const GridLayout = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100px;

  gap: 15px;

  display: grid;
  grid-template-columns: 1fr 3fr;

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: 1fr 3fr;
  }
`;
