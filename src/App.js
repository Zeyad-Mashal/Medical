import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SliderBanners from "./components/SliderBanners/SliderBanners";
import H_PC from "./components/H&PC/H_PC";
import OurDoctors from "./components/OurDoctors/OurDoctors";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <SliderBanners />
      <H_PC />
      <OurDoctors />
      <Footer />

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
      </Routes>
    </BrowserRouter> */}
    </div>
  );
}

export default App;
