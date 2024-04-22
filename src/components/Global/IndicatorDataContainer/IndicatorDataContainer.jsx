import "./IndicatorDataContainer.css";

import { useState, useEffect } from "react";
import IndicatorGraphic from "../../Graphic/IndicatorGraphic/IndicatorGraphic";
import { findIndicatorByCode } from "../../../utils/codesHandler";
import { useParams } from "react-router";
import { SearchBar } from "../../Search/SearchBar/SearchBar";

const IndicatorDataContainer = ({ countryIndicatorData }) => {
  const { countryIso3Code, indicatorCode } = useParams();
  // Estado para almacenar el nombre del indicador y su código
  const [indicatorName, setIndicatorName] = useState("");

  useEffect(() => {
    // Función para obtener el nombre del indicador y actualizar el estado
    const getIndicatorDetails = () => {
      if (countryIndicatorData) {
        setIndicatorName(findIndicatorByCode(countryIndicatorData[1][0].indicator.id).Name);
      }
    };

    getIndicatorDetails(); // Llamar a la función dentro del useEffect
  }, [countryIso3Code, indicatorCode, countryIndicatorData]); // Ejecutar useEffect cuando countryIndicatorData cambie

  return (
    <>
      <div className="indicator-select-container">
        <h3 className="indicator-name">{indicatorName}</h3>
        <h4 className="indicator-code">{indicatorCode}</h4>
      </div>
      <div id="years-selector-container">
        {/*Contenedor de filtros de fechas*/}
      <div className="searchBar searchBar-year" id='searchBarContainer-year-from'>
          <h3>Desde</h3>
          <SearchBar filter='year-from'/>
        </div>
        <div className="searchBar searchBar-year" id='searchBarContainer-year-to'>
          <h3>Hasta</h3>
          <SearchBar filter='year-to'/>
        </div>
      </div>
      {/*El gráfico*/}
      <div>
        <IndicatorGraphic countryIndicatorData={countryIndicatorData} />
      </div>
    </>
  );
};

export default IndicatorDataContainer;
