import React, { useState, useEffect, useMemo } from "react";
import "./IndicatorGraphic.css";
import GraphicBar from "../GraphicBar/GraphicBar";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import { findIndicatorByCode } from "../../../utils/codesHandler";

const IndicatorGraphic = ({ countryIndicatorData }) => {
  // Calcular valores memoizados
  const reversedData = useMemo(
    () => [...countryIndicatorData[1]].reverse(),
    [countryIndicatorData]
  );
  const dates = useMemo(
    () => reversedData.map((item) => item.date),
    [reversedData]
  );
  const values = useMemo(
    () => reversedData.map((item) => item.value),
    [reversedData]
  );
  const maxDate = useMemo(() => Math.max(...dates), [dates]);
  const minDate = useMemo(() => Math.min(...dates), [dates]);
  const maxValue = useMemo(() => Math.max(...values), [values]);
  const minValue = useMemo(() => Math.min(...values), [values]);

  // Estado local
  const [hoverInfo, setHoverInfo] = useState({ date: "", value: "" });
  const [unit, setUnit]= useState()

  // Efecto de validación
  useEffect(() => {
    if (
      !countryIndicatorData ||
      !Array.isArray(countryIndicatorData[1]) ||
      countryIndicatorData[1].length === 0
    ) {
      console.error("No hay countryIndicatorData válido");
    }
    setUnit(findIndicatorByCode(
      countryIndicatorData[1][0].indicator.id
    ).measurement);
  
  }, [countryIndicatorData]);
  
  // Renderizado condicional
  if (
    !countryIndicatorData ||
    !Array.isArray(countryIndicatorData[1]) ||
    countryIndicatorData[1].length === 0
  ) {
    return (
      <div className="indicatorGraphicContainer">No hay datos disponibles.</div>
    );
  }
  
  const handleMouseOver = (date, value) => {
    setTimeout(() => {
      setHoverInfo({ date, value });
    }, 240);
  };
  
  const HorizontalLineTextTopCalculator = (hoverValue) => {
    let marginModifier = 0;
    if (minValue >= 0) {
      if ((maxValue - minValue) * 0.9 < hoverValue) {
        marginModifier = 26.5;
      }
    } else {
      if ((maxValue + minValue) * 0.9 < hoverValue) {
        marginModifier = 26.5;
      }
    }
    return marginModifier;
  };

  return (
    <div className="indicatorGraphicContainer">
      <div className="mouse-hover-bar-info"></div>
      <p id="maxValue">Max: {maxValue.toFixed(2) + unit}</p>
      <p id="minValue">Min: {minValue.toFixed(2) + unit}</p>
      <p id="empty-space"></p>
      <div id="datesContainer">
        <p id="minDate">{minDate}</p>
        <p id="maxDate">{maxDate}</p>
      </div>
      <div className="indicatorGraphic">
        {reversedData.map((item) => (
          <GraphicBar
            key={item.date}
            date={item.date}
            value={item.value}
            maxValue={maxValue}
            minValue={minValue}
            onMouseOver={handleMouseOver}
          />
        ))}
      </div>
      <HorizontalLine
        top={
          ((hoverInfo.value - minValue) / (maxValue - minValue)) *
            -1 *
            2 *
            100 *
            1009 *
            (1 / 449.33) -
          39 +
          "px"
        }
        textContainerMarginTop={HorizontalLineTextTopCalculator(
          hoverInfo.value
        )}
        hoverInfo={hoverInfo}
        unit={unit}
      />
    </div>
  );
};

export default IndicatorGraphic;
