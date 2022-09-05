import NavbarXSearchBar from '../../components/navBarXsearchBar/NavbarXSearchBar';
import Discover from '../../components/Discover/Discover';
import LandingHeader from '../../components/LandingHeader/LandingHeader';
import LandingEarn from '../../components/LandingEarn/LandingEarn';
import LandingLove from '../../components/LandingLove/LandingLove';
import LandingSupplier from '../../components/LandingSupplier/LandingSupplier';
import LandingExperience from '../../components/LandingExperience/LandingExperience';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import LandingBusiness from '../../components/LandingBusiness/LandingBusiness';

const LandingPage = () => {
  return (
    <div>
      <NavbarXSearchBar />
      <Discover />
      <LandingHeader />
      <LandingEarn />
      <LandingLove />
      <LandingSupplier />
      <LandingExperience />
      <HowItWorks />
      <LandingBusiness />
      <div>
        <div>
          Aki Africa Producer
          <br />
          Support Available 24/7
        </div>
        <div>
          <p>
            Meesho supplier support is available to sell all your doubts and{' '}
            <br />
            issues before and after you start your online selling business
          </p>
          <p>
            You can reach out to <a href="#">sell@aki.africa</a>
          </p>
        </div>
      </div>
      <footer />
    </div>
  );
};

export default LandingPage;
