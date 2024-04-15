import './CountrySearchLabel.css';
import React from 'react';

const CountrySearchLabel = ({ value, onChange }) => {
  return (
    <div>
      <label>
        Buscar país
        <input
          type="text"
          value={value}
          onChange={onChange}
          required
        />
      </label>
    </div>
  );
};

export default CountrySearchLabel;
