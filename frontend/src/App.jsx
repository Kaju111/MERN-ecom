import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./component/layout/Header/Header.jsx";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer.jsx";
import Home from "./component/Home/Home.jsx";
import ProductDetails from "./component/Product/ProductDetails.js";
import "./App.css";

const App = () => {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
