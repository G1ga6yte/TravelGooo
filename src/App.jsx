import React from "react";
import Header from "./components/header/index";
import Service from "./components/service/index";
import Ratings from "./components/ratings/index";
import Distinations from "./components/distinations";
import Packages from "./components/packages";
import BookingSteps from "./components/bookingSteps";
import AboutUs from "./components/about-us";
import Footer from "./components/footer/footer";
import "./assets/styles/variable.scss";
import "./assets/styles/mixin.scss"

function App() {
  return (
    <div className="App">
        <Header />
        <Service />
        <Ratings />
        <Distinations />
        <Packages />
        <BookingSteps />
        <AboutUs />
        <Footer />
    </div>
  );
}

export default App;
