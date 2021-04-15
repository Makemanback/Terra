import React from 'react';

const SimpleRadioButton = ({value, name, description, id, onRadioChange}) => {
  return (
    <label className="form__radio-button">
      <input
        onInput={({target}) => onRadioChange(target.id)}
        id={id}
        type="radio" 
        name={name} 
        className="radio" 
        value={value} 
        required />
      <span
        className="form__radio-text form__radio-text--simple"> {description}</span>
    </label>
  )
}

const DirectionRadioContainer = ({listData, title, onRadioChange, directionRef}) => {

  return (
  <div
    ref={directionRef}
    id="direction"
    className="container__inner form__radio-container">
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
              onRadioChange={onRadioChange} />
          )
        })
      }
    </div>
  </div>
  )
}

export default DirectionRadioContainer;

