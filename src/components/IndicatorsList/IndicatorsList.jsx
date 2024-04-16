import './IndicatorsList.css';

import React, { useState, useEffect } from "react";
import { indicatorCodes } from "../../utils/indicatorCodes";

const IndicatorList = ({ onIndicatorSelect }) => {
  const [indicators, setIndicators] = useState([]);

  useEffect(() => {
    // Recorrer el array indicatorCodes y extraer solo los códigos
    const indicatorCodesArray = indicatorCodes.map((indicator) => indicator.code);
    setIndicators(indicatorCodesArray);
  }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente

  const handleIndicatorSelect = (indicatorCode) => {
    onIndicatorSelect(indicatorCode); // Llamar a la función de selección con el código del indicador
  };

  return (
    <div>
      <h3>Selecciona un indicador:</h3>
      <ul>
        {indicators.map((indicatorCode) => (
          <li key={indicatorCode} onClick={() => handleIndicatorSelect(indicatorCode)}>
            {indicatorCode}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndicatorList;
