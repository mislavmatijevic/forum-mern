import styled from 'styled-components';

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
    grid-template-columns: repeat(2, 1fr);

    gap: 30px;
  }
`;

export const FormLabel = styled.label`
  font-size: 25px;
  margin: auto 0;
`;

export const FormInput = styled.input`
  border-radius: 5px;
  height: 30px;
`;

export const FormButton = styled.button`
  border-radius: 5px;
  background-color: ${colors.secondaryColorLight};
  border: 2px solid ${colors.borderColor};
  grid-column: 1 / span 2;

  margin: 30px auto 0;

  height: 40px;
  width: 100%;

  transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    background-color: ${colors.secondaryColor};
  }

  &:focus {
    width: 90%;
  }
`;

export const FormFooter = styled.div`
  height: 25px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: ${colors.secondaryColor};
`;
