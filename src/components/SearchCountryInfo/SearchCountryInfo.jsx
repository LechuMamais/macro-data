import './SearchCountryInfo.css';

import React, { useState } from "react";
import CountrySearchInput from "../CountrySearchInput/CountrySearchInput";
import CountryInfo from "../CountryInfo/CountryInfo";
import IndicatorsList from "../IndicatorsList/IndicatorsList";

const SearchCountryInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setSelectedIndicator(null); // Resetear el indicador seleccionado al cambiar de país
  };

  const handleIndicatorSelect = (indicator) => {
    setSelectedIndicator(indicator);
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
          {selectedCountry && (
            <IndicatorsList
              onSelectIndicator={handleIndicatorSelect}
              selectedCountryCode={selectedCountry.Code}
            />
          )}
        </div>
      </div>

      {/* Renderizar CountryInfo cuando se ha seleccionado un país e indicador */}
      {selectedCountry && selectedIndicator && (
        <CountryInfo
          countryIso3Code={selectedCountry.Code}
          indicatorCode={selectedIndicator.code}
        />
      )}
    </div>
  );
};

export default SearchCountryInfo;
