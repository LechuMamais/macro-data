import "./IndicatorDataContainer.css";

import { useState, useEffect } from "react";
import IndicatorGraphic from "../../Graphic/IndicatorGraphic/IndicatorGraphic";
import { findIndicatorByCode } from "../../../utils/codesHandler";
import { useParams } from "react-router";
import { SearchBar } from "../SearchBar/SearchBar";
import { filterPosibilities } from "../../../utils/filterPosibilities";

const IndicatorDataContainer = ({ countryIndicatorData }) => {
  const { countryIso3Code, indicatorCode, from, to } = useParams();
  // Estado para almacenar el nombre del indicador y su código
  const [indicatorName, setIndicatorName] = useState("");

  useEffect(() => {
    // Función para obtener el nombre del indicador y actualizar el estado
    const getIndicatorDetails = () => {
      if (countryIndicatorData) {
        setIndicatorName(findIndicatorByCode(indicatorCode).Name);
      }
    };

    getIndicatorDetails(); // Llamar a la función dentro del useEffect
  }, [countryIso3Code, indicatorCode, countryIndicatorData]);

  return (
    <>
      <div className="indicator-select-container">
        <h3 className="indicator-name">{indicatorName}</h3>
        <h4 className="indicator-code">{indicatorCode}</h4>
      </div>
      <div id="years-selector-container" className="search-bar-container">
        {/*Contenedor de filtros de fechas*/}
        <div
          className="searchBar searchBar-year"
          id="searchBarContainer-year-from"
        >
          <h3>Desde</h3>
          <SearchBar filter={filterPosibilities.yearFrom} />
        </div>
        <div
          className="searchBar searchBar-year"
          id="searchBarContainer-year-to"
        >
          <h3>Hasta</h3>
          <SearchBar filter={filterPosibilities.yearTo} />
        </div>
      </div>
      {from > to ? (
        <div>
          <p>Introduzca un rango de fechas válido</p>
        </div>
      ) : (
        <div>
          {/*El gráfico*/}
          <IndicatorGraphic countryIndicatorData={countryIndicatorData} />
        </div>
      )}
    </>
  );
};

export default IndicatorDataContainer;
