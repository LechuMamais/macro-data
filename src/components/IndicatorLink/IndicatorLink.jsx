import React from "react";
import { Link, useParams } from "react-router-dom";

const IndicatorLink = ({ indicator }) => {
  const { countryIso3Code } = useParams();


  return (
    <li>
      <Link
        to={`/country/${countryIso3Code?countryIso3Code:'ES'}/indicator/${indicator.code}`}
      >
        {indicator.name}
      </Link>
    </li>
  );
};

export default IndicatorLink;
