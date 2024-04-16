import React from "react";
import { Link } from "react-router-dom";

const IndicatorLink = ({ countryCode, indicator, onClick }) => {
  const handleLinkClick = () => {
    onClick(indicator);
  };

  return (
    <li>
      <Link
        to={`/country/${countryCode}/indicator/${indicator.code}`}
        onClick={handleLinkClick}
      >
        {indicator.name}
      </Link>
    </li>
  );
};

export default IndicatorLink;
