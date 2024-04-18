import "./HorizontalLine.css";
import React from "react";

const HorizontalLine = ({ top, hoverInfo, textContainerMarginTop, unit }) => {
  return (
    <div className="graphic-horizontal-line" style={{ top }}>
      <div id="horizontal-line-text-container" style={{ top: `${textContainerMarginTop}px` }}>
        <p>
          {hoverInfo.value
            ? hoverInfo.value.toFixed(2) + unit
            : "Sin datos"}
        </p>
        <p>
          {hoverInfo.date}
        </p>
      </div>
    </div>
  );
};

export default HorizontalLine;
