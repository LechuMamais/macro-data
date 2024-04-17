import { Link, useParams } from "react-router-dom";
import "./FilteredList.css";
import React from "react";

const FilteredList = ({ listContent, onClick, id, searchParam }) => {
  const { countryIso3Code, indicatorCode } = useParams();
  console.log(listContent);

  return (
    <ul className="select-list" id={id}>
      {listContent.map((listItem) => (
        <Link
          to={
            searchParam === "country"
              ? `/country/${listItem.Code}/indicator/${
                  indicatorCode ? indicatorCode : "NY.GDP.MKTP.CD"
                }`
              : searchParam === "indicator"
              ? `/country/${countryIso3Code ? countryIso3Code : "ES"}/indicator/${listItem.Code}`
              : "/"
          }
          key={listItem.Name}
          onClick={() => onClick(listItem)}
        >
          <li className="country-name-li">{listItem.Name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default React.memo(FilteredList);
