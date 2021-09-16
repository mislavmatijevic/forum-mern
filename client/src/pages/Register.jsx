import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { registerUser } from '../api/register';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Form from '../components/Form/Form';

const formFields = [
  { name: 'username', displayName: 'Username', type: 'text' },
  { name: 'mail', displayName: 'Email', type: 'email' },
  { name: 'password', displayName: 'Password', type: 'password' },
  { name: 'repeatpassword', displayName: 'Repeat password', type: 'password' },
];

const Register = () => {
  const [isError, setIsError] = useState(false);
  const history = useHistory();

  const handleRegister = async (userObj) => {
    if (userObj.password !== userObj.repeatpassword) {
      return setIsError("Passwords don't match!");
    }

    try {
      await registerUser(userObj);
      setIsError(false);
      history.push('login');
    } catch (error) {
      setIsError(error.message);
    }
  };

  return (
    <>
      {isError && <ErrorMessage errorMessage={isError} onErrorMessageClose={() => setIsError(false)} />}
      <Form title='Register' callback={handleRegister} formFields={formFields}></Form>
    </>
  );
};

export default Register;
