import React, {useEffect} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';

import { fetchStudents } from '../../store/actions';
import {BASE_URL, Path, AuthorizationStatus} from '../../const';

import LoadingScreen from '../loading-screen/loading-screen';
import Student from '../student/student';

import './mentor-page.scss';

const MentorPage = () => {
  const dispatch = useDispatch();

  const students = useSelector(({LEADERS}) => LEADERS.students);
  const authorizationStatus = useSelector(({LEADERS}) => LEADERS.authorizationStatus);

  let mentorId = 35;

  useEffect(() => {
    const URL = `${BASE_URL}/mentor/fetch_registrations`
    if (!students) {
      axios.get(URL)
        .then(({data}) => dispatch(fetchStudents(data)))
    }
  });

  if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
    return <Redirect to={Path.AUTHORIZATION} />;
  }

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