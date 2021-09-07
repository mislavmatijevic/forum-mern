import React from 'react';
import Form from '../components/Form/Form';

const formFields = [
  { name: 'username', displayName: 'Username', type: 'text' },
  { name: 'email', displayName: 'Email', type: 'email' },
  { name: 'password', displayName: 'Password', type: 'password' },
  { name: 'repeatpassword', displayName: 'Repeat password', type: 'password' },
];

const Register = () => {
  const registerUser = () => {};

  return <Form title='Register' callback={registerUser} formFields={formFields}></Form>;
};

export default Register;
