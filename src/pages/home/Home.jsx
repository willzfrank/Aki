import Navbar from '../../components/Navbar/Navbar';
import Discover from '../../components/Discover/Discover';
import Searchbar from '../../components/Searchbar/Searchbar';
import Header from '../../components/Header/Header';
import Earn from '../../components/Earn/Earn';
import Seller from '../../components/Seller/Seller';
import { PaddingSection } from './HomeStyles';
import Recommend from '../../components/Recommend/Recommend';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Header />
      <PaddingSection>
        <Discover />
        <Earn />
        <Seller />
        <Recommend />
      </PaddingSection>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
