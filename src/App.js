import React from "react";

import { About, Footer, Header, Skills, Work } from "./container";

import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

const App = () => {
  return (
    <div>
      {/* <h1>App Main</h1> */}
      <div className="app">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
      </div>
    </div>
  );
};

export default App;
