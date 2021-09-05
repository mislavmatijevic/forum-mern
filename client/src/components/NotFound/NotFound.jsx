import React from 'react';
import { DefaultText, Illustration } from '../../styles/generalStyles';
import { ErrorMessage } from './NotFoundStyles';

import NotFoundImage from '../../assets/not-found.jpg';

const NotFound = () => {
  return (
    <>
      <ErrorMessage>404 Page Not Found</ErrorMessage>
      <DefaultText>The site you have requested is not found. Please go back to the homepage!</DefaultText>
      <Illustration src={NotFoundImage} alt='Page not found' />
    </>
  );
};

export default NotFound;
