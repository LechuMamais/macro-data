import "./SearchBar.css";
import React, { useEffect, useRef, useState } from "react";
import countriesData from "../../utils/code2iso.json";
import SearchLabel from "../SearchLabel/SearchLabel";
import FilteredList from "../FilteredList/FilteredList";
import { indicatorCodes } from "../../utils/indicatorCodes";
import { useParams } from "react-router";
import {
  findIndicatorByCode,
  findCountryByCode,
} from "../../utils/codesHandler";

// acepta 'country' o 'indicator'
export const SearchBar = (filter) => {
  // Definimos las variables que necesitamos
  const [filterName, setFilterName] = useState("");
  const [filteredFilters, setFilteredFilters] = useState([]);
  // Y recuperamos de los params el codigo de pais y de indicadors
  const { countryIso3Code, indicatorCode } = useParams();
  // Este ref es para controlar los clicks, si se clicka fuera de la lista, se desmonta le componente
  const searchBarRef = useRef(null);
  const [visible, setVisible] = useState(true);

  //////////////////////////////////////////////////////////////////////////
  // Función para manejar el clic fuera del componente padre
  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      // Si se hace clic fuera del componente padre, desmontarlo
      // Aquí podrías llamar a una función para cambiar el estado u otro efecto necesario
      console.log("Clic fuera del componente padre, desmontando...");
      setVisible(false);
      // Ejemplo de desmontaje del componente padre
      // Puedes implementar tu lógica específica aquí
    }
  };

  // Agregar un listener de eventos cuando el componente se monta
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Se ejecuta solo una vez al montar el componente

  ///////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    if (countryIso3Code && indicatorCode) {
      if (filter.filter == "country") {
        // Si por params están los codigos de paises e indicadores, buscar su Name y mustrarlo en los input
        setFilterName(findCountryByCode(countryIso3Code).Name); // Actualiza el estado con el nombre del país
      }
      if (filter.filter == "indicator") {
        setFilterName(findIndicatorByCode(indicatorCode).Name);
      }
    }
  }, [countryIso3Code, indicatorCode]);

  const handleInputChange = (e) => {
    const inputText = e.target.value;
    console.log("inputChange", inputText);
    setFilterName(inputText);
    let filteredFilterNames = [];

    // Si se está utilizando para countries, que busque coincidencias en el array de países, si indicadores en el array de indicadores
    if (filter.filter == "country") {
      filteredFilterNames = countriesData.filter((country) =>
        country.Name.toLowerCase().includes(inputText.toLowerCase())
      );
    }
    if (filter.filter == "indicator") {
      filteredFilterNames = indicatorCodes.filter((indicator) =>
        indicator.Name.toLowerCase().includes(inputText.toLowerCase())
      );
    }
    // devuelve el array de las coincidencias con el input
    setFilteredFilters(filteredFilterNames);
  };

  const handleFilterClick = (filter) => {
    setFilterName(filter.Name);
    setFilteredFilters([]);
  };
  const handleInputClick = () => {
    // Queremos que al darle click al input se ponga en blanco, y que además se muestre la lista completa de paises o indicadores
    setVisible(true); // Mostramos la lista
    setFilterName('');  // ponemos el valor en vacio
    handleInputChange({target:{value:''}})// Para simular que ha cambiado el valor del input a '' Entonces muestra la lista completa
  };

  return (
    <div>
      <SearchLabel
        value={filterName}
        onClick={handleInputClick}
        onChange={handleInputChange}
        placeholder={
          filter.filter == "country"
            ? "Seleccionar pais"
            : filter.filter == "indicator"
            ? "Seleccionar indicador"
            : ""
        }
        id={filter.filter + "SearchInput"}
        lens="true"
      />
      {filteredFilters.length > 0 && (
        <div ref={searchBarRef}>
          {visible && (
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
      )}
    </div>
  );
};
