import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import { fetchStudents } from '../../store/actions';

import LoadingScreen from '../loading-screen/loading-screen';
import Student from '../student/student';

import './mentor-page.scss';

const MentorPage = () => {
  const dispatch = useDispatch();

  const students = useSelector(({LEADERS}) => LEADERS.students);

  useEffect(() => {
    const URL = 'http://94.130.230.165:8079/mentor/fetch_registrations' 
    if (!students) {
      axios.get(URL, { 'headers': { 'mentor_id': 5 } })
        .then(({data}) => dispatch(fetchStudents(data)))
    }
  }, []);

  if (!students) {
    return <LoadingScreen />
  }

  return (
    <div className="mentor">
      <ul className="students-list">
        <h2>Список студентов</h2>
        {
          students.map((student) => {
            return <Student 
              key={student.userID} 
              student={student} />
          })
        }
      </ul>
    </div>
  )
}

export default MentorPage;

// селект на выбор 1 состояние 


// каждый студент - форма с одним полем - при каждом селекте запрос на сервер