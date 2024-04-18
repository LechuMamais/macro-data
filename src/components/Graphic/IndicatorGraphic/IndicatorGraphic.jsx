import React, { useState } from "react";
import "./IndicatorGraphic.css";
import GraphicBar from "../GraphicBar/GraphicBar";
import HorizontalLine from "../HorizontalLine/HorizontalLine";
import { useEffect } from "react";
import { findIndicatorByCode } from "../../../utils/codesHandler";

const IndicatorGraphic = ({ countryIndicatorData }) => {
  const [hoverInfo, setHoverInfo] = useState({ date: "", value: "" });

  useEffect(() => {
    if (!countryIndicatorData || !Array.isArray(countryIndicatorData[1]) || countryIndicatorData[1].length === 0) {
      console.error("No hay countryIndicatorData válido");
    }
  }, [countryIndicatorData]);

  if (!countryIndicatorData || !Array.isArray(countryIndicatorData[1]) || countryIndicatorData[1].length === 0) {
    return (
      <div className="indicatorGraphicContainer">No hay datos disponibles.</div>
    );
  }

  const unit = findIndicatorByCode(countryIndicatorData[1][0].indicator.id).measurement;

  //Damos vuelta los datos, porque vienen en orden descentente en fecha
  const reversedData = [...countryIndicatorData[1]].reverse();
  //Creamos arrays de fechas y valores
  const dates = reversedData.map((item) => item.date);
  const values = reversedData.map((item) => item.value);

  // Obtenemos el máximo y mínimo de los valores
  const maxDate = Math.max(...dates);
  const minDate = Math.min(...dates);
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);

  // Manejar el hover, setea el hover info 
  const handleMouseOver = (date, value) => {
    setTimeout(() => {
      setHoverInfo({ date, value });
    }, 200);
  };

  const HorizontalLineTextTopCalculator=(hoverValue)=>{
    let marginModifier = 0;
    if((maxValue-minValue)*0.9<hoverValue){
      marginModifier = 26.5
    };
    return marginModifier;
  }

  return (
    <div className="indicatorGraphicContainer">
      <div className="mouse-hover-bar-info">
        
      </div>
      <p id="maxValue">Max: {maxValue.toFixed(2)+unit}</p>
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
        top={(449 * (hoverInfo.value / maxValue) + 39.5) * -1 + "px"}
        textContainerMarginTop={HorizontalLineTextTopCalculator(hoverInfo.value)}
        hoverInfo={hoverInfo}
        unit={unit}
      />
    </div>
  );
};

export default IndicatorGraphic;

/*====================================================================================================================================================*/

/*import { useState } from "react";
import "./IndicatorGraphic.css";
import React from "react";
import { indicatorCodes } from "../../utils/indicatorCodes";

const IndicatorGraphic = ({ indicator }) => {
  // Primero que todo verificar si hay datos disponibles
  if (!indicator || !indicator.data || indicator.data.length === 0) {
    return (
      <div className="indicatorGraphicContainer">No hay datos disponibles.</div>
    );
  }
  // Invertir los datos para que muestre los años en orden ascendete
  const reversedData = [...indicator.data].reverse();

  // Unidad de medida
  const unit = indicatorCodes.find(
    (i) => i.code === indicator.indicator.code
  ).measurement;
  console.log(unit);

  // Variables que necesitamos modificar durante la vida del componente
  const [dateHover, setDateHover] = useState("");
  const [valueHover, setValueHover] = useState("");

  // Funciones para manejar los eventos del raton sobre los graficos
  const handleMouseOver = (date, value) => {
    setTimeout(() => {
      // El proposito de este setTimeout es luego hacer que la linea solo se mueva si pasó un poquito de tiempo sobre una misma barra, diferente de esta
      setDateHover(date);
      setValueHover(value);
    }, 200);
  };

  // Obtenemos los valores minimos y maximos de date y value, para los ejes de los graficos
  const dates = reversedData ? reversedData.map((item) => item.date) : "";
  const values = reversedData ? reversedData.map((item) => item.value) : "";

  const maxDate = Math.max(...dates);
  const minDate = Math.min(...dates);

  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);

  // Función para calcular la altura de la barra en función del valor
  const heightBarCalculator = (value) => {
    const height = ((value - minValue) / (maxValue - minValue)) * 100;
    return height + "%";
  };

  // Función para calcular la altura de la linea en función del valor
  // Hay que hacerle un ajuste para los casos en donde minHeight sea menor a 0, porque se rompe
  const heightLineCalculator = (value) => {
    const height = 449 * (value / maxValue) + 43.5;
    console.log(height + "px");
    return "-" + height + "px";
  };

  return (
    <div className="indicatorGraphicContainer">
      <div className="mouse-hover-bar-info">
        <p>Año: {dateHover}</p>
        <p>Valor: {valueHover ? valueHover + " " + unit : "Sin datos"}</p>
      </div>
      <p id="maxValue">{maxValue.toFixed(2)}</p>
      <p id="minValue">{minValue.toFixed(2)}</p>
      <p id="empty-space"></p>
      <div id="datesContainer">
        <p id="minDate">{minDate}</p>
        <p id="maxDate">{maxDate}</p>
      </div>
      <div className="indicatorGraphic">
        {reversedData.map((item) => (
          <div
            className="graphic-bar-container"
            key={item.date}
            style={{
              width: `${100 / indicator.data.length}%`,
            }}
            onMouseOver={() => handleMouseOver(item.date, item.value)}
          >
            <div
              className="graphic-bar"
              id={item.date}
              style={{
                height: `${heightBarCalculator(item.value)}`,
              }}
            ></div>
          </div>
        ))}
      </div>
      {
        <div
          className="graphic-horizontal-line"
          style={{
            top: `${heightLineCalculator(valueHover)}`,
          }}
        >
          <p>{valueHover ? valueHover + " " + unit : "Sin datos"}</p>
        </div>
      }
    </div>
  );
};

export default IndicatorGraphic;*/
