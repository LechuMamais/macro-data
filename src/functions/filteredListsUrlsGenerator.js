// Función para generar la URL según el tipo de filtro
export const filteredListUrlsGenerator = (
    filter,
    listItem,
    countryIso3Code,
    indicatorCode,
    from,
    to
  ) => {
    switch (filter) {
      case "country":
        return `/country/${listItem.Code || filterPosibilities[country].defaultValue
          }/indicator/${indicatorCode || filterPosibilities[indicator].defaultValue
          }/from/${from || filterPosibilities[yearFrom].defaultValue}/to/${to || filterPosibilities[yearTo].defaultValue
          }`;
      case "indicator":
        return `/country/${countryIso3Code || filterPosibilities[country].defaultValue
          }/indicator/${listItem.Code || filterPosibilities[indicator].defaultValue
          }/from/${from || filterPosibilities[yearFrom].defaultValue}/to/${to || filterPosibilities[yearTo].defaultValue
          }`;
      case "yearFrom":
        return `/country/${countryIso3Code || filterPosibilities[country].defaultValue
          }/indicator/${indicatorCode || filterPosibilities[indicator].defaultValue
          }/from/${listItem || filterPosibilities[yearFrom].defaultValue}/to/${to || filterPosibilities[yearTo].defaultValue
          }`;
      case "yearTo":
        return `/country/${countryIso3Code || filterPosibilities[country].defaultValue
          }/indicator/${indicatorCode || filterPosibilities[indicator].defaultValue
          }/from/${from || filterPosibilities[yearFrom].defaultValue}/to/${listItem || filterPosibilities[yearTo].defaultValue
          }`;
      default:
        return "/";
    }
  };