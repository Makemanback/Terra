import React, { useState } from 'react';
import { repeationData } from '../../const';

import './styled-radio-container.scss';

const RadioButton = ({
  value, 
  name, 
  description, 
  handleRadio, 
  listData,
  onRadioChange}) => {

  const getRadioClass = () => listData === repeationData  ? `form__radio-text` : `form__radio-text form__radio-text--income`;

  return (
    <label className="form__radio-button">
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
        className={getRadioClass()}> {description}</span>
    </label>
  )
}

const StyledRadioContainer = ({listData, title, onRadioChange}) => {
  const [progressBar, setProgress] = useState(0);

  const getProgressClass = () => listData === repeationData  ? `form__radio-progress` : `form__radio-progress form__radio-progress--income`;

  const handleRadio = (target) => {
    
    switch (target.value || target.innerText) {
      case '1':
        return setProgress(0)
      case '2':
        return setProgress(25)
      case '3':
        return setProgress(50)
      case '4':
        return setProgress(75)
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
        setProgress(50);
        break;
      case 'more than 300000':
        setProgress(75);
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
        setProgress(50);
        break;
      case 'Свыше 300 000 рублей':
        setProgress(75);
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
    <div className="radio__wrapper">
      {
        listData.map(({name, value, description}) => {
          return (
            <RadioButton key={value} listData={listData} onRadioChange={onRadioChange} handleRadio={handleRadio} value={value} name={name} description={description} />
          )
        })
      }
      <div
        className={getProgressClass()}
        style={{background: `linear-gradient(to right, #299DC6 ${progressBar}%, white ${progressBar}%)`}}>
      </div>
    </div>
  </div>
  )
}

export default StyledRadioContainer;
