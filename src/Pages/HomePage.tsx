import React from "react";
import FirstComponent from "../components/Homepage/FirstComponent";
import HeaderComponent from "../components/Homepage/header";
import AppFeatures from "../components/Homepage/AppProvides";
import Feedback from "../components/Homepage/feedback";
import DownlaodApp from "../components/Homepage/downloadApp";
import Footer from "../components/Homepage/footer";


/**
 * Homepage Component
 * This serves as the main entry point of your app and composes the LandingComponent. here
 */

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderComponent />
      <FirstComponent />
      {/* <AppFeatures/> */}
       <Feedback />
       {/* <DownlaodApp/> */}
       <Footer/>
    </div>
  );
};

export default Homepage;
