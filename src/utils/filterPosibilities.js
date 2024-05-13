import { yearsFromListSetter, yearsToListSetter, filteredCountryListCreator, filteredIndicatorsListCreator } from "../functions/searchListSetters";

export const filterPosibilities = {
  country: {
    text: "country",
    type: "string",
    placeholder: "Seleccionar pais",
    filteredListId: "FilteredCountriesList",
    defaultValue: "ES",
    lens: true,
    filteredFiltersListCreator: (inputText) => { return filteredCountryListCreator(inputText) }
  },
  indicator: {
    text: "indicator",
    type: "string",
    placeholder: "Seleccionar indicador",
    filteredListId: "FilteredIndicatorsList",
    defaultValue: "NY.GDP.MKTP.CD",
    lens: true,
    filteredFiltersListCreator: (inputText) => { return filteredIndicatorsListCreator(inputText) }
  },
  yearFrom: {
    text: "yearFrom",
    type: "number",
    placeholder: "Year",
    filteredListId: "FilteredFromYearsList",
    defaultValue: "1974",
    lens: false,
    filteredFiltersListCreator: (from, to) => { return yearsFromListSetter(to) },
  },
  yearTo: {
    text: "yearTo",
    type: "number",
    placeholder: "Year",
    filteredListId: "FilteredToYearsList",
    defaultValue: "2024",
    lens: false,
    filteredFiltersListCreator: (from) => { return yearsToListSetter(from) }
  },
};
