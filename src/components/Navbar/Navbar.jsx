import { NavbarContainer, NavbarList, NavbarLoginBtn } from './NavbarStyles';
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <NavbarContainer>
      {/* <img /> */}
      LOGO
      <NavbarList>
        <div className="navbarlist--container">
          <p>Fashion & Beauty </p>
          <i class="uil uil-angle-down"></i>
        </div>
        <div className="navbarlist--container">
          <p>Health & Wellness</p>
          <i class="uil uil-angle-down"></i>
        </div>
        <div className="navbarlist--container">
          <p>Food & Drinks</p>
          <i class="uil uil-angle-down"></i>
        </div>
        <div className="navbarlist--container">
          <p>Art & Crafts</p>
          <i class="uil uil-angle-down"></i>
        </div>
        <div className="navbarlist--container">
          <p>Furniture & Interiors</p>
          <i class="uil uil-angle-down"></i>
        </div>
        <div className="navbarlist--container">
          <p>Learning</p>
          <i class="uil uil-angle-down"></i>
        </div>
        <div className="navbarlist--container">
          <p>Others</p>
          <i class="uil uil-angle-down"></i>
        </div>
      </NavbarList>
      <NavbarLoginBtn>
        <ul>
          <li>
            <a> Become a producer</a>
          </li>
          <li>
            <Link to="/register" className="link">Register</Link>
          </li>
          <li className="login--btn">
            <Link to="/login" className="link">Login</Link> 
          </li>
        </ul>
      </NavbarLoginBtn>
    </NavbarContainer>
  );
};

export default Navbar;
