import "./CountryInfo.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIndicatorData } from "../../services/getIndicatorData";
import IndicatorDataContainer from "../IndicatorDataContainer/IndicatorDataContainer";
import { findCountryByCode } from "../../utils/codesHandler";

const CountryInfo = () => {
  const { countryIso3Code, indicatorCode } = useParams();
  const [countryIndicatorData, setCountryIndicatorData] = useState([]);
  const [countryName, setCountryName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIndicatorData(countryIso3Code, indicatorCode);
        // Cuando se le envian codigos incorrectos, la api devuelve un array con datos del error.
        // Si hay este error, lo metemos en setError
        if (data && data.length > 0 && data[0].message) {
          const firstError = data[0].message[0];
          if (firstError.id === "120") {
            setError(firstError.value);
            setCountryIndicatorData([]); // Reiniciar el estado si hay error
          } else {
            setCountryIndicatorData(data); // Actualizar el estado con los datos recibidos
          }
        } else {
          // Si !data el error es que no se pudo obtener informacion de la API
          setError("No se pudo obtener datos válidos para este país y este indicador.");
          setCountryIndicatorData([]); // Reiniciar el estado si los datos son inválidos
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

  return (
    <div>
      {/* Renderizar el mensaje de error si está presente */}
      {error && <div>{error}</div>}
      {/* Renderizar solo si countryIndicatorData tiene elementos y no hay error */}
      {!error && countryIndicatorData.length > 0 && (
        <div>
          <div id="SelectedCountryName">
            <h3 id="countryName">{countryName}</h3>
            <h4 id="countryIso3Code">{countryIso3Code}</h4>
          </div>

          <ul className="indicatorsContainer">
            {/* Pasar countryIndicatorData como prop al componente IndicatorDataContainer */}
            <IndicatorDataContainer countryIndicatorData={countryIndicatorData} />
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
