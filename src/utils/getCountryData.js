import { indicatorCodes } from "./indicatorCodes";

//Peticion que obtiene todos los valores de todos los indicadores de un pais
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

// Función para obtener los valores de un indicador específico de un país
export const getIndicatorData = async (countryCode, indicatorCode) => {
  const baseUrl = "https://api.worldbank.org/v2/country";
  const url = `${baseUrl}/${countryCode}/indicator/${indicatorCode}?format=json`;

  console.log('Requesting URL:', url); // Verificar la URL generada

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    const responseData = await response.json();
    console.log(responseData);

    return responseData;
  } catch (error) {
    console.error(`Error al obtener datos del indicador ${indicatorCode}:`, error);
    return null;
  }
};