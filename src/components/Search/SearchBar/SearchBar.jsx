import "./SearchBar.css";
import React, { useEffect, useRef, useState } from "react";
import SearchLabel from "../SearchLabel/SearchLabel";
import FilteredList from "../FilteredList/FilteredList";
import { useParams } from "react-router";
import { giveFilterDefaultName } from "../../../functions/giveFilterDefaultName";

// acepta 'country' 'indicator' 'yearFrom' y 'yearTo'
export const SearchBar = ({ filter }) => {
  const { countryIso3Code, indicatorCode, from, to } = useParams();
  const [filterName, setFilterName] = useState("");
  const [filteredFilters, setFilteredFilters] = useState([]);
  const [visible, setVisible] = useState(false);
  // Este ref es para controlar los clicks, si se clicka fuera de la filteredList, se desmonta el componente
  const searchBarRef = useRef(null);

  const {
    placeholder,
    text,
    type,
    filteredListId,
    lens,
    filteredFiltersListCreator,
  } = filter;

  useEffect(() => {
    // Damos valor inicial a filterName, dado por los params
    setFilterName(
      giveFilterDefaultName(text, countryIso3Code, indicatorCode, from, to)
    );

    // Función para desmontar el componente FilteredList al hacer clic fuera del componente
    const handleClickOutside = (e) => {
      if (searchBarRef.current && !searchBarRef.current.contains(e.target)) {
        setVisible(false);
      }
      setFilterName(
        giveFilterDefaultName(text, countryIso3Code, indicatorCode, from, to)
      );
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [countryIso3Code, indicatorCode, from, to]);

  useEffect(() => {
    if (type === "year") {
      setFilteredFilters(filteredFiltersListCreator(from, to));
    }
  }, [from, to]);

  const handleInputChange = (e) => {
    if (type == "string") {
      const inputText = e.target.value;
      setFilterName(inputText);
      setFilteredFilters(filteredFiltersListCreator(text, inputText));
    }
  };

  const handleFilterClick = (text) => {
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
        placeholder={placeholder || ""}
        id={text + "SearchInput"}
        lens={lens || false}
      />
      {filteredFilters && filteredFilters.length > 0 && (
        <div ref={searchBarRef}>
          {visible && (
            <FilteredList
              listContent={filteredFilters}
              onClick={handleFilterClick}
              id={filteredListId || ""}
              filter={text}
            />
          )}
        </div>
      )}
    </div>
  );
};
