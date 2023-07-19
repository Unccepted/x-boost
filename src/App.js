import "./App.css";
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
      <Testemonial />
      <BookCall />
      <Footer />
    </>
  );
}

export default App;
