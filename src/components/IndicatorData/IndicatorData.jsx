import "./IndicatorData.css";
import React from "react";

const IndicatorData = ({ dataItem }) => {
  return (
    <li key={dataItem.date}>
        <p>Value: {dataItem.value}</p>
        <p>Date: {dataItem.date}</p>
    </li>
  );
};

export default IndicatorData;
