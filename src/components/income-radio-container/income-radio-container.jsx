import React, { useState, useEffect } from 'react';

import './income-radio-container.scss';

const RadioButton = ({
  value,
  description, 
  handleRadio, 
  handleActiveRadio,
  userIncome}) => {

  return (
    <>
    <input
        onChange={({target}) => handleActiveRadio(target)}
        onInput={({target}) => handleRadio(target)} 
        className="rating__input"
        id={value}
        type="radio"
        name="income"
        value={value}
        checked={value == userIncome ? true : null }
        />
      <label
        className="rating__label"
        htmlFor={value}>
          {description}
      </label>
    </>
  )
}

const IncomeRadioContainer = ({listData, title, onRadioChange, userIncome}) => {
  const [progressBar, setProgress] = useState(0);
  const [isActive, setActive] = useState(null);

  const handleRadio = (target) => {

    switch (target || target.value) {
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

  const handleActiveRadio = (target) => {
    onRadioChange(target.id)

    if (userIncome == target.id) {
      return (
        setActive(true)
        )
    }
    return setActive(null)
  }

  useEffect(() => {
    handleRadio(userIncome)
  })

  return (
  <div className="container__inner form__radio-container">
    <h3 className="radio__header">{title}</h3>
    <div className="radio__wrapper radio__wrapper--income">
      <div className="radio__inner">
      {
        listData.map(({value, description, id}) => {
          return (
            <RadioButton
              userIncome={userIncome}
              handleActiveRadio={handleActiveRadio}
              key={value} 
              listData={listData} 
              onRadioChange={onRadioChange} 
              handleRadio={handleRadio} 
              value={value} 
              description={description}
              id={id}
              isActive={isActive} />
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
