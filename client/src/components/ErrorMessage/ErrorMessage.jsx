import React from 'react';
import { ErrorMessageContainer, ErrorMessageIcon, ErrorMessageText } from './ErrorMessageStyle';

const ErrorMessage = ({ onErrorMessageClose, errorMessage }) => (
  <ErrorMessageContainer>
    <ErrorMessageIcon onClick={onErrorMessageClose} />
    <ErrorMessageText>{errorMessage}</ErrorMessageText>
  </ErrorMessageContainer>
);

export default ErrorMessage;
