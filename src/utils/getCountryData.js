import { indicatorCodes } from "./indicatorCodes";

export const getCountryData = async (countryCode) => {
  const baseUrl = "https://api.worldbank.org/v2/country";
  const requests = indicatorCodes.map(async (indicatorCode) => {
    const url = `${baseUrl}/${countryCode}/indicator/${indicatorCode.code}?format=json`;
    return fetch(url).then((response) => response.json());
  });

  try {
    const responses = await Promise.all(requests);
    const countryData = responses.map((response, index) => ({
      indicator: indicatorCodes[index],
      data: response[1], // La data relevante se encuentra en la posición 1 del array de respuesta
    }));
    return countryData;
  } catch (error) {
    console.error("Error al obtener datos del país:", error);
    return [];
  }
};
