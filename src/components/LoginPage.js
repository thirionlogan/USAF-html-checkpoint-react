import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const LoginPage = (props) => {
  const [redirectToBrowse, setRedirectToBrowse] = useState(false);

  if (redirectToBrowse) return <Redirect to='/browse' />;

  return (
    <form
      id='loginPage'
      className='loginPage'
      onSubmit={(event) => {
        event.preventDefault();
        setRedirectToBrowse(true);
      }}
    >
      <h2>Login</h2>
      <label for='email'>Email:</label>
      <br />
      <input type='text' name='email' id='email' required />
      <br />
      <label for='password'>Password:</label>
      <br />
      <input type='password' name='password' id='password' required />
      <br />
      <button type='submit' className='primaryButton'>
        Login
      </button>
    </form>
  );
};

export default LoginPage;
