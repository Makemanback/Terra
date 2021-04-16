import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import { fetchStudents } from '../../store/actions';
import {BASE_URL} from '../../const';

import LoadingScreen from '../loading-screen/loading-screen';
import Student from '../student/student';

import './mentor-page.scss';

const MentorPage = () => {
  const dispatch = useDispatch();

  const students = useSelector(({LEADERS}) => LEADERS.students);
  let mentorId = 5;

  useEffect(() => {
    const URL = `${BASE_URL}/mentor/fetch_registrations`
    if (!students) {
      axios.get(URL, { 'headers': { 'mentor_id': mentorId } })
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
              mentorId={mentorId} 
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