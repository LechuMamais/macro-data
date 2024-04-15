import IndicatorData from "../IndicatorData/IndicatorData";
import IndicatorGraphic from "../IndicatorGraphic/IndicatorGraphic";
import "./IndicatorDataContainer.css";
import React from "react";

const IndicatorDataContainer = ({ indicator }) => {
  return (
    <>
      <strong>{indicator.indicator.name}</strong>
      <div>
        <IndicatorGraphic indicator={indicator} /> 
      </div>
    </>
  );
};

export default IndicatorDataContainer;
