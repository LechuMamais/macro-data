import "./IndicatorDataContainer.css";

import { useState, useEffect } from "react";
import { indicatorCodes } from "../../utils/indicatorCodes";
import IndicatorGraphic from "../IndicatorGraphic/IndicatorGraphic";

const IndicatorDataContainer = ({ countryIndicatorData }) => {
  // Estado para almacenar el nombre del indicador y su código
  const [indicatorName, setIndicatorName] = useState("");
  const [indicatorCode, setIndicatorCode] = useState("");

  useEffect(() => {
    // Función para obtener el nombre del indicador y actualizar el estado
    const getIndicatorDetails = () => {
      if (countryIndicatorData) {
        const firstIndicatorId = countryIndicatorData[1][0].indicator.id;
        const foundIndicator = indicatorCodes.find((i) => i.Code === firstIndicatorId);
        if (foundIndicator) {
          setIndicatorName(foundIndicator.Name);
          setIndicatorCode(firstIndicatorId);
        }
      }
    };

    getIndicatorDetails(); // Llamar a la función dentro del useEffect
  }, [countryIndicatorData]); // Ejecutar useEffect cuando countryIndicatorData cambie

  return (
    <>
      <div className="indicator-select-container">
        <h3 className="indicator-name">{indicatorName}</h3>
        <h4 className="indicator-code">{indicatorCode}</h4>
      </div>
      <div>
        <IndicatorGraphic countryIndicatorData={countryIndicatorData} />
      </div>
    </>
  );
};

export default IndicatorDataContainer;
