import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';

import { fetchStudents } from '../../store/actions';
import {BASE_URL, Path, AuthorizationStatus} from '../../const';

import Student from '../student/student';

import './mentor-page.scss';

const MentorPage = () => {
  const dispatch = useDispatch();

  const students = useSelector(({LEADERS}) => LEADERS.students);
  const authorizationStatus = useSelector(({LEADERS}) => LEADERS.authorizationStatus);

  const token = localStorage.getItem(`token`);
  useEffect(() => {
    const URL = `${BASE_URL}/mentor/fetch_registrations`;
    const token = localStorage.getItem(`token`);

    if (!students) {
      axios.get(URL, { 'headers': { 'Authorization': token } })
        .then(({data}) => dispatch(fetchStudents(data)))
    }
  });

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return <Redirect to={Path.AUTHORIZATION} />;
  }

  if (!students || !token) {
    return <span >К вам никто не записался</span>
  }

  return (
    <div className="mentor">
      <ul className="students-list">
        <h2>Список участников</h2>
        {
          students.map((student) => {
            return <Student
              token={token} 
              key={student.userID} 
              student={student} />
          })
        }
      </ul>
    </div>
  )
}

export default MentorPage;