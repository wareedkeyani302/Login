import { Button } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    if (email && password) {
      navigate('/home');
    } else {
      alert('Please fill in both email and password.');
    }
  };

  return (
    <div className='login-container'>
      <div className='form'>
      <h1 className='heading'>Login Form</h1>
        <div className='form-group'>
          <label htmlFor='Email'>Email</label>
          <input
            type='email'
            placeholder='Please Enter your Email'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='Password'>Password</label>
          <input
            type='password'
            placeholder='Please Enter your Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <Button type='submit' onClick={handleLoginClick} className='login-button'>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
