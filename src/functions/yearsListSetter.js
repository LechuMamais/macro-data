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
    const currentYear = actualDate.getFullYear(); // Obtener el año actual
    const fromYear = parseInt(from);

    if (!isNaN(fromYear)) {
        const yearDifference = currentYear - fromYear;

        for (let i = 1; i <= yearDifference; i++) {
            filteredFilterNames.push(fromYear + i);
        }
    }
return filteredFilterNames;
}