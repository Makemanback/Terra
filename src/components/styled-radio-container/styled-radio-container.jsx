import React, { useEffect, useState } from 'react';
import { repeationData } from '../../const';

import './styled-radio-container.scss';

const RadioButton = ({
  value,
  description,
  handleRadio,
  handleActiveRadio,
  userMentoringCount
}) => {

  return (
    <>
      <input
        onChange={(evt) => handleActiveRadio(evt)}
        onInput={({ target }) => handleRadio(target)}
        className="rating__input"
        id={`${value}`}
        type="radio"
        name="repeation"
        value={value}
        checked={value == userMentoringCount ? true : null}
      />
      <label
        className="rating__label rating__income"
        htmlFor={`${value}`}>
        {description}
      </label>
    </>
  )
}

const StyledRadioContainer = ({ listData, title, onRadioChange, userMentoringCount }) => {
  const [progressBar, setProgress] = useState(0);
  const [isActive, setActive] = useState(null);

  const getProgressClass = () => listData === repeationData ? `form__radio-progress` : `form__radio-progress form__radio-progress--income`;

  const handleRadio = (target) => {

    switch (target || target.value || target.innerText) {
      case '0':
        return setProgress(0)
      case '1':
        return setProgress(25)
      case '2':
        return setProgress(50)
      case '3':
        return setProgress(75)
      case '4':
        return setProgress(100)
      default:
        break;
    }
  };

  useEffect(() => {
    handleRadio(userMentoringCount)
  })

  const handleActiveRadio = (evt) => {
    onRadioChange(evt.target.value)

    if (userMentoringCount == evt.target.value) {
      return (
        setActive(true),
        handleRadio(evt.target)
        )
    }
    return setActive(null)
  }

  return (
    <div className="container__inner form__radio-container">
      <h3 className="radio__header">{title}</h3>
      <div className="radio__wrapper">
        {
          listData.map(({ name, value, description }) => {
            return (
              <RadioButton
                userMentoringCount={userMentoringCount}
                handleActiveRadio={handleActiveRadio}
                isActive={isActive}
                key={value}
                listData={listData}
                onRadioChange={onRadioChange}
                handleRadio={handleRadio}
                value={value}
                name={name}
                description={description} />
            )
          })
        }
        <div
          className={getProgressClass()}
          style={{ background: `linear-gradient(to right, #299DC6 ${progressBar}%, white ${progressBar}%)` }}>
        </div>
      </div>
    </div>
  )
}

export default StyledRadioContainer;
