import './InputField.css'
import { useState } from 'react';

const InputField = ({ name, value, placeholder, onChange, type }) => {
  const [error, setError] = useState("");

  const handleInputNumberChange = (event) => {
    const inputValue = event.target.value;
    if (inputValue === "") {
      onChange(inputValue);
      setError("");
    }
    if (isNaN(Number(inputValue))) {
      setError("Only numbers are allowed.");
    } else {
      onChange(inputValue);
      setError("");
    }
  };

  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div className="input__container">
      <input
        className="input"
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={type === "number" ? handleInputNumberChange : handleChange}
      />
      {error.length > 0 && (
        <p className="error--message">{error}</p>
      )}
    </div>
  );
};

export default InputField;
