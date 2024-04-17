import './SearchCountryInfo.css';

import React, { useState } from "react";
import CountrySearchInput from "../CountrySearchInput/CountrySearchInput";
import CountryInfo from "../CountryInfo/CountryInfo";
import IndicatorsList from "../IndicatorsList/IndicatorsList";

const SearchCountryInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };


  return (
    <div className="search-country-info">
      <div id="searchBarContainer">
        <div className="searchBarContainer-country">
          <h3>Selecciona un país</h3>
          <CountrySearchInput onCountrySelect={handleCountrySelect} />
        </div>

        {/* Mostrar la lista de indicadores solo si se ha seleccionado un país */}
        <div className="searchBarContainer-indicator">
          <h3>Selecciona un indicador</h3>
          <IndicatorsList/>
        </div>
      </div>

      {/* Renderizar CountryInfo  */}

        <CountryInfo/>

    </div>
  );
};

export default SearchCountryInfo;
