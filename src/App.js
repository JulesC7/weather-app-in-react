import React from "react";

import Footer from "./Footer";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="main">
      <div className="container">
        <div className="wrapper">
          <Weather defaultCity="Kyiv" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
