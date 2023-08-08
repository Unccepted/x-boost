import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navigation } from "./components/Header/Navigation";
import { Home } from "./components/Hero/Home";
import { PriceComponent } from "./components/Price/PriceComponent";
import { HowItWorks } from "./components/Features/HowItWorks";
import Footer from "./components/Footer/Footer";
import Testemonial from "./components/WhyX/Testemonial";
import OurPartners from "./components/Content/OurPartners";
import BookCall from "./components/CTA/BookCall";
import { SocialProof } from "./components/WhyX/SocialProof";
import OurCases from "./components/Content/OurCases";
import MoreLanguage from "./components/Features/MoreLanguage";
import PopupComponent from "./components/Popup/PopupComponent.jsx";
import { GrowChart } from "./components/Charts/GrowChart";

function App() {
  return (
    <Router>
      <Navigation />
      <Home />
      {/* <GrowChart /> */}
      <OurPartners />
      <SocialProof />
      {/* <OurCases /> */}
      <MoreLanguage />
      {/* <HowItWorks /> */}
      <PriceComponent />
      <Testemonial />
      <BookCall />
      <PopupComponent />

      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/partners" element={<OurPartners />} />
        <Route path="/soc-prof" element={<SocialProof />} />
        <Route path="/soc-prof" element={<OurCases />} />
        <Route path="/soc-prof" element={<Price />} />
        <Route path="/soc-prof" element={<HowItWorks />} />
        <Route path="/soc-prof" element={<MoreLanguage />} />
        <Route path="/soc-prof" element={<Testemonial />} />
        <Route path="/soc-prof" element={<BookCall />} />
      </Routes> */}
      <Footer />
    </Router>
  );
}

export default App;
