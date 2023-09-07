import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
// import Card from "./Components/SharedComponents/Cards/cards";
import Home from "./Components/Home/home";
import Services from "./Components/Services/services";
import Footer from "./Components/SharedComponents/Footer/footer";
import Property1Variant3 from "./Components/SharedComponents/pages/Property1Variant3.tsx";
import Artificialintelligence from "./Components/Services/Artificialintelligence/Artificialintelligence";
import UserExperience from "./Components/Services/UserExperience/UserExperience";
// import AppDev from "./Components/AppDev/AppDev";
import MobileAppDev from "./Components/Services/MobileAppDevelopment/MobileAppDev";
import BlockchainDevelopment from "./Components/Services/BlockchainDevelopment/BlockchainDevelopment";
import SoftwareDevelopment from "./Components/Services/SoftwareDevelopment/SoftwareDevelopment";
import { DevOpsSolutions } from "./Components/Services/DevOpsSolutions/DevOpsSolutions";
import QualityAssuranceAutomation from "./Components/Services/QualityAssuranceAutomation/QualityAssuranceAutomation";
import StaffAugmentation from "./Components/Services/StaffAugmentation/StaffAugmentation";
// import LandingPage from "./Components/SharedComponents/pages/LandingPage/LandingPage";
import AppDevelopment from "./Components/Services/AppDevelopment/AppDevelopment";
import Contact from "./Components/Contactus/Contact";
import Success from "./Components/Portfolio/Success";
import About from "./Components/About/About";
import Meet from "./Components/MeetTeam/Meet";
import SpotifyPage from "./Components/Spotify/SpotifyPage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/" element={<Navbar />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/successstories" element={<Success />} />
        <Route path="/explore" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/meetteam" element={<Meet />} />
        <Route path="/spotifypage" element={<SpotifyPage />} />

        <Route
          path="/services/userexperiencedesign"
          element={<UserExperience />}
        />
        <Route
          path="/services/artificialintelligence"
          element={<Artificialintelligence />}
        />
        <Route path="/services" element={<Property1Variant3 />} />
        <Route path="/webappdevelopment" element={<AppDevelopment />} />
        <Route path="/mobileappdevelopment" element={<MobileAppDev />} />
        <Route path="/devopssolutions" element={<DevOpsSolutions />} />
        <Route
          path="/aualityassuranceautomation"
          element={<QualityAssuranceAutomation />}
        />
        <Route
          path="/blockchaindevelopment"
          element={<BlockchainDevelopment />}
        />
        <Route path="/softwaredevelopment" element={<SoftwareDevelopment />} />
        <Route path="/staffaugmentation" element={<StaffAugmentation />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
