import "./App.css";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Global/Home/Home";
import RouteNotFound from "./components/Global/RouteNotFound/RouteNotFound";
import Footer from "./components/Global/Footer/Footer";

// Si el endpoint es nulo, pone los params para el PIB de España
function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate to="/country/ES/indicator/NY.GDP.MKTP.CD/from/1974/to/2023" />}
        />
        <Route
          path="/country/:countryIso3Code/indicator/:indicatorCode/from/:from/to/:to"
          element={<Home />}
        />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
