import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Price } from "./components/Price";
import { HowItWorks } from "./components/HowItWorks";
import Footer from "./components/Footer";
import Testemonial from "./components/Testemonial";
import OurPartners from "./components/OurPartners";
import BookCall from "./components/BookCall";
import SocialProof from "./components/SocialProof";
import Gallery from "./components/Gallery";
import MoreLanguage from "./components/MoreLanguage";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <OurPartners />
      <SocialProof />
      <Gallery />
      <Price />
      <HowItWorks />
      <MoreLanguage />
      <Testemonial />
      <BookCall />
      <Footer />
    </>
  );
}

export default App;
