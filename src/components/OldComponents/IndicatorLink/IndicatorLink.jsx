import React from "react";
import { Link, useParams } from "react-router-dom";

const IndicatorLink = ({ indicator }) => {
  const { countryIso3Code } = useParams();


  return (
    <li>
      <Link
        to={`/country/${countryIso3Code?countryIso3Code:'ES'}/indicator/${indicator.Code}`}
      >
        {indicator.Name}
      </Link>
    </li>
  );
};

export default IndicatorLink;
