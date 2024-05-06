// Función para obtener los valores de un indicador específico de un país
export const getIndicatorData = async (countryCode, indicatorCode) => {
  const baseUrl = "https://api.worldbank.org/v2/country";
  const url = `${baseUrl}/${countryCode}/indicator/${indicatorCode}?format=json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error en la solicitud");
    }
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error(`Error al obtener datos del indicador ${indicatorCode}:`, error);
    return null;
  }
};

