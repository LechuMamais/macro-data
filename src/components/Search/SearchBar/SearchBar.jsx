import "./SearchBar.css";
import React, { useEffect, useRef, useState } from "react";
import countriesData from "../../../utils/code2iso.json";
import SearchLabel from "../SearchLabel/SearchLabel";
import FilteredList from "../FilteredList/FilteredList";
import { indicatorCodes } from "../../../utils/indicatorCodes";
import { useParams } from "react-router";
import {
  findIndicatorByCode,
  findCountryByCode,
} from "../../../utils/codesHandler";

// acepta 'country' 'indicator' 'year-from' y 'year-to'
export const SearchBar = ({filter}) => {
  // Definimos las variables que necesitamos
  const [filterName, setFilterName] = useState("");
  const [filteredFilters, setFilteredFilters] = useState([]);
  // Y recuperamos de los params el codigo de pais y de indicadors
  const { countryIso3Code, indicatorCode, from, to } = useParams();
  // Este ref es para controlar los clicks, si se clicka fuera de la lista, se desmonta le componente
  const searchBarRef = useRef(null);
  const [visible, setVisible] = useState(false);

  //////////////////////////////////////////////////////////////////////////
  // Función para manejar el clic fuera del componente padre
  const handleClickOutside = (event) => {
    if (searchBarRef.current && !searchBarRef.current.contains(event.target)) {
      // Si se hace clic fuera del componente padre, desmontarlo
      setVisible(false);
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
      if (filter == "country") {
        // Si por params están los codigos de paises e indicadores, buscar su Name y mustrarlo en los input
        setFilterName(findCountryByCode(countryIso3Code).Name); // Actualiza el estado con el nombre del país
      }
      if (filter == "indicator") {
        setFilterName(findIndicatorByCode(indicatorCode).Name);
      }
      if (filter == "year-from") {
        setFilterName(from);
      }
      if (filter == "year-to") {
        setFilterName(to);
      }
    }
  }, [countryIso3Code, indicatorCode, from, to]);

  const handleInputChange = (e) => {
    if (filter == "country" || filter == "indicator") {
      const inputText = e.target.value;
      //console.log("inputChange", inputText);
      setFilterName(inputText);
      let filteredFilterNames = [];

      // Si se está utilizando para countries, que busque coincidencias en el array de países, si indicadores en el array de indicadores
      if (filter == "country") {
        filteredFilterNames = countriesData.filter((country) =>
          country.Name.toLowerCase().includes(inputText.toLowerCase())
        );
      }
      if (filter == "indicator") {
        filteredFilterNames = indicatorCodes.filter((indicator) =>
          indicator.Name.toLowerCase().includes(inputText.toLowerCase())
        );
      }
      setFilteredFilters(filteredFilterNames);
    }
  };
  useEffect(() => {
    if (filter === "year-from") {
      let filteredFilterNames = [];
      for (let i = 0; i <= 50; i++) {
        const yearToAdd = 1974 + i;

        filteredFilterNames.push(yearToAdd);
      }
      // Establecer el estado con los años filtrados
      setFilteredFilters(filteredFilterNames);
    }
  }, []);
  useEffect(() => {
    if (filter === "year-to") {
      let filteredFilterNames = [];
      const actualDate = new Date();
      const currentYear = actualDate.getFullYear(); // Obtener el año actual correctamente

      // Convertir 'from' a un número entero
      const fromYear = parseInt(from);

      // Verificar si 'fromYear' es un número válido
      if (!isNaN(fromYear)) {
        // Calcular la diferencia entre el año actual y 'fromYear'
        const yearDifference = currentYear - fromYear;

        // Iterar para generar los años disponibles
        for (let i = 0; i <= yearDifference; i++) {
          const yearToAdd = fromYear + i;

          filteredFilterNames.push(yearToAdd);
        }

        // Establecer el estado con los años filtrados
        setFilteredFilters(filteredFilterNames);
      }
    }
  }, [from, to]);

  const handleFilterClick = (filter) => {
    setFilterName(filter.Name);
    setVisible(false);
  };
  const handleInputClick = () => {
    // Queremos que al darle click al input se ponga en blanco, y que además se muestre la lista completa de paises o indicadores
    setVisible(true); // Mostramos la lista
    setFilterName(""); // ponemos el valor en vacio
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
            : ""
        }
        id={filter + "SearchInput"}
        lens={
          filter == "country" || filter == "indicator"
            ? true
            : false
        }
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
                  :filter == "year-from"
                  ? "FilteredFromYearsList"
                  :filter == "year-to"
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
