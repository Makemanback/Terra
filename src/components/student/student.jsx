import React, {useState} from 'react';
import axios from "axios";

import {BASE_URL} from '../../const';

import './student.scss';
import UserSelect from '../user-select/user-select';

const Student = ({student, mentorId}) => {
  
  const {
    fullName, 
    employment, 
    monthlyIncome, 
    phone, 
    email,
    tgUsername,
    educationTypeName,
    directionName,
    stateName,
    ID,
    userID,
    stateID} = student;

  const [studentState, setStudentState] = useState(stateName);
  const [studentStateId, setStudentStateId] = useState(1);
  const [stateless, setStateless] = useState(stateID);

  const handleSubmitStudent = (evt) => {

    const data = {
      userRegistrationID: +ID,
      userID: +userID,
      stateID: +studentStateId
    }
    evt.preventDefault();
    setStateless(0);
    
    axios
      .post(`${BASE_URL}/mentor/update_registration_state`, data, { 'headers': { 'mentor_id': mentorId } })
  }

  const handleOptionChange = (target) => {
    setStudentState(target.value);

    if (target[0].selected) {
      setStudentStateId(target[0].id);
    }
    if (target[1].selected) {
      setStudentStateId(target[1].id);
    }
    if (target[2].selected) {
      setStudentStateId(target[2].id);
    }
    if (target[3].selected) {
      setStudentStateId(target[3].id);
    }
  }

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

    {stateless === 1 
    ? <UserSelect handleSubmitStudent={handleSubmitStudent} handleOptionChange={handleOptionChange} />
  : null
  }
      
    </li>
  )
};

export default Student;