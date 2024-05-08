import "./SearchBar.css";
import React, { useEffect, useRef, useState } from "react";
import SearchLabel from "../SearchLabel/SearchLabel";
import FilteredList from "../FilteredList/FilteredList";
import { yearsSetter } from "../../../functions/yearsSetter";
import { useParams } from "react-router";
import { giveFilterDefaultName } from "../../../functions/giveFilterDefaultName";
import { updateFilteredList } from "../../../functions/updateFilteredList";

// acepta 'country' 'indicator' 'year-from' y 'year-to'
export const SearchBar = ({ filter }) => {
  const { countryIso3Code, indicatorCode, from, to } = useParams();
  const [filterName, setFilterName] = useState("");
  const [filteredFilters, setFilteredFilters] = useState([]);
  const [visible, setVisible] = useState(false);
  // Este ref es para controlar los clicks, si se clicka fuera de la filteredList, se desmonta el componente
  const searchBarRef = useRef(null);

  useEffect(() => {
    // Damos valor inicial a filterName, dado por los params
    setFilterName(
      giveFilterDefaultName(filter, countryIso3Code, indicatorCode, from, to)
    );

    // Función para desmontar el componente FilteredList al hacer clic fuera del componente
    const handleClickOutside = (e) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
        setVisible(false);
      }
      setFilterName(
        giveFilterDefaultName(filter, countryIso3Code, indicatorCode, from, to)
      );
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [countryIso3Code, indicatorCode, from, to]);

  useEffect(() => {
    if (filter == "year-from" || filter == "year-to") {
      setFilteredFilters(yearsSetter(filter, from, to));
    }
  }, [from, to]);

  const handleInputChange = (e) => {
    if (filter == "country" || filter == "indicator") {
      const inputText = e.target.value;
      setFilterName(inputText);
      setFilteredFilters(updateFilteredList(filter, inputText));
    }
  };

  const handleFilterClick = (filter) => {
    setFilterName(filter.Name);
    setVisible(false);
  };

  const handleInputClick = () => {
    // Queremos que al darle click al input se ponga en blanco, y que además se muestre la lista completa de paises o indicadores
    setVisible(true);
    setFilterName("");
    handleInputChange({ target: { value: "" } }); // Para simular que ha cambiado el valor del input a '' Entonces muestra la lista completa
  };

  return (
    <div>
      <SearchLabel
        value={filterName}
        onClick={handleInputClick}
        onChange={handleInputChange}
        placeholder={
          filter == "country"
            ? "Seleccionar pais"
            : filter == "indicator"
            ? "Seleccionar indicador"
            : filter == "year-from" || filter == "year-to"
            ? "Year"
            : ""
        }
        id={filter + "SearchInput"}
        lens={filter == "country" || filter == "indicator" ? true : false}
      />
      {filteredFilters.length > 0 && (
        <div ref={searchBarRef}>
          {visible && (
            <FilteredList
              listContent={filteredFilters}
              onClick={handleFilterClick}
              id={
                filter == "country"
                  ? "FilteredCountriesList"
                  : filter == "indicator"
                  ? "FilteredIndicatorsList"
                  : filter == "year-from"
                  ? "FilteredFromYearsList"
                  : filter == "year-to"
                  ? "FilteredToYearsList"
                  : ""
              }
              searchParam={filter}
            />
          )}
        </div>
      )}
    </div>
  );
};
