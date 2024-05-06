import countriesData from "../utils/code2iso.json";
import { indicatorCodes } from "../utils/indicatorCodes";

export const updateFilteredList = (filter, inputText) => {
    let filteredFilterNames = [];
    if (filter == "country") {
        filteredFilterNames = countriesData.filter((country) =>
          country.Name.toLowerCase().includes(inputText.toLowerCase())
        );
      }
      if (filter == "indicator") {
        filteredFilterNames = indicatorCodes.filter((indicator) =>
          indicator.Name.toLowerCase().includes(inputText.toLowerCase())
        );
      }
      return filteredFilterNames;
}