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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIndicatorData(countryIso3Code, indicatorCode);
        if (data) {
          setCountryIndicatorData(data); // Actualizar el estado con los datos recibidos
        } else {
          setCountryIndicatorData([]); // Reiniciar el estado si los datos son inválidos
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
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
      setCountryName(findCountryByCode(countryIso3Code).Name); //
    }
  }, [countryIso3Code]); // <-- Dependencia para actualizar el nombre del país

  return (
    <div>
      <div id="SelectedCountryName">
        <h3 id="countryName">{countryName}</h3>
        <h4 id="countryIso3Code">{countryIso3Code}</h4>
      </div>

      <ul className="indicatorsContainer">
        {countryIndicatorData.length > 0 ? (
          <IndicatorDataContainer countryIndicatorData={countryIndicatorData} />
        ) : (
          <div>No hay datos disponibles</div>
        )}
      </ul>
    </div>
  );
};

export default CountryInfo;
