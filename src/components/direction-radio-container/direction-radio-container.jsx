import React, {useState} from 'react';

const SimpleRadioButton = ({value, name, description, id, onRadioChange, handleActiveRadio, userDirectionType}) => {
  return (
    <label className="form__radio-button">
      <input
        onChange={({target}) => handleActiveRadio(target.id)}
        onInput={({target}) => onRadioChange(target.id)}
        id={id}
        type="radio" 
        name={name} 
        className="radio" 
        value={value} 
        checked={id == userDirectionType ? true : null }
        required />
      <span
        className="form__radio-text form__radio-text--simple form__direction-button"> {description}</span>
    </label>
  )
}

const DirectionRadioContainer = ({listData, title, onRadioChange, directionRef, userDirectionType}) => {
  const [isActive, setActive] = useState(null);

  const handleActiveRadio = (target) => {
    onRadioChange(target.value)

    if (userDirectionType == target.id) {
      return (
        setActive(true)
        )
    }
    return setActive(null)
  };


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
              onRadioChange={onRadioChange}
              userDirectionType={userDirectionType}
              handleActiveRadio={handleActiveRadio}
              isActive={isActive} />
          )
        })
      }
    </div>
  </div>
  )
}

export default DirectionRadioContainer;

