import React from "react";
import "./App.css";
import "./css/HOMECSS/navTop.css";
import "./css/HOMECSS/imgSlider.css";
import "./css/ABOUTCSS/about.css";
import "./css/PRODUCTSCSS/products.css";
import "./css/FOOTERCSS/upBox.css";
import NavTop from "./components/HOME/NavTop";
import ImgSlider from "./components/HOME/ImgSlider";
import About from "./components/ABOUT/About";
import Contact from "./components/CONTACT/Contact";
import Products from "./components/PRODUCTS/Products";
import Error from "./components/ERROR/Error";
import { SliderData } from "./components/HOME/SliderData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={[<ImgSlider slides={SliderData} />, <NavTop />]}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
