import React from "react";
import { indicatorCodes } from "../../utils/indicatorCodes";
import IndicatorLink from "../IndicatorLink/IndicatorLink";

const IndicatorsList = ({ onSelectIndicator }) => {
  const handleIndicatorSelect = (indicator) => {
    onSelectIndicator(indicator);
  };

  return (
    <div className="indicator-list select-list">
      <ul>
        {indicatorCodes.map((indicator) => (
          <IndicatorLink
            key={indicator.code}
            indicator={indicator}
            onClick={handleIndicatorSelect}
          />
        ))}
      </ul>
    </div>
  );
};

export default IndicatorsList;
