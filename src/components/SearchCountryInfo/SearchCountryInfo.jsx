import "./SearchCountryInfo.css";
import React, { useState } from "react";
import { getCountryData } from "../../utils/getCountryData";
import CountrySearchInput from "../CountrySearchInput/CountrySearchInput";
import CountryInfo from "../CountryInfo/CountryInfo";

const SearchCountryInfo = () => {
  const [countryData, setCountryData] = useState(null);

  const handleCountrySelect = async (selectedCountry) => {
    const countryCode = selectedCountry.Code;
    console.log(countryCode);
    const data = await getCountryData(countryCode);
    console.log("Datos del país seleccionado:", data);
    setCountryData(data);
  };

  return (
    <>
      <div id="searchBarContainer">
        <h2>Información por países</h2>
        <CountrySearchInput onCountrySelect={handleCountrySelect} />
      </div>
      {countryData && <CountryInfo countryData={countryData} />}
    </>
  );
};

export default SearchCountryInfo;
