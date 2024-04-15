import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RouteNotFound from "./components/RouteNotFound/RouteNotFound";

function App() {
  return (
      <div className="Aplicacion">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<RouteNotFound />} />
        </Routes>
        <Footer/>
      </div>
  );
}

export default App;
