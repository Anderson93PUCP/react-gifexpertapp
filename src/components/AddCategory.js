import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setinputValue] = useState("");

  const handleInputvalue = (e) => {
    setinputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    //Nos permite que al hacer enter en un formulario (<form>) no se actualice la página capturando el evento (e)
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]); //Esta es una forma de enviar solo el setCategories sin tener que enviar las categorias
      setinputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputvalue} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
