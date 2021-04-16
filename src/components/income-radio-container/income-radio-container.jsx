import React, { useState } from 'react';

import './income-radio-container.scss';

const RadioButton = ({
  value, 
  name, 
  description, 
  handleRadio, 
  onRadioChange}) => {

  return (
    <label className="form__radio-button form__radio-button--income">
      <input
        onInput={({target}) => onRadioChange(target.value)}
        onChange={({target}) => handleRadio(target)} 
        type="radio" 
        name={name} 
        className="radio" 
        value={value} 
        required />
      <span
        onMouseEnter={({target}) => handleRadio(target)} 
        className="form__radio-text form__radio-text--income"> {description}</span>
    </label>
  )
}

const IncomeRadioContainer = ({listData, title, onRadioChange}) => {
  const [progressBar, setProgress] = useState(0);

  const handleRadio = (target) => {
    
    switch (target.value || target.innerText) {
      case '1':
        return setProgress(0)
      case '2':
        return setProgress(25)
      case '3':
        return setProgress(47)
      case '4':
        return setProgress(70)
      case '5':
        return setProgress(100)
      default:
        break;
    }

    switch (target.value) {
      case '0-100000':
        setProgress(0);
        break;
      case '100000-200000':
        setProgress(25)
        break;
      case '200000-300000':
        setProgress(47);
        break;
      case 'more than 300000':
        setProgress(70);
        break;
      case 'newcomer':
        setProgress(100);
        break;
      default:
        break;
    }

    switch (target.innerText) {
      case '0 - 100 000 рублей':
        setProgress(0);
        break;
      case '100 000 - 200 000 рублей':
        setProgress(25)
        break;
      case '200 000 - 300 000 рублей':
        setProgress(47);
        break;
      case 'Свыше 300 000 рублей':
        setProgress(70);
        break;
      case 'Я начинающий предприниматель':
        setProgress(100);
        break;
      default:
        break;
    }
  };

  return (
  <div className="container__inner form__radio-container">
    <h3 className="radio__header">{title}</h3>
    <div className="radio__wrapper radio__wrapper--income">
      {
        listData.map(({name, value, description}) => {
          return (
            <RadioButton key={value} listData={listData} onRadioChange={onRadioChange} handleRadio={handleRadio} value={value} name={name} description={description} />
          )
        })
      }
      <div
        className="form__radio-progress form__radio-progress--income"
        style={{background: `linear-gradient(to ${window.innerWidth > 1023 ? `right` : `bottom`}, #299DC6 ${progressBar}%, white ${progressBar}%)`}}>
      </div>
    </div>
  </div>
  )
}

export default IncomeRadioContainer;
