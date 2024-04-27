import React, { useState } from 'react';
import BackButton from './BackButton';
import "./SignupPage.css";


const SignupPage = () => {

  const handleBackButtonClick = () => {
    // Handle back button click logic here
    console.log('Back button clicked!');
  };
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., send data to backend)
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className='page'>
      <header>
        <BackButton onClick={handleBackButtonClick}/>
      </header>

      <form className='form' onSubmit={handleSubmit}>
        <h1 className='form__title'>Sign up</h1>
        <p className='form__subtitle'>Choose a registration method</p>

        <div className='field'>
          <label className='field__label' type="email" name="email">Email</label>
          <input className='field__input' 
            type="email" 
            placeholder='example@gmail.com'
            value={email} 
            onChange={handleEmailChange}
          />
        </div>
        <div className='field'>
          <label className='field__label'>Password</label>
          <input className='field__input' 
            type="password" 
            placeholder='Pass2000ID'
            value={password} 
            onChange={handlePasswordChange}
          />
        </div>

        <span className='link__prefix'>Already have an account? <a className='link'>Sign In</a></span>
        
        <button className='form__button' type="submit">Continue</button>
        
      </form>
    </div>
  );
};

export default SignupPage;
