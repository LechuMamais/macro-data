import { useParams } from "react-router";
import "./SearchLabel.css";
import React, { useEffect, useRef } from "react";
import countriesWithCodes from "../../utils/code3iso_eng";

const SearchLabel = ({
  value,
  onChange,
  placeholder,
  id,
  lens = false,
}) => {
  // Referencia para el input
  const inputRef = useRef(null);

  // Función para enfocar el input al hacer clic en el ícono
  const handleIconClick = () => {
    // Enfocar el input usando la referencia
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className={id + "-container search-input-container"}>
      {lens && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
          onClick={handleIconClick} // Agregar evento onClick al ícono
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      )}
      <input
        ref={inputRef} // Asignar la referencia al input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default SearchLabel;
