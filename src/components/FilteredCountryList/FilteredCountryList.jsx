import './FilteredCountryList.css';
import React from 'react';

const FilteredCountryList = ({ countries, onCountryClick }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li
          key={country.Name}
          onClick={() => onCountryClick(country)}
          style={{ cursor: 'pointer' }}
        >
          {country.Name}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(FilteredCountryList);