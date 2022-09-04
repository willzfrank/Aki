import NavbarXSearchBar from '../../components/navBarXsearchBar';
import ReviewComponent from '../../components/ReviewComponent/ReviewComponent';
import Seller from '../../components/Seller/Seller';
import Newsletter from '../../components/Newsletter/Newsletter';

const ActiveWear = () => {
  return (
    <div>
      <NavbarXSearchBar />
      <div>
        <div>
          <p>Women's Fashion {'>'} Activewear</p>
        </div>
        <div>
          <div className="left--top">
            <div>
              <div>
                <img src="" alt="" />
                <button>Buy Now</button>
                <button>Share & Make Money</button>
                <div>
                  <h6>5 Similar Products</h6>
                  <div>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="left--middle">
              <h5>Lagos</h5>
              <div>
                <p>card Like new i</p>
                <p>groupicon Meetup</p>
                <p>location icon Lagos</p>
              </div>
              <h5>Details</h5>
              <div>
                <div>
                  <h6>Brand</h6>
                  <p>Treddyfakky</p>
                </div>
                <div>
                  <h6>Model</h6>
                  <p>Lady Treddy flakky</p>
                </div>
                <div>
                  <h6>Gender</h6>
                  <p>Women</p>
                </div>
                <div>
                  <h6>Type</h6>
                  <p>Free shots</p>
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <h5>Condition</h5>
                    <p>Newly Produced</p>
                    <p>Produced in the best condition</p>
                  </div>
                  <div>
                    <h5>Shipping</h5>
                    <p>Custom Courier</p>
                  </div>
                  <div>
                    <h5>Payment</h5>
                    <p>Aki Africa Protection Powered by</p>
                  </div>
                </div>
                <div>
                  <h5>Product Details</h5>
                  <ul>
                    <li>Name : Treddyfakky</li>
                    <li>Ankara Fabric: Isale Eko Collection</li>
                    <li>Shorts: Elastic Bank</li>
                    <li>Blouse Fabric</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="left--bottom">
              <div>
                <div>
                  <img src="" alt="" />
                </div>
                <div>
                  <h5>Ttrandyflakky</h5>
                  <p>@ankarabags</p>
                  <p>Joined 2 years ago</p>
                  <p>Very Responsive</p>
                  <p>Verified</p>
                </div>
              </div>
              <div>
                <div>
                  <h6>Reviews for @brandedbags.</h6>
                  <p>4.9 5star logo</p>
                  <p>(65)</p>
                </div>
                <ReviewComponent />
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
      <div>
        <h2>Similar listing</h2>
        <Seller />
        <button>Load more</button>
      </div>
      <div>
        <Newsletter />
        <footer />
      </div>
    </div>
  );
};

export default ActiveWear;
