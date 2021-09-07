import React from 'react';
import { DefaultText } from '../../styles/generalStyles';
import { FormWrapper, FormHeader, FormContent, FormFooter, FormButton } from './FormStyles';

/**
 *
 * @param title
 * @param children
 * @returns
 */
const Form = (props) => {
  return (
    <FormWrapper>
      <FormHeader>
        <DefaultText>{props.title}</DefaultText>
      </FormHeader>
      <FormContent>
        {props.children}
        <FormButton>Submit</FormButton>
      </FormContent>
      <FormFooter />
    </FormWrapper>
  );
};

export default Form;
