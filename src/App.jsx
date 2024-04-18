import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RouteNotFound from "./components/RouteNotFound/RouteNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (

      <div className="Aplicacion">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            path="/country/:countryIso3Code/indicator/:indicatorCode"
            element={<Home />}
          />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
        <Footer/>
      </div>

  );
}

export default App;
