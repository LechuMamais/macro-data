import "./SearchBar.css";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { giveFilterDefaultName } from "../../../functions/giveFilterDefaultName";
import { Link } from "react-router-dom";
import { filteredListUrlsGenerator } from "../../../functions/filteredListsUrlsGenerator";

// acepta objetos definidos en utils/filterPosibilities.js
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
    if (type === "number") {
      setFilteredFilters(filteredFiltersListCreator(from, to));
    }
  }, [from, to]);

  const handleInputChange = (e) => {
    if (type == "string") {
      const inputText = e.target.value;
      setFilterName(inputText);
      setFilteredFilters(filteredFiltersListCreator(inputText));
    }
  };

  const handleInputClick = () => {
    // Queremos que al darle click al input se ponga en blanco, y que además se muestre la lista completa de paises o indicadores
    setVisible(true);
    setFilterName("");
    handleInputChange({ target: { value: "" } }); // Para simular que ha cambiado el valor del input a '' Entonces muestra la lista completa
  };

  // Referencia para el input
  const inputRef = useRef(null);

  return (
    <div>
      <div
        className={text + "SearchInput" + "-container search-input-container"}
        onClick={handleInputClick}
      >
        {lens && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        )}
        <input
          ref={inputRef} // Asignar la referencia al input
          id={text + "SearchInput"}
          type="text"
          value={filterName}
          onChange={handleInputChange}
          placeholder={placeholder || ""}
          required
        />
      </div>
      
      {filteredFilters && filteredFilters.length > 0 && (
        <div ref={searchBarRef}>
          {visible && (
            <ul className="select-list" id={filteredListId || ""}>
              {filteredFilters.map((listItem) => (
                <Link
                  to={filteredListUrlsGenerator(
                    text,
                    listItem,
                    countryIso3Code,
                    indicatorCode,
                    from,
                    to
                  )}
                  key={listItem.Code || listItem}
                  onClick={() => setVisible(false)}
                  className="custom-link"
                >
                  <li className="country-name-li">
                    {listItem.Name || listItem}
                  </li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
