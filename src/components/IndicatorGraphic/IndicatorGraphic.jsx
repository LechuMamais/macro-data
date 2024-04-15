import { useState } from "react";
import "./IndicatorGraphic.css";
import React from "react";

const IndicatorGraphic = ({ indicator }) => {
  // Primero que todo verificar si hay datos disponibles
  if (!indicator || !indicator.data || indicator.data.length === 0) {
    return (
      <div className="indicatorGraphicContainer">No hay datos disponibles.</div>
    );
  }
  // Invertir los datos para que muestre los años en orden ascendete
  const reversedData = [...indicator.data].reverse();

  // Variables que necesitamos modificar durante la vida del componente
  const [dateHover, setDateHover] = useState('');
  const [valueHover, setValueHover] = useState('');

  // Funciones para manejar los eventos del raton sobre los graficos
  const handleMouseOver = (date, value) => {
    setDateHover(date);
    setValueHover(value);
  };
  const handleMouseOut = () => {
    setDateHover('');
    setValueHover('');
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

  return (
    <div className="indicatorGraphicContainer">
      <div className="mouse-hover-bar-info">
        <p>Año: {dateHover}</p>
        <p>Valor: {valueHover?valueHover:'Sin datos'}</p>
      </div>
      <p id="maxValue">{maxValue}</p>
      <p id="minValue">{minValue}</p>
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
            onMouseOut={handleMouseOut}          >
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
    </div>
  );
};

export default IndicatorGraphic;
