import React from 'react';

const Navbar = () => {
  return (
    <div>
      <img />
      <div>
        <div>
          <p>Fashion & Beauty </p>
          drop arrow
        </div>
        <div>
          <p>Health & Wellness</p>
          drop arrow
        </div>
        <div>
          <p>Food & Drinks</p>
          drop arrow
        </div>
        <div>
          <p>Art & Crafts</p>
          drop arrow
        </div>
        <div>
          <p>Furniture & Interiors</p>
          drop arrow
        </div>
        <div>
          <p>Learning</p>
          drop arrow
        </div>
        <div>
          <p>Others</p>
          drop arrow
        </div>
      </div>

      <div>
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
      </div>
    </div>
  );
};

export default Navbar;
