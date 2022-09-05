import { NavbarContainer, NavbarList, NavbarLoginBtn } from './NavbarStyles';

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
            <a> Register</a>
          </li>
          <li className="login--btn">
            <a> Login</a>
          </li>
        </ul>
      </NavbarLoginBtn>
    </NavbarContainer>
  );
};

export default Navbar;
