import IndicatorDataContainer from "../IndicatorDataContainer/IndicatorDataContainer";
import "./CountryInfo.css";
import React from "react";

const CountryInfo = ({ countryIndicatorData }) => {
  const countryName = countryIndicatorData[1][0].country.value;
  const countryIso3Code = countryIndicatorData[0].countryiso3code;
  const indicator = countryIndicatorData[1][0].indicator.id;
  console.log(countryIndicatorData)
  return (
    <div>
      <div id="SelectedCountryName">
        <h3 id="countryName">{countryName}</h3>
        <h4 id="countryIso3Code">{countryIso3Code}</h4>
      </div>

      <ul className="indicatorsContainer">
        {/*countryData.map((indicator) => (
          <li key={indicator.indicator.code}>
            <IndicatorDataContainer indicator={indicator} />
          </li>
        ))*/}
        <IndicatorDataContainer countryIndicatorData={countryIndicatorData} />
      </ul>
    </div>
  );
};

export default CountryInfo;
