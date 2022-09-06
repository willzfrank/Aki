import React from 'react';
import { SellerContainer } from './SellerStyles';
import SellerCard from '../SellerCard/SellerCard';

const Seller = () => {
  return (
    <SellerContainer>
      <h3>Explore our verified sellers</h3>
      <div className="sellercontainer">
        <div className="sellercard--list">
          <SellerCard />
          <SellerCard />
          <SellerCard />
          <SellerCard />
          <SellerCard />
          <SellerCard />
          <SellerCard />
          <SellerCard />
        </div>
        <button>Load more</button>
      </div>
    </SellerContainer>
  );
};

export default Seller;
