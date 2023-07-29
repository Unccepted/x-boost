import { Navigation } from "./components/Navigation";
import { Home } from "./components/Home";
import { Price } from "./components/Price/index";
import { HowItWorks } from "./components/HIW/HowItWorks";
import Footer from "./components/Footer";
import Testemonial from "./components/Testemonial";
import OurPartners from "./components/OurPartners";
import BookCall from "./components/BookCall";
import SocialProof from "./components/SocialProof";
import OurCases from "./components/OurCases";
import MoreLanguage from "./components/MoreLanguage";

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <OurPartners />
      <SocialProof />
      <OurCases />
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
