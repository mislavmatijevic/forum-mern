import React, { useState } from 'react';
import {
  FormWrapper,
  FormHeader,
  FormContent,
  FormFooter,
  FormButton,
  FormLabel,
  FormInput,
  FormError,
} from './FormStyles';

const regexps = {
  text: /^.{3,}$/,
  email:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  password: /^(?=.*\d)(?=.*[A-Za-zšđčćžŠĐČĆŽ])[\wšđčćžŠĐČĆŽ]{4,}$/,
};

/**
 *
 * @param title
 * @param children
 * @returns
 */
const Form = ({ title, formFields, callback }) => {
  const [isButtonClicked, setisButtonClicked] = useState(false);

  // field name = 'string' or false if failed regex
  const [filledFields, setFilledFields] = useState(
    formFields.reduce((newObj, field) => {
      newObj[field.name] = '';
      return newObj;
    }, {})
  );

  const setButtonClicked = () => {
    setisButtonClicked(true);
    setTimeout(() => {
      setisButtonClicked(false);
    }, 300);
  };

  const onChange = (event) => {
    const fieldName = event.target.id;
    const fieldValue = event.target.value;

    let newValue = false;

    if (
      fieldValue === '' ||
      RegExp(regexps[formFields.find((field) => field.name === fieldName).type]).test(fieldValue)
    ) {
      newValue = fieldValue;
    }

    setFilledFields((prev) => ({ ...prev, [fieldName]: newValue }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let allOK = true;

    formFields.forEach((value) => {
      if (!filledFields[value.name]) {
        document.getElementById(`${value.name}-error`).textContent = `${value.displayName} is invalid.`;
        allOK = false;
      } else {
        document.getElementById(`${value.name}-error`).textContent = '';
      }
    });

    if (allOK) {
      callback(filledFields);
    }
  };

  return (
    <FormWrapper onSubmit={onSubmit}>
      <FormHeader>{title} Form</FormHeader>
      <FormContent>
        {formFields.map((value, index) => (
          <React.Fragment key={index}>
            <FormLabel htmlFor={value.name}>{value.displayName}:</FormLabel>
            <FormInput
              id={value.name}
              placeholder={value.displayName}
              type={value.type}
              onInput={onChange}
              $state={filledFields[value.name]}
            />
            <FormError id={`${value.name}-error`} />
          </React.Fragment>
        ))}
        <FormButton onClick={setButtonClicked} $isClicked={isButtonClicked}>
          {title}
        </FormButton>
      </FormContent>
      <FormFooter />
    </FormWrapper>
  );
};

export default Form;
