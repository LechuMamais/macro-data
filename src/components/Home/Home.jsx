import "./Home.css";
import SearchCountryInfo from "../SearchCountryInfo/SearchCountryInfo";
import React from "react";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Información Macroeconómica para el Desarrollo</h1>
      </header>
      <main>
        <SearchCountryInfo />
      </main>
    </div>
  );
};

export default Home;
