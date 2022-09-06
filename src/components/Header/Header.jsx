import { HeaderContainer } from './HeaderStyle';

const Header = () => {
  return (
    <HeaderContainer>
      <div className="HeaderContainer--box">
        <div className="HeaderContainer--top">
          <p>PRODUCER</p>
          <span></span>
          <p>RESELLERS</p>
          <span></span>
          <p>BUYERS</p>
        </div>
        <p className="text--middle">
          Discover how you can turn social media
          <br /> community into money
        </p>
        <button>
          Explore now <i class="uil uil-arrow-right"></i>
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
