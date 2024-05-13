import { indicatorCodes } from "./indicatorCodes";
import countryCodes from "./code2iso.json"

export const findCountryByCode = (code) => {
    const foundCountry = countryCodes.find((i) => i.Code === code)
    return foundCountry
}

export const findIndicatorByCode = (code) => {
    const foundIndicator = indicatorCodes.find((i) => i.Code === code);
    return foundIndicator;
}