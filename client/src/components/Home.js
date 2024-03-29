import React from "react";
import NavBar from "./NavBar"; // Assuming you have a NavBar component
import ReviewSection from "./ReviewSection";
import ContactUSSection from "./ContactUsSection";
import WelcomeSection from "./WelcomeSection";
import Footer from "./Footer";

import "../css/HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <NavBar />
      <WelcomeSection/>
      <ReviewSection />
      <ContactUSSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
