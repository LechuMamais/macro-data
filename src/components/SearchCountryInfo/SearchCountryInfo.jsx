import "./SearchCountryInfo.css";
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom
import CountrySearchInput from "../CountrySearchInput/CountrySearchInput";
import CountryInfo from "../CountryInfo/CountryInfo";
import IndicatorList from "../IndicatorsList/IndicatorsList";
import { indicatorCodes } from "../../utils/indicatorCodes";

const SearchCountryInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedIndicator, setSelectedIndicator] = useState(null);

  const handleCountrySelect = (selectedCountry) => {
    setSelectedCountry(selectedCountry);
  };

  const handleIndicatorSelect = (selectedIndicator) => {
    setSelectedIndicator(selectedIndicator);
  };

  return (
    <>
      <div id="searchBarContainer">
        <h2>Información por países</h2>
        <CountrySearchInput onCountrySelect={handleCountrySelect} />
      </div>
      
      <h4>
        {selectedIndicator ? selectedIndicator.name : "Selecciona un indicador"}
      </h4>
      
      {/* Utiliza Link para la lista de indicadores */}
      <div>
        <h3>Selecciona un indicador:</h3>
        <ul>
          {indicatorCodes.map((indicator) => (
            <li key={indicator.code}>
              <Link
                to={`/country/${selectedCountry?.Code}/indicator/${indicator.code}`}
                onClick={() => handleIndicatorSelect(indicator)}
              >
                {indicator.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Renderiza CountryInfo cuando se ha seleccionado un país e indicador */}
      {selectedCountry && selectedIndicator && (
        <CountryInfo
          countryCode={selectedCountry.Code}
          indicatorCode={selectedIndicator.code}
        />
      )}
    </>
  );
};

export default SearchCountryInfo;
