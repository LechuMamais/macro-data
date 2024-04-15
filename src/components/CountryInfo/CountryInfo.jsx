import IndicatorDataContainer from "../IndicatorDataContainer/IndicatorDataContainer";
import "./CountryInfo.css";
import React from "react";

const CountryInfo = ({ countryData }) => {
  const countryName = (countryData[0].data[0].country.value)
  const countryIso3Code = (countryData[0].data[0].countryiso3code)
  return (
    <div>
      <h3>{countryName}</h3>
      <h4>{countryIso3Code}</h4>
      <ul className="indicatorsContainer">
        {countryData.map((indicator) => (
          <li key={indicator.indicator.code}>
            <IndicatorDataContainer indicator={indicator} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CountryInfo;
