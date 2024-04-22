import "./CountryInfo.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIndicatorData } from "../../../services/getIndicatorData";
import IndicatorDataContainer from "../IndicatorDataContainer/IndicatorDataContainer";
import { findCountryByCode } from "../../../utils/codesHandler";
import { SearchBar } from "../../Search/SearchBar/SearchBar";

const CountryInfo = () => {
  const { countryIso3Code, indicatorCode, from, to } = useParams();
  const [countryIndicatorData, setCountryIndicatorData] = useState([]);
  const [filteredIndicatorData, setFilteredIndicatorData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIndicatorData(countryIso3Code, indicatorCode);
        //console.log(data);
        // Cuando se le envian codigos incorrectos, la api devuelve un array con datos del error.
        // Si hay este error, lo metemos en setError

        if (!data) {
          // Si !data el error es que no se pudo obtener informacion de la API
          setError(
            "No se pudo obtener datos válidos para este país y este indicador."
          );
          setCountryIndicatorData([]); // Reiniciar el estado si los datos son inválidos
        }
        if (data && Array.isArray(data) && data.length > 0) {
          if (data.length == 2 && data[1] == null) {
            setError("No existen datos para el pais seleccinado."); // Establecer el estado de error en caso de error
            setCountryIndicatorData([]); // Reiniciar el estado en caso de error
          } else if (data[0].message && data[0].message[0].id === "120") {
            setError(data[0].message[0].value);
            setCountryIndicatorData([]); // Reiniciar el estado si hay error
          } else {
            setError(null);
            setCountryIndicatorData(data); // Actualizar el estado con los datos recibidos
          }
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
        setError("Error al obtener los datos del país."); // Establecer el estado de error en caso de error
        setCountryIndicatorData([]); // Reiniciar el estado en caso de error
      }
    };

    if (countryIso3Code && indicatorCode) {
      fetchData(); // Llamar a la función fetchData solo si existen countryIso3Code e indicatorCode
    }
  }, [countryIso3Code, indicatorCode]); // Volver a ejecutar si cambian los parametros de la url

  // useEffect para obtener el nombre del país
  useEffect(() => {
    if (countryIso3Code && indicatorCode) {
      setCountryName(findCountryByCode(countryIso3Code).Name);
    }
  }, [countryIso3Code]); // <-- Dependencia para actualizar el nombre del país

  // useEffect para filtrar los datos por años
  useEffect(() => {
    if (countryIndicatorData && countryIndicatorData.length > 0) {
      const metadata = countryIndicatorData[0]; // Metadatos del país e indnicador

      // En countryIndicatorData[1] están todos los datos de todos los años para el pais y el indicador seleccionado
      const indicatorData = countryIndicatorData[1];
      // Filtrar los datos por rango de años
      const filteredData = indicatorData.filter((data) => {
        const year = parseInt(data.date); // Convertir a número
        return year >= parseInt(from) && year <= parseInt(to);
      });

      // Crear un nuevo array con los metadatos y los datos filtrados
      const filteredCountryIndicatorData = [metadata, filteredData];

      // Actualizar el estado con los datos filtrados
      setFilteredIndicatorData(filteredCountryIndicatorData);
    }
  }, [countryIndicatorData, from, to]);

  return (
    <div>
      {/* Renderizar el mensaje de error si está presente */}
      {error && (
        <div id="no-data-to-show">
          <p>{error}</p>
        </div>
      )}
      {/* Renderizar solo si filteredIndicatorData tiene elementos y no hay error */}
      {!error && filteredIndicatorData.length > 0 && (
        <div>
          <div id="SelectedCountryName">
            <h3 id="countryName">{countryName}</h3>
            <h4 id="countryIso3Code">{countryIso3Code}</h4>
          </div>

          <ul className="indicatorsContainer">
            {/* Pasar countryIndicatorData como prop al componente IndicatorDataContainer */}
            <IndicatorDataContainer
              countryIndicatorData={filteredIndicatorData}
            />
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
