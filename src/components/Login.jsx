import React from 'react';
import './Login.css'; // Import your custom CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import logo from '../public/logo-neo.jpg'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-logo-container">
        {/* Company Logo */}
        <div className='company-logo-container'>
           <img src="/images/logo-neo.png" alt="Company Logo" className="company-logo" />
        </div>
      </div>
      <div className="login-form-container">
        {/* Login Form */}
        <h2 className="login-title">Log in</h2>
        <div className="login-inputs">
          <input type="email" className="form-control mirrored-input" placeholder="Email" />
          <input type="password" className="form-control mirrored-input" placeholder="Password" />
          
        </div>
        <button className='btn btn-primary btn-block'>Log in</button>
        <div className="or-divider">
          <span>or</span>
        </div>
        <div className="login-social-buttons">
          <button className="btn btn-primary btn-block">Login with Google</button>
          <button className="btn btn-success btnsuccess-block">Login with Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
