import styled from 'styled-components';
import { colors } from '../../styles/theme';
import { VscClose } from 'react-icons/vsc';

export const ErrorMessageContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row-reverse;

  top: 100px;
  margin: 0 10px;
  padding: 15px 30px 15px 15px;
  border-radius: 10px;

  border: 2px ${colors.secondaryColorDark} solid;
  background-color: ${colors.secondaryColorLight};

  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);

  opacity: 0.75;
  &:hover {
    opacity: 1;
  }

  z-index: 99;
`;

export const ErrorMessageIcon = styled(VscClose)`
  position: absolute;
  width: 30px;
  height: 30px;
  transform: translate(30px, -15px);
  color: ${colors.secondaryColorDark};
  &:hover {
    cursor: pointer;
  }
`;

export const ErrorMessageText = styled.span`
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 1000;
  color: ${colors.error};
`;
