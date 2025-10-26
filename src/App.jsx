  
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.min.js";

import React from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import AlertSection from "./components/AlertSection.jsx";
import SectionOne from "./components/SectionOne/SectionOne.jsx";
import SectionTwo from "./components/SectionTwo/SectionTwo.jsx";
import SectionThree from "./components/SectionThree/SectionThree.jsx";
import SectionFour from "./components/SectionFour/SectionFour.jsx";
import SectionFive from "./components/SectionFive/SectionFive.jsx";
import SectionSix from "./components/SectionSix/SectionSix.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <>
      <Header />
      <AlertSection />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix/>
      <Footer />
    </>
  );
}

export default App;
  
