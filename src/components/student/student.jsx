import React, {useState, useEffect} from 'react';

import './student.scss';

const Student = ({student}) => {

  const {
    fullName, 
    employment, 
    monthlyIncome, 
    phone, 
    email,
    tgUsername,
    educationTypeName,
    directionName,
    stateName} = student;

    const [studentState, setStudentState] = useState(stateName);
  return (
    <li className="student">
      
      <h3 className="student__name">{fullName}</h3>
      <p className="student__description student__business">Бизнес: {employment}</p>
      <p className="student__description student__income">Выручка в месяц: {monthlyIncome}</p>
      <p className="student__description student__description student__phone">Телефон: {phone}</p>
      <p className="student__description student__email">Email: {email}</p>
      <p className="student__description student__telegram">Ник в Telegram: {tgUsername}</p>
      <p className="student__description student__education-type">Тип обучения: {educationTypeName}</p>
      <p className="student__description student__direction-type">Направление: {directionName}</p>
      <p className="student__description student__current-state">Состояние: {studentState}</p>

      <form 
        className="student__form"
        onSubmit={() => console.log(`subm`)} >
      <select
        onChange={({target}) => setStudentState(target.value)}
        name="student-state">
        <option
          id="1" 
          value="На расмотрении">
            На расмотрении
        </option>
        <option 
          id="2" 
          value="Не смогу помочь">
            Не смогу помочь
        </option>
        <option
          id="3" 
          value="Подтвержден">
            Подтвержден
        </option>
        <option 
          id="4" 
          value="Накосячил">
            Накосячил
        </option>
      </select>
      <button type="submit" className="student__submit">Подтвердить</button>
      </form>
    </li>
  )
};

export default Student;