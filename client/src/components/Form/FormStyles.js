import styled from 'styled-components';
import { DefaultTextStyle } from '../../styles/generalStyles';

import { breakpoints, colors } from '../../styles/theme';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;

  background-color: ${colors.backgroundColor};
  border: 1px solid ${colors.borderColor};
  border-radius: 15px;

  margin: 25px;
  width: 100%;

  transition: all 0.3s linear;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 15px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media screen and (${breakpoints.tablet}) {
    max-width: 650px;
    margin: auto;
  }
`;

export const FormHeader = styled.div`
  ${DefaultTextStyle};

  background-color: ${colors.secondaryColor};
  padding: 20px;
  text-align: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  padding: 15px 35px;

  @media screen and (${breakpoints.desktop}) {
    display: grid;
    grid-template-columns: 3fr 4fr;

    gap: 30px;
  }
`;

export const FormLabel = styled.label`
  font-size: 25px;
  margin: auto 0;
  color: ${colors.secondaryColorDark};
`;

export const FormInput = styled.input`
  border-radius: 5px;
  height: 35px;
  background-color: ${(props) => (!props.$state ? `${colors.backgroundColor}` : `white`)};
  color: ${(props) => props.$state === false && colors.error};
`;

export const FormError = styled.p`
  color: ${colors.error};
  text-align: center;
  grid-column: 2;
  &:empty {
    display: none;
  }
`;

export const FormButton = styled.button`
  ${DefaultTextStyle};
  border-radius: 5px;
  background-color: ${colors.secondaryColorLight};
  border: 2px solid ${(props) => (props.$isClicked ? colors.backgroundColor : colors.borderColor)};
  grid-column: 1 / span 2;

  margin: 30px auto 0;

  height: 50px;
  width: ${(props) => (props.$isClicked ? '90%' : '100%')};

  transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: ${colors.secondaryColor};
  }
`;

export const FormFooter = styled.div`
  height: 25px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${colors.secondaryColor};
`;
