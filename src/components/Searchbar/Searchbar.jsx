import {
  SearchbarContainer,
  FormContainer,
  AccountContainer,
} from './SearchbarStyles';

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <div>
        <img src="" alt="" />
        AKI LOGO
      </div>

      <FormContainer>
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for african products"
        />
        <button type="submit" className="formcontainer--btn">
          <i class="uil uil-search"></i>
          Search
        </button>
      </FormContainer>

      <AccountContainer>
        <div className="accountcontainer--box">
          <i class="uil uil-user"></i>
          <p>Account</p>
        </div>
        <div className="accountcontainer--box">
          <i class="uil uil-shopping-cart-alt"></i>
          <p>Cart</p>
        </div>
      </AccountContainer>
    </SearchbarContainer>
  );
};

export default Searchbar;
