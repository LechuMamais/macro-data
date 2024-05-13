import countriesData from "../utils/code2iso.json";
import { indicatorCodes } from "../utils/indicatorCodes";

export const filteredCountryListCreator = (inputText) => {
    return countriesData.filter((country) =>
        country.Name.toLowerCase().includes(inputText.toLowerCase())
    );
}

export const filteredIndicatorsListCreator = (inputText) => {
    return indicatorCodes.filter((indicator) =>
        indicator.Name.toLowerCase().includes(inputText.toLowerCase())
    );
};

export const yearsFromListSetter = (to) => {
    let filteredFilterNames = [];
    let i = 0;
    let yearToAdd
    do {
        yearToAdd = 1974 + i;
        filteredFilterNames.push(yearToAdd);
        i++;
    } while (i <= 50 && yearToAdd !== parseInt(to));
    return filteredFilterNames;
}

export const yearsToListSetter = (from) => {
    let filteredFilterNames = [];
    const actualDate = new Date();
    const currentYear = actualDate.getFullYear();
    const fromYear = parseInt(from);

    if (!isNaN(fromYear)) {
        const yearDifference = currentYear - fromYear;
        for (let i = 1; i <= yearDifference; i++) {
            filteredFilterNames.push(fromYear + i);
        }
    }
    return filteredFilterNames;
}