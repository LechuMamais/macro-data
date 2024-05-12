import { updateFilteredList } from "../functions/updateFilteredList";
import { yearsSetter } from "../functions/yearsSetter";

export const filterPosibilities = {
  country: {
    text: "country",
    type: "string",
    placeholder: "Seleccionar pais",
    filteredListId: "FilteredCountriesList",
    defaultValue: "ES",
    lens: true,
    filteredFiltersListCreator: (text, inputText)=>{ return updateFilteredList(text, inputText)}
  },
  indicator: {
    text: "indicator",
    type: "string",
    placeholder: "Seleccionar indicador",
    filteredListId: "FilteredIndicatorsList",
    defaultValue: "NY.GDP.MKTP.CD",
    lens: true,
    filteredFiltersListCreator: (text, inputText)=>{ return updateFilteredList(text, inputText)}
  },
  yearFrom: {
    text: "yearFrom",
    type: "year",
    placeholder: "Year",
    filteredListId: "FilteredFromYearsList",
    defaultValue: "1974",
    lens: false,
    filteredFiltersListCreator: (text, from, to)=>{return yearsSetter(text, from, to)},
  },
  yearTo: {
    text: "yearTo",
    type: "year",
    placeholder: "Year",
    filteredListId: "FilteredToYearsList",
    defaultValue: "2024",
    lens: false,
    filteredFiltersListCreator: (text, from, to)=>{return yearsSetter(text, from, to)}
  },
};

export   // Función para generar la URL según el tipo de filtro
const filteredListUrlsGenerator = (
    filter,
    listItem,
    countryIso3Code,
    indicatorCode,
    from,
    to
  ) => {
  switch (filter) {
    case "country":
      return `/country/${
        listItem.Code || filterPosibilities[country].defaultValue
      }/indicator/${
        indicatorCode || filterPosibilities[indicator].defaultValue
      }/from/${from || filterPosibilities[yearFrom].defaultValue}/to/${
        to || filterPosibilities[yearTo].defaultValue
      }`;
    case "indicator":
      return `/country/${
        countryIso3Code || filterPosibilities[country].defaultValue
      }/indicator/${
        listItem.Code || filterPosibilities[indicator].defaultValue
      }/from/${from || filterPosibilities[yearFrom].defaultValue}/to/${
        to || filterPosibilities[yearTo].defaultValue
      }`;
    case "yearFrom":
      return `/country/${
        countryIso3Code || filterPosibilities[country].defaultValue
      }/indicator/${
        indicatorCode || filterPosibilities[indicator].defaultValue
      }/from/${listItem || filterPosibilities[yearFrom].defaultValue}/to/${
        to || filterPosibilities[yearTo].defaultValue
      }`;
    case "yearTo":
      return `/country/${
        countryIso3Code || filterPosibilities[country].defaultValue
      }/indicator/${
        indicatorCode || filterPosibilities[indicator].defaultValue
      }/from/${from || filterPosibilities[yearFrom].defaultValue}/to/${
        listItem || filterPosibilities[yearTo].defaultValue
      }`;
    default:
      return "/";
  }
};