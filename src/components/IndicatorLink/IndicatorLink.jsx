import React from "react";
import { Link, useParams } from "react-router-dom";

const IndicatorLink = ({ indicator, onClick }) => {
  const { countryIso3Code } = useParams();

  const handleLinkClick = () => {
    onClick(indicator);
  };

  return (
    <li>
      <Link
        to={`/country/${countryIso3Code}/indicator/${indicator.code}`}
        onClick={handleLinkClick}
      >
        {indicator.name}
      </Link>
    </li>
  );
};

export default IndicatorLink;
