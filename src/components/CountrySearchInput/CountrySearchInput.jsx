import "./CountrySearchInput.css";
import React, { useEffect, useState } from "react";
import countriesData from "../../utils/code2iso.json";
import SearchLabel from "../SearchLabel/SearchLabel";
import FilteredList from "../FilteredList/FilteredList";
import { indicatorCodes } from "../../utils/indicatorCodes";
import { useParams } from "react-router";
import code2iso from "../../utils/code2iso.json";

const CountrySearchInput = () => {
  const [countryName, setCountryName] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const { countryIso3Code, indicatorCode } = useParams();
  console.log(countryIso3Code, indicatorCode);

  useEffect(() => {
    if (countryIso3Code && indicatorCode) {
      // Filtra el array code2iso para encontrar el objeto con el código de país correspondiente
      const countryInfo = code2iso.find(
        (country) => country.Code === countryIso3Code
      );
      if (countryInfo) {
        setCountryName(countryInfo.Name); // Actualiza el estado con el nombre del país
        console.log(countryInfo.Name); // Muestra el nombre del país en la consola
      }
    }
  }, [countryIso3Code, indicatorCode]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setCountryName(inputText);

    const filteredCountryNames = countriesData.filter((country) =>
      country.Name.toLowerCase().includes(inputText.toLowerCase())
    );

    console.log(filteredCountryNames);

    setFilteredCountries(filteredCountryNames);
  };

  const handleCountryClick = (country) => {
    setCountryName(country.Name);
    setFilteredCountries([]);
  };

  return (
    <div>
      <SearchLabel
        value={countryName}
        onChange={handleInputChange}
        placeholder="Seleccionar pais"
        id="countrySearchInput"
        labelFor="country"
        lens="true"
      />
      {filteredCountries.length > 0 && (
        <FilteredList
          listContent={filteredCountries}
          onClick={handleCountryClick}
          id="FilteredCountriesList"
          searchParam="country"
        />
      )}
    </div>
  );
};

export const IndicatorSearchInput = () => {
  const [indicatorName, setIndicatorName] = useState("");
  const [filteredIndicators, setFilteredIndicators] = useState([]);
  const { countryIso3Code, indicatorCode } = useParams();
  console.log(countryIso3Code, indicatorCode);

  useEffect(() => {
    if (countryIso3Code && indicatorCode) {
      setIndicatorName(
        indicatorCodes.filter((indicator) => indicator.Code == indicatorCode)[0]
          .Name
      );
      console.log(
        indicatorCodes.filter((indicator) => indicator.Code == indicatorCode)[0]
          .Name
      );
    }
  }, [countryIso3Code, indicatorCode]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setIndicatorName(inputText);

    const filteredIndicatorNames = indicatorCodes.filter((indicator) =>
      indicator.Name.toLowerCase().includes(inputText.toLowerCase())
    ); // Filtrado del array de codigos de indicadores

    console.log(filteredIndicatorNames);
    setFilteredIndicators(filteredIndicatorNames);
  };

  const handleIndicatorClick = (indicator) => {
    setIndicatorName(indicator.Name);
    console.log(indicator.Name);
    setFilteredIndicators([]);
  };

  return (
    <div>
      <SearchLabel
        value={indicatorName}
        onChange={handleInputChange}
        placeholder="Seleccionar indicador"
        id="indicatorSearchInput"
        labelFor="indicator"
        lens="true"
      />
      {filteredIndicators.length > 0 && (
        <FilteredList
          listContent={filteredIndicators}
          onClick={handleIndicatorClick}
          id="FilteredIndicatorsList"
          searchParam="indicator"
        />
      )}
    </div>
  );
};

export default CountrySearchInput;
