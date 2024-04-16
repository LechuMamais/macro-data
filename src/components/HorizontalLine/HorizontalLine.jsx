import './HorizontalLine.css';
import React from "react";

const HorizontalLine = ({ top, valueHover, unit }) => {
  return (
    <div
    className="graphic-horizontal-line"
    style={{ top }}>
      <p>{valueHover 
      ? valueHover.toFixed(2) + " " + unit
      : "Sin datos"}</p>
    </div>
  );
};

export default HorizontalLine;
