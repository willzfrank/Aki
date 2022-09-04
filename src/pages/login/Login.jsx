import React from 'react';

const Login = () => {
  return (
    <div>
      <div>
        <img src="" alt="" />
        close icon
      </div>
      <div>
        <button>faceboom icon Login with Facebook</button>
        <button>Google Login with Google</button>
        or
        <input type="text" placeholder="Username or email" />
        <input type="password" placeholder="Password" />
        <p>Forgot password?</p>
        <input type="button" value="Login" />
        <p>
          Dont have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
