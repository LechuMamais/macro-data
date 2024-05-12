import {
    findIndicatorByCode,
    findCountryByCode,
} from "../utils/codesHandler";

export const giveFilterDefaultName = (
    filter,
    countryIso3Code,
    indicatorCode,
    from,
    to
) => {
    switch (filter) {
        case "country":
            return findCountryByCode(countryIso3Code).Name;
        case "indicator":
            return findIndicatorByCode(indicatorCode).Name;
        case "yearFrom":
            return from;
        case "yearTo":
            return to;
        default:
            return "";
    }
};