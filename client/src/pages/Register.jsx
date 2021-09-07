import React from 'react';
import Form from '../components/Form/Form';
import { FormInput, FormLabel } from '../components/Form/FormStyles';

const Register = () => {
  return (
    <Form title='Register'>
      <FormLabel htmlFor='username'>Username:</FormLabel>
      <FormInput id='username' placeholder='Username' type='text' required />
      <FormLabel htmlFor='email'>Email:</FormLabel>
      <FormInput id='email' placeholder='Email' type='text' required />
      <FormLabel htmlFor='password'>Password:</FormLabel>
      <FormInput id='password' placeholder='Password' type='password' required />
      <FormLabel htmlFor='repeat-password'>Repeat password:</FormLabel>
      <FormInput id='repeat-password' placeholder='Repeated password' type='password' required />
    </Form>
  );
};

export default Register;
