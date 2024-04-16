import { indicatorCodes } from "../../utils/indicatorCodes";
import IndicatorGraphic from "../IndicatorGraphic/IndicatorGraphic";
import "./IndicatorDataContainer.css";
import React from "react";

const IndicatorDataContainer = ({ countryIndicatorData }) => {
  // Nombre del indicador
  const indicatorName = indicatorCodes.find(
    (i) => i.code === countryIndicatorData[1][0].indicator.id
  ).name;

  return (
    <>
      <div className="indicator-select-container">
        <h3 className="indicator-name">{indicatorName}</h3>
        <h4  className="indicator-code">{countryIndicatorData[1][0].indicator.id}</h4>
      </div>
      <div>
        <IndicatorGraphic countryIndicatorData={countryIndicatorData} />
      </div>
    </>
  );
};

export default IndicatorDataContainer;
