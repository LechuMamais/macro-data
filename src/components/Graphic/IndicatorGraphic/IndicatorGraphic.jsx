import React, { useState } from "react";
import "./IndicatorGraphic.css";
import GraphicBar from "../GraphicBar/GraphicBar";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import { useEffect } from "react";
import { findIndicatorByCode } from "../../../utils/codesHandler";
import { useMemo } from "react";

const IndicatorGraphic = ({ countryIndicatorData }) => {
  const [hoverInfo, setHoverInfo] = useState({ date: "", value: "" });

  useEffect(() => {
    if (
      !countryIndicatorData ||
      !Array.isArray(countryIndicatorData[1]) ||
      countryIndicatorData[1].length === 0
    ) {
      console.error("No hay countryIndicatorData válido");
    }
  }, [countryIndicatorData]);

  if (
    !countryIndicatorData ||
    !Array.isArray(countryIndicatorData[1]) ||
    countryIndicatorData[1].length === 0
  ) {
    return (
      <div className="indicatorGraphicContainer">No hay datos disponibles.</div>
    );
  }

  const unit = findIndicatorByCode(
    countryIndicatorData[1][0].indicator.id
  ).measurement;

  //Creamos arrays de fechas y valores. Utilizamos useMemo para que estas funciones solo se vuelvan a ejecutar si se modifica alguno de sus parametros
  //Damos vuelta los datos, porque vienen en orden descentente en fecha
  const reversedData = useMemo(() => [...countryIndicatorData[1]].reverse(), [countryIndicatorData]);
  const dates = useMemo(() => reversedData.map((item) => item.date), [reversedData]);
  const values = useMemo(()=>reversedData.map((item)=>item.value),[reversedData]);
  // Obtenemos el máximo y mínimo de los valores
  const maxDate = useMemo(()=>Math.max(...dates),[dates]);
  const minDate = useMemo(()=>Math.min(...dates),[dates]);
  const maxValue = useMemo(()=>Math.max(...values),[values]);
  const minValue = useMemo(()=>Math.min(...values),[values]);

  // Manejar el hover, setea el hover info
  const handleMouseOver = (date, value) => {
    setTimeout(() => {
      setHoverInfo({ date, value });
    }, 240);
  };

  const HorizontalLineTextTopCalculator = (hoverValue) => {
    let marginModifier = 0;
    //Tenemos que calcularlo de manera diferente para el caso en que minValue sea negativo
    if(minValue>=0){
      if ((maxValue - minValue) * 0.9 < hoverValue) {
        marginModifier = 26.5;
      }
    }else{
      if ((maxValue + minValue) * 0.9 < hoverValue) {
        marginModifier = 26.5;
      }
    }
    return marginModifier;
  };

  // La funcion para calcular la altura a la que se ubicará la linea punteada, la pasamos directamente.
  // Es una adaptación de la que usamos para dar altura a la barra

  return (
    <div className="indicatorGraphicContainer">
      <div className="mouse-hover-bar-info"></div>
      <p id="maxValue">Max: {maxValue.toFixed(2) + unit}</p>
      <p id="minValue">{minValue.toFixed(1)}</p>
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
          (((hoverInfo.value - minValue) / (maxValue - minValue)) *
            -1 *
            2 *
            100 *
            1009 *
            (1 / 449.33)) -
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
//top={hoverInfo.value>0?(449 * (hoverInfo.value / maxValue) + 39.5) * -1 + "px":(449 * (hoverInfo.value / maxValue) + 39.5) * -1 + "px"}

export default IndicatorGraphic;
