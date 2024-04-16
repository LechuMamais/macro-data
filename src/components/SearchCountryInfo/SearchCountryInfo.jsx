import "./SearchCountryInfo.css";
import React, { useState } from "react";
import { getCountryData, getIndicatorData } from "../../utils/getCountryData";
import CountrySearchInput from "../CountrySearchInput/CountrySearchInput";
import CountryInfo from "../CountryInfo/CountryInfo";
import IndicatorList from "../IndicatorsList/IndicatorsList";

const SearchCountryInfo = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedIndicator, setSelectedIndicator] = useState(null);
  const [countryIndicatorData, setCountryIndicatorData] = useState(null);

  const handleCountrySelect = async (selectedCountry) => {
    setSelectedCountry(selectedCountry);
    //setSelectedIndicator(null); // Reiniciar el indicador seleccionado al cambiar de país
    //setCountryData(null); // Reiniciar la información del país al cambiar de país
  };

  const handleIndicatorSelect = async (selectedIndicator) => {
    setSelectedIndicator(selectedIndicator);
    // Realizar la petición con el indicador seleccionado y el país
    const data = await getIndicatorData(selectedCountry.Code, selectedIndicator);
    console.log(data)
    setCountryIndicatorData(data);
  };

  return (
    <>
      <div id="searchBarContainer">
        <h2>Información por países</h2>
        <CountrySearchInput onCountrySelect={handleCountrySelect} />
      </div>
      <h4>{selectedIndicator?selectedIndicator:'Selecciona un indicador'}</h4>
        <IndicatorList
          onIndicatorSelect={handleIndicatorSelect}
        />
 
      {countryIndicatorData && <CountryInfo countryIndicatorData={countryIndicatorData} />}
    </>
  );
};

export default SearchCountryInfo;
