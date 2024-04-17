import "./SearchBar.css";
import React, { useEffect, useState } from "react";
import countriesData from "../../utils/code2iso.json";
import SearchLabel from "../SearchLabel/SearchLabel";
import FilteredList from "../FilteredList/FilteredList";
import { indicatorCodes } from "../../utils/indicatorCodes";
import { useParams } from "react-router";
import code2iso from "../../utils/code2iso.json";

// acepta 'country' y 'indicator'
export const SearchBar = (filter) => {
  const [filterName, setFilterName] = useState("");
  const [filteredFilters, setFilteredFilters] = useState([]);
  const { countryIso3Code, indicatorCode } = useParams();

  useEffect(() => {
    if (filter.filter == "country") {
      if (countryIso3Code && indicatorCode) {
        // Buscar en el array code2iso para encontrar el objeto con el código de país correspondiente
        const countryInfo = code2iso.find(
          (country) => country.Code === countryIso3Code
        );
        if (countryInfo) {
            setFilterName(countryInfo.Name); // Actualiza el estado con el nombre del país
          console.log(countryInfo.Name); // Muestra el nombre del país en la consola
        }
      }
    }
    if (filter.filter == "indicator") {
      if (countryIso3Code && indicatorCode) {
        setFilterName(
          indicatorCodes.filter(
            (indicator) => indicator.Code == indicatorCode
          )[0].Name
        );
        console.log(
          indicatorCodes.filter(
            (indicator) => indicator.Code == indicatorCode
          )[0].Name
        );
      }
    }
  }, [countryIso3Code, indicatorCode]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    setFilterName(inputText);
    console.log("Input Text:", inputText);

    let filteredFilterNames = [];
    ///////////////////
    if (filter === "country") {
      filteredFilterNames = countriesData.filter((country) =>
        country.Name.toLowerCase().includes(inputText.toLowerCase())
      );
    }
    if (filter.filter == "indicator") {
      console.log(filter);
      console.log(indicatorCodes);
      filteredFilterNames = indicatorCodes.filter((indicator) => 
        indicator.Name.toLowerCase().includes(inputText.toLowerCase())
      ); // Filtrando del array de codigos de indicadores
      console.log(filteredFilterNames);
    }
    //////////////////////
    console.log(filter.filter);

    console.log(filteredFilterNames);

    setFilteredFilters(filteredFilterNames);
  };

  const handleFilterClick = (filter) => {
    setFilterName(filter.Name);
    setFilteredFilters([]);
  };

  return (
    <div>
      <SearchLabel
        value={filterName}
        onChange={handleInputChange}
        placeholder={
          filter.filter == "country"
            ? "Seleccionar pais"
            : filter.filter == "indicator"
            ? "Seleccionar indicador"
            : ""
        }
        id={filter.filter + "SearchInput"}
        labelFor={filter}
        lens="true"
      />
      {filteredFilters.length > 0 && (
        <FilteredList
          listContent={filteredFilters}
          onClick={handleFilterClick}
          id={
            filter.filter == "country"
              ? "FilteredCountriesList"
              : filter.filter == "indicator"
              ? "FilteredIndicatorsList"
              : ""
          }
          searchParam={filter.filter}
        />
      )}
    </div>
  );
};
