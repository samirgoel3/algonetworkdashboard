import React from 'react';
import './login.css'
function Login() {
  return (
    <div className="main-root">
      <div className='input-container'>

        <div className='image'>

          <div className='spinning-triangle'/>

        </div>
        <div className='line'></div>
        <div className='input-box'>
          <span className='login-text'>Login</span>
          <span className='login-sub-text'>Please enter you credential obtained on your mail.</span>
          <span className='input-heading'>Email</span>
          <input className='input' placeholder='Please enter email'/>


          <span className='input-heading'>Password</span>
          <input className='input' placeholder='Enter password'/>

          <button className='login-btn'> Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
