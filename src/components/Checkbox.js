import React from "react";

const Checkbox = ({ label, isChecked, onCheckboxChange }) => (
  <div>
    <label>
      <input
        type="checkbox"
        name={ label }
        checked={ isChecked }
        onChange={ onCheckboxChange }
      />
      { label }
    </label>
  </div>
);

export default Checkbox;
