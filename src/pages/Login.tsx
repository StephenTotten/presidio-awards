import React from 'react';
import Button from '../components/Button';

const Login: React.FC = () => {
  return (
    <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required={true} />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required={true} />
          <label>Password</label>
        </div>
        <Button text="Submit"></Button>
      </form>
    </div>
  );
};

export default Login;
