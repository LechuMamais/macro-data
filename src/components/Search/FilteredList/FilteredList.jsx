import React from "react";
import { Link, useParams } from "react-router-dom";
import "./FilteredList.css";
import { filteredListUrlsGenerator } from "../../../utils/filterPosibilities";

const FilteredList = ({ listContent, onClick, id, filter }) => {
  // Desestructurar los parámetros de la URL
  const { countryIso3Code, indicatorCode, from, to } = useParams();

  return (
    <ul className="select-list" id={id}>
      {listContent.map((listItem) => (
        <Link
          to={filteredListUrlsGenerator(
            filter,
            listItem,
            countryIso3Code,
            indicatorCode,
            from,
            to
          )}
          key={listItem.Code || listItem}
          onClick={() => onClick(listItem)}
          className="custom-link"
        >
          <li className="country-name-li">{listItem.Name || listItem}</li>
        </Link>
      ))}
    </ul>
  );
};

export default React.memo(FilteredList);
