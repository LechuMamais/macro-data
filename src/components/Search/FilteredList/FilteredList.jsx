import { Link, useParams } from "react-router-dom";
import "./FilteredList.css";
import React from "react";

// Este componente hace una lista de link, que son los valores que coinciden con lo introducida en el input
// Al darles click se modifica la url, metiendo parametros diferentes según se use para mostrar countries indicators, year from o year to.
// Este cambio de parámetros va a generar que se repinten diferentes componetnes. Tiene valores por defecto: Spain y PBI
const FilteredList = ({ listContent, onClick, id, searchParam }) => {
  const { countryIso3Code, indicatorCode, from, to } = useParams();

  return (
    <ul className="select-list" id={id}>
      {listContent.map((listItem) => (
        <Link
          to={
            searchParam === "country"
              ? `/country/${listItem.Code}/indicator/${
                  indicatorCode ? indicatorCode : "NY.GDP.MKTP.CD"
                }/from/${from ? from : "1974"}/to/${to ? to : "2023"}`
              : searchParam === "indicator"
              ? `/country/${
                  countryIso3Code ? countryIso3Code : "ES"
                }/indicator/${listItem.Code}/from/${from ? from : "1974"}/to/${
                  to ? to : "2023"
                }`
              : searchParam === "year-from"
              ? `/country/${
                  countryIso3Code ? countryIso3Code : "ES"
                }/indicator/${
                  indicatorCode ? indicatorCode : "NY.GDP.MKTP.CD"
                }/from/${listItem}/to/${to ? to : "2023"}`
              : searchParam === "year-to"
              ? `/country/${
                  countryIso3Code ? countryIso3Code : "ES"
                }/indicator/${
                  indicatorCode ? indicatorCode : "NY.GDP.MKTP.CD"
                }/from/${from ? from : "1974"}/to/${listItem}`
              : "/"
          }
          key={listItem.Code?listItem.Code:listItem}
          onClick={() => onClick(listItem)}
          className="custom-link"
        >
          <li className="country-name-li">{listItem.Name? listItem.Name:listItem}</li>
        </Link>
      ))}
    </ul>
  );
};
//Para cada filtro hay una regla que lo que hace es modificar el parametro del que se trate, en la url. Este parámetro va a ser tomado por el
// componentr Graphic para su utilización. 
// En countries e indicators cada listContent tendria Name y Code, para los years  será directamente un array de años. Entonces:
// La key será el codigo del país o del indicador, y listItem=year en caso de year-from y year-to
// El texto que se imprime en pantalla igual, para los countries e indicators será su Name, en caso de los year será listItem.

export default React.memo(FilteredList);
