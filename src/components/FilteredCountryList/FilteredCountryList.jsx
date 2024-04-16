import './FilteredCountryList.css';
import React from 'react';

const FilteredCountryList = ({ countries, onCountryClick }) => {
  return (
    <ul id='FilteredCountriesList'>
      {countries.map((country) => (
        <li
          key={country.Name}
          className='country-name-li'
          onClick={() => onCountryClick(country)}
        >
          {country.Name}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(FilteredCountryList);