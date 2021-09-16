import React, { useContext, useState } from 'react';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Form from '../components/Form/Form';
import { loginUser } from '../api/login';
import { useHistory } from 'react-router';
import AuthContext from '../context/AuthContext';

const formFields = [
  { name: 'username', displayName: 'Username', type: 'text' },
  { name: 'password', displayName: 'Password', type: 'password' },
];

const Login = () => {
  const [isError, setIsError] = useState(false);
  const authContext = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = async (userObj) => {
    try {
      const response = await loginUser(userObj);
      setIsError(false);
      localStorage.setItem('jwt', response.token);
      authContext.jwt = response.token;
      history.push('/');
    } catch (error) {
      setIsError(error.message);
    }
  };

  return (
    <>
      {isError && <ErrorMessage errorMessage={isError} onErrorMessageClose={() => setIsError(false)} />}
      <Form title='Login' callback={handleLogin} formFields={formFields}></Form>
    </>
  );
};

export default Login;
