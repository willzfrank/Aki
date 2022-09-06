import { LoginComponent, LoginContent } from './LoginStyle.js';
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <LoginComponent>
      <div className="login--header">
        <Link to="/"><i class="uil uil-multiply"></i></Link>
       
      </div>
      <LoginContent>
        <img src="" alt="" />
        AKI LOGO
        <button className="facebook--btn"><i class="uil uil-facebook"></i> Login with Facebook</button>
        <button className="google--btn"><i class="uil uil-google"></i> Login with Google</button>
        <span>OR</span>
        <input type="text" placeholder="Username or email" className="email--input"/>
        <input type="password" placeholder="Password" className="password"/>
        <p className="F-password">Forgot password?</p>
        <input type="button" value="Login" className="login--btn" />
        {/* <Link to="/login">Login</Link> */}
        <p>
          Dont have an account? <a href="#">Sign up</a>
        </p>
      </LoginContent>
    </LoginComponent>
  );
};

export default Login;
