import React from 'react';

import './telegram-input.scss';

const TelegramInput = ({title, placeholder, type, onInputChange}) => {

  return (
  <div className="container__inner">
    <label className="form__label">
      <span className="form__label-text">{title}:</span>
      <input
        onChange={(evt) => onInputChange(evt.target.value)}
        type={type} 
        className="input input__name input__telegram" 
        placeholder={placeholder} 
        required />
      <span className="input__telegram-at">@</span>
    </label>
  </div>
  )
}

export default TelegramInput;