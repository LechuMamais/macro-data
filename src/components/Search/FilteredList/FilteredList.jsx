import { Link, useParams } from "react-router-dom";
import "./FilteredList.css";
import React from "react";

// Este componente hace una lista de link, que son los valores que coinciden con lo introducida en el input
// Al darles click se modifica la url, metiendo parametros diferentes según se use para mostrar countries o indicators
// Este cambio de parámetros va a generar que se repinten diferentes componetnes. Tiene valores por defecto: Spain y PBI 
const FilteredList = ({ listContent, onClick, id, searchParam }) => {
  const { countryIso3Code, indicatorCode } = useParams();

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
          key={listItem.Code}
          onClick={() => onClick(listItem)}
          className="custom-link"
        >
          <li className="country-name-li">{listItem.Name}</li>
        </Link>
      ))}
    </ul>
  );
};

export default React.memo(FilteredList);
