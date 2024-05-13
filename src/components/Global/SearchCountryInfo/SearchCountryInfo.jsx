import './SearchCountryInfo.css';

import React from "react";
import CountryInfo from "../../Global/CountryInfo/CountryInfo";
import { SearchBar } from '../SearchBar/SearchBar';
import { filterPosibilities } from '../../../utils/filterPosibilities';

const SearchCountryInfo = () => {
  return (
    <div className="search-country-info">
      <div id="searchBarContainer" className='search-bar-container'>
        {/* Selector de paises*/}
        <div className="searchBar" id='searchBarContainer-country'>
          <h3>Selecciona un país</h3>
          <SearchBar filter={filterPosibilities.country}/>
        </div>
        {/* Selector de indicadores*/}
        <div className="searchBar" id='searchBarContainer-indicator'>
          <h3>Selecciona un indicador</h3>
          {/*<IndicatorSearchInput/>*/}
          <SearchBar filter={filterPosibilities.indicator}/>
        </div>
      </div>
      <CountryInfo/>
    </div>
  );
};

export default SearchCountryInfo;
