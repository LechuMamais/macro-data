import "./SearchLabel.css";

import React, { useRef } from "react";

const SearchLabel = ({
  value,
  onClick,
  onChange,
  placeholder,
  id,
  lens = false,
}) => {
  // Referencia para el input
  const inputRef = useRef(null);

  return (
    <div className={id + "-container search-input-container"} onClick={onClick}>
      {lens && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
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
