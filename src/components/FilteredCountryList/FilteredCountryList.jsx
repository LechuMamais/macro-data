import { useParams } from "react-router";
import "./FilteredCountryList.css";
import React from "react";
import { Link } from "react-router-dom";

const FilteredCountryList = ({ countries, onCountryClick }) => {
  const { countryIso3Code, indicatorCode } = useParams();

  return (
    <ul className="select-list" id="FilteredCountriesList">
      {countries.map((country) => (
        <Link
          to={`/country/${country.Code}/indicator/${
            indicatorCode ? indicatorCode : "NY.GDP.MKTP.CD"
          }`}
          onClick={() => onCountryClick(country)}
        >
          <li key={country.Name} className="country-name-li">
            {country.Name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default React.memo(FilteredCountryList);
