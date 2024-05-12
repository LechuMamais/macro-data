export const filterPosibilities = {
  country: {
    placeholder: "Seleccionar pais",
    text: "country",
    filteredListId: "FilteredCountriesList",
    defaultValue: "ES",
  },
  indicator: {
    placeholder: "Seleccionar indicador",
    text: "indicator",
    filteredListId: "FilteredIndicatorsList",
    defaultValue: "NY.GDP.MKTP.CD",
  },
  yearFrom: {
    placeholder: "Year",
    text: "yearFrom",
    filteredListId: "FilteredFromYearsList",
    defaultValue: "1974",
  },
  yearTo: {
    placeholder: "Year",
    text: "yearTo",
    filteredListId: "FilteredToYearsList",
    defaultValue: "2024",
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