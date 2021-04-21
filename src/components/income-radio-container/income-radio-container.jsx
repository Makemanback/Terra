import React, { useState } from 'react';

import './income-radio-container.scss';

const RadioButton = ({
  value, 
  description, 
  handleRadio, 
  onRadioChange}) => {

  return (
    <>
    <input
        onInput={({target}) => onRadioChange(target.value)}
        onChange={({target}) => handleRadio(target)} 
        className="rating__input"
        id={value}
        type="radio"
        name="income"
        value={value}
        />
      <label
        className="rating__label"
        htmlFor={value}>
          {description}
      </label>
    </>
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
        return setProgress(50)
      case '4':
        return setProgress(75)
      case '5':
        return setProgress(100)
      default:
        break;
    }

    switch (target.value) {
      case 'newcomer':
        setProgress(0);
        break;
      case '0-100000':
        setProgress(25);
        break;
      case '100000-200000':
        setProgress(50)
        break;
      case '200000-300000':
        setProgress(75);
        break;
      case 'more than 300000':
        setProgress(100);
        break;
      default:
        break;
    }

    switch (target.innerText) {
      case 'Я начинающий предприниматель':
        setProgress(0);
        break;
      case '0 - 100 000 рублей':
        setProgress(25);
        break;
      case '100 000 - 200 000 рублей':
        setProgress(50)
        break;
      case '200 000 - 300 000 рублей':
        setProgress(75);
        break;
      case 'Свыше 300 000 рублей':
        setProgress(100);
        break;
      default:
        break;
    }
  };

  const isChecked = true;
  return (
  <div className="container__inner form__radio-container">
    <h3 className="radio__header">{title}</h3>
    <div className="radio__wrapper radio__wrapper--income">
      <div className="radio__inner">
      {
        listData.map(({value, description}) => {
          return (
            <RadioButton isChecked={isChecked} key={value} listData={listData} onRadioChange={onRadioChange} handleRadio={handleRadio} value={value} description={description} />
          )
        })
      }
      </div>
      <div
        className="form__radio-progress form__radio-progress--income"
        style={{background: `linear-gradient(to ${window.innerWidth > 1023 ? `right` : `bottom`}, #299DC6 ${progressBar}%, white ${progressBar}%)`}}>
      </div>
    </div>
  </div>
  )
}

export default IncomeRadioContainer;
