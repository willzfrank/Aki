import React from 'react';
import SellerCard from '../SellerCard/SellerCard';

const Seller = () => {
  return (
    <div>
      <h2>Explore our verified sellers</h2>
      <SellerCard />
      <button>Load more</button>
    </div>
  );
};

export default Seller;
