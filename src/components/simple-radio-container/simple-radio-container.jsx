import React, { useState } from 'react';

import './simple-radio-container.scss';

const SimpleRadioButton = ({value, name, description, id, handleActiveRadio, onRadioChange, userEducationType}) => {

  return (
    <label className="form__radio-button">
      <input
        onChange={({target}) => handleActiveRadio(target.id)}
        onInput={({ target }) => onRadioChange(target.id)}
        id={id}
        type="radio" 
        name={name} 
        className="radio" 
        value={value}
        checked={id == userEducationType ? true : null}
        required />
      <span
        className="form__radio-text form__radio-text--simple"> {description}</span>
    </label>
  )
}

const SimpleRadioContainer = ({listData, title, onRadioChange, userEducationType}) => {
  const [isActive, setActive] = useState(null)

  const handleActiveRadio = (target) => {
    onRadioChange(target.id)
  
    if (userEducationType == target.id) {
      return (
        setActive(true)
        )
    }
    return setActive(null)
  }

  
  return (
  <div className="container__inner form__radio-container">
    <h3 className="radio__header">{title}</h3>
    <div className="radio__wrapper radio__wrapper--simple">
      {
        listData.map(({name, value, description, id}) => {
          return (
            <SimpleRadioButton 
              key={value} 
              value={value} 
              id={id} 
              name={name} 
              description={description}
              handleActiveRadio={handleActiveRadio}
              onRadioChange={onRadioChange}
              userEducationType={userEducationType}
              isActive={isActive} />
          )
        })
      }
    </div>
  </div>
  )
}

export default SimpleRadioContainer;

