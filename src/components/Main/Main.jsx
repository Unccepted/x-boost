import { Navigation } from "../Header/Navigation";
import { Home } from "../Hero/Home";
import { PriceComponent } from "../Price/PriceComponent";
import { HowItWorks } from "../Features/HowItWorks";
import Footer from "../Footer/Footer";
// import Testemonial from "../WhyX/Testemonial";
// import OurPartners from "../Content/OurPartners";
import BookCall from "../CTA/BookCall";
import { SocialProof } from "../WhyX/SocialProof";
import OurCases from "../Content/OurCases";
import MoreLanguage from "../Features/MoreLanguage";
import PopupComponent from "../Popup/PopupComponent.jsx";

// import { GrowChart } from "../Charts/GrowChart";

function Main() {
  return (
    <>
      <Navigation />
      <Home />
      {/* <OurPartners /> */}
      <SocialProof />
      {/* <GrowChart /> */}
      <OurCases />
      <MoreLanguage />
      <HowItWorks />
      <PriceComponent />
      {/* <Testemonial /> */}
      <PopupComponent />
      <BookCall />
      <Footer />
    </>
  );
}

export default Main;
