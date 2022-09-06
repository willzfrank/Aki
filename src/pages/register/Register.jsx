import {ContentWrapper} from "./RegisterStyles.js"
import {Link} from "react-router-dom"

const Register = () => {
  return (
    <ContentWrapper class="content-wrapper">
      <div className="register--header">
        <p>AKI LOGO</p>
        <Link to="/"><i class="uil uil-multiply"></i></Link>
      </div>
      <div className="register--content">
         <button className="facebook--btn"><i class="uil uil-facebook"></i> Login with Facebook</button>
        <button className="google--btn"><i class="uil uil-google"></i> Login with Google</button>
        <span>OR</span>
      </div>
      <p class="one-field">
        <input
          id="user-name"
          type="text"
          name="user-name"
          required="required"
        />
        <label for="user-name">Username</label>
      </p>
      <p class="one-field">
        <input id="subject" type="password" name="password" required="required " />
        <label for="subject">Password</label>
      </p>
      <p class="one-field">
        <input id="subject" type="text" name="country" required="required " />
        <label for="subject">Country</label>
      </p>
      <p class="one-field">
        <input id="subject" type="email" name="email" required="required " />
        <label for="subject">Email</label>
      </p>
      
    </ContentWrapper>
  );
};

export default Register;
