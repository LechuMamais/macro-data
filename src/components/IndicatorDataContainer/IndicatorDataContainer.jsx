import IndicatorGraphic from "../IndicatorGraphic/IndicatorGraphic";
import "./IndicatorDataContainer.css";
import React from "react";

const IndicatorDataContainer = ({ indicator }) => {
  return (
    <>
      <h3 className="indicator-name">{indicator.indicator.name}</h3>
      <div>
        <IndicatorGraphic indicator={indicator} /> 
      </div>
    </>
  );
};

export default IndicatorDataContainer;
