import React from 'react';

import './form-text-input.scss';

const FormTextInput = ({title, placeholder, type, onInputChange}) => {
  return (
  <div className="container__inner">
    <label className="form__label">
      <span className="form__label-text">{title}:</span>
      <input 
        onChange={(evt) => onInputChange(evt.target.value)}
        type={type} 
        className="input input__name" 
        placeholder={placeholder} 
        required />
    </label>
  </div>
  )
}

export default FormTextInput;