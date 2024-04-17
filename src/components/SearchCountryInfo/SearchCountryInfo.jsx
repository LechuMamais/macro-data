import './SearchCountryInfo.css';

import React from "react";
import CountryInfo from "../CountryInfo/CountryInfo";
import { SearchBar } from '../SearchBar/SearchBar';
//import CountrySearchInput, { IndicatorSearchInput } from "../CountrySearchInput/CountrySearchInput";
//import IndicatorsList from "../OldComponents/IndicatorsList/IndicatorsList";

const SearchCountryInfo = () => {
  return (
    <div className="search-country-info">
      <div id="searchBarContainer">
        {/* Selector de paises*/}
        <div className="searchBarContainer-country">
          <h3>Selecciona un país</h3>
          {/*<CountrySearchInput />*/}
          <SearchBar filter='country'/>
        </div>

        {/* Selector de indicadores*/}
        <div className="searchBarContainer-indicator">
          <h3>Selecciona un indicador</h3>
          {/*<IndicatorSearchInput/>*/}
          <SearchBar filter='indicator'/>
        </div>
      </div>

      {/* Renderizar CountryInfo  */}

        <CountryInfo/>

    </div>
  );
};

export default SearchCountryInfo;
