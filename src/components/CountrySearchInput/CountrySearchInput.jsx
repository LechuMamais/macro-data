import './CountrySearchInput.css'
import React, { useState } from 'react';
import countriesData from '../../utils/code2iso.json';
import CountrySearchLabel from '../CountrySearchLabel/CountrySearchLabel';
import FilteredCountryList from '../FilteredCountryList/FilteredCountryList';

const CountrySearchInput = ({ onCountrySelect }) => {
  const [countryName, setCountryName] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setCountryName(inputText);

    const filteredCountryNames = countriesData.filter((country) =>
      country.Name.toLowerCase().includes(inputText.toLowerCase())
    );
    setFilteredCountries(filteredCountryNames);
  };

  const handleCountryClick = (country) => {
    setCountryName(country.Name);
    setFilteredCountries([]);
    onCountrySelect(country);
  };

  return (
    <div>
      <CountrySearchLabel
        value={countryName}
        onChange={handleInputChange}
      />
      {filteredCountries.length > 0 && (
        <FilteredCountryList
          countries={filteredCountries}
          onCountryClick={handleCountryClick}
        />
      )}
    </div>
  );
};

export default CountrySearchInput;
