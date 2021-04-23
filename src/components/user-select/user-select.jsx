import React from 'react';

const UserSelect = ({handleSubmitStudent, handleOptionChange}) => {
  return (
    <form 
    className="student__form"
    onSubmit={(evt) => handleSubmitStudent(evt)} >
  <select
    onChange={({target}) => handleOptionChange(target)}
    name="student-state"
    className="student-select">
    <option
      id="1" 
      value="На расмотрении">
        На расмотрении
    </option>
    <option 
      id="3" 
      value="Не смогу помочь">
        Не смогу помочь
    </option>
    <option
      id="2" 
      value="Беру в группу">
        Беру в группу
    </option>
    <option 
      id="4" 
      value="Накосячил">
        Накосячил
    </option>
  </select>
  <button type="submit" className="student__submit">Подтвердить</button>
  </form>
  )
}

export default UserSelect;