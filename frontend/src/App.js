import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./component/layout/Header/Header";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
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
      <Router>
        <Header />
        <Route extact path="/" component={Home} />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
