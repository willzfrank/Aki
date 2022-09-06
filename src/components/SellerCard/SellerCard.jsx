import { SellerCardContainer } from './SellerCardStyles';

const SellerCard = () => {
  return (
    <SellerCardContainer>
      <div>
        <div className="sellercard--profile">
          <span></span>
          <div>
            <p>Shola pottery</p>
            <p className="green">pottery</p>
          </div>
        </div>
      </div>
      <div className="sellercardcontainer--middle">
        <img src="" alt="" />
        <div className="fakeimagecontainer">image is here</div>
        <h3>Shola Ankara Bag</h3>
        <p className="price">&#8358; 14,500.00</p>
        <p>Promotion with free pot stans</p>
        <div className="icon--container">
          <div className="heart">
            <i class="uil uil-heart"></i>
            <span>11</span>
          </div>
          <div className="clipboard">
            <i class="uil uil-clipboard-alt"></i>
          </div>

          <div className="cart">
            <i class="uil uil-shopping-cart-alt"></i>
            <span>Add to cart</span>
          </div>
        </div>
      </div>
    </SellerCardContainer>
  );
};

export default SellerCard;
