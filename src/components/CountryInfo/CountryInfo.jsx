import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIndicatorData } from "../../utils/getCountryData";
import IndicatorDataContainer from "../IndicatorDataContainer/IndicatorDataContainer";
import countriesWithCodes from "../../utils/code3iso_eng";

const CountryInfo = () => {
  const { countryIso3Code, indicatorCode } = useParams();
  const [countryIndicatorData, setCountryIndicatorData] = useState([]);
  const [countryName, setCountryName] = useState("");

  useEffect(() => {
    console.log("Iniciando fetchData desde CountryInfo");
    const fetchData = async () => {
      try {
        const data = await getIndicatorData(countryIso3Code, indicatorCode);
        console.log("Received data:", data);
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
  }, [countryIso3Code, indicatorCode]); // <-- Dependencias del efecto

  // useEffect para obtener el nombre del país
  useEffect(() => {
    const foundCountry = countriesWithCodes.find(
      (country) => country.code3iso === countryIso3Code
    );
    if (foundCountry) {
      setCountryName(foundCountry.name);
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



/*import IndicatorDataContainer from "../IndicatorDataContainer/IndicatorDataContainer";
import "./CountryInfo.css";
import React from "react";
import { getIndicatorData } from '../../utils/getCountryData';

const CountryInfo = ({ countryIndicatorData }) => {
  const countryName = countryIndicatorData[1][0].country.value;
  const countryIso3Code = countryIndicatorData[0].countryiso3code;
  const indicator = countryIndicatorData[1][0].indicator.id;
  console.log(countryIndicatorData)
  return (
    <div>
      <div id="SelectedCountryName">
        <h3 id="countryName">{countryName}</h3>
        <h4 id="countryIso3Code">{countryIso3Code}</h4>
      </div>

      <ul className="indicatorsContainer">
        <IndicatorDataContainer countryIndicatorData={countryIndicatorData} />
      </ul>
    </div>
  );
};

export default CountryInfo;*/
