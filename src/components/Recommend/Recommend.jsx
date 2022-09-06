import { RecommendContainer } from './RecommendStyles';
import SellerCard from '../SellerCard/SellerCard';

const Recommend = () => {
  return (
    <RecommendContainer>
      <h3 className="recommend--title">Recommended for you</h3>
      <div className="recommendedslider">
        <SellerCard />
        <SellerCard />
        <SellerCard />
        <SellerCard />
      </div>
    </RecommendContainer>
  );
};

export default Recommend;
