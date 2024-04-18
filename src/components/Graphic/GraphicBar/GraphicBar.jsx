import './GraphicBar.css';
import React from "react";

const GraphicBar = ({ date, value, maxValue, minValue, onMouseOver }) => {
  const height = ((value - minValue) / (maxValue - minValue)) * 100 + "%";

  return (
    <div
      className="graphic-bar-container"
      onMouseOver={() => onMouseOver(date, value)}
    >
      <div className="graphic-bar" style={{ height }}></div>
    </div>
  );
};

export default GraphicBar;
