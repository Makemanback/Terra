import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import {fetchMentors} from '../../store/actions';

import ButtonsBlock from '../buttons-block/buttons-block';
import FirstPage from '../first-page/first-page';
import Leaders from '../leaders/leaders';
import Final from '../final/final';
import LoadingScreen from '../loading-screen/loading-screen';

const Form = () => {

  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userLastname, setUserLastname] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userBusiness, setUserBusiness] = useState('');
  const [userTelegram, setUserTelegram] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userMentoringCount, setUserMentoringCount] = useState(null);
  const [userIncome, setUserIncome] = useState(null);
  const [userEducationType, setUserEducationType] = useState(null);
  const [userDirectionType, setUserDirectionType] = useState(null);

  const [mentorId, setMentorId] = useState(null);
  
  const mentors = useSelector(({LEADERS}) => LEADERS.mentors);
  
  const firstPage = <FirstPage
  userIncome={userIncome} 
  setUserName={setUserName}
  setUserSurname={setUserSurname}
  setUserLastname={setUserLastname}
  setUserEmail={setUserEmail}
  setUserBusiness={setUserBusiness}
  setUserTelegram={setUserTelegram}
  setUserPhone={setUserPhone}
  setUserMentoringCount={setUserMentoringCount}
  setUserIncome={setUserIncome}
  setUserEducationType={setUserEducationType}
  setUserDirectionType={setUserDirectionType} />

  const [activePage, setPage] = useState(firstPage)

  const [isNextDisabled, setNextButton] = useState(false);
  const [isSubmitDisabled, setSubmitButton] = useState(true);
  const [mentorsList, setMentorsList] = useState(null);

  useEffect(() => {
    if (!mentors) {
      axios
      .get('http://94.130.230.165:8079/user/fetch_lists_with_mentors')
      .then(({data}) => dispatch(fetchMentors(data.mentors)))
    }

    setPage(firstPage)
  }, [userIncome]);
  
  useEffect(() => {
    if (mentors) {
      const startMentors = mentors.filter(({directionTypeID}) => directionTypeID === 1);
      const breakthroughtMentors = mentors.filter(({directionTypeID}) => directionTypeID === 2);
    
      const startMentorsOffline = startMentors.filter(({educationTypeID}) => educationTypeID === 1);
      const startMentorsOnline = startMentors.filter(({educationTypeID}) => educationTypeID === 2);
    
      const breakthroughMentorsOffline = breakthroughtMentors.filter(({educationTypeID}) => educationTypeID === 1);
      const breakthroughMentorsOnline = breakthroughtMentors.filter(({educationTypeID}) => educationTypeID === 2);
  

      if (userIncome === 'more than 300000') {
        if (userEducationType === '2' && userDirectionType === '1') {
          return setMentorsList(startMentorsOffline)
        }

        if (userEducationType === '1' && userDirectionType === '1') {
          return setMentorsList(startMentorsOnline);
        }

        if (userEducationType === '2' && userDirectionType === '2') {
          return setMentorsList(breakthroughMentorsOffline);
        }
      
        if (userEducationType === '1' && userDirectionType === '2') {
          return setMentorsList(breakthroughMentorsOnline);
        }
      }

      if (userIncome !== 'more than 300000') {
        if (userEducationType === '1') {
          return setMentorsList(startMentorsOnline);
        }
        if (userEducationType === '2') {
          return setMentorsList(startMentorsOffline);
        }
      }
      
    }
  }, [userEducationType, userDirectionType, userIncome])

  const handleNextPage = () => {
    if (activePage.type.name === 'Leaders') {
      return (
        setPage(<Final />),
        setSubmitButton(false),
        setNextButton(true))
    }

    return setPage(<Leaders setMentor={setMentorId} mentors={mentorsList} />) 
  }

  const handleSubmitForm = (evt) => {

    const data = {
      firstname: userName,
      lastname: userSurname,
      patronymic: userLastname,
      email: userEmail,
      tgUsername: userTelegram,
      phone: userPhone,
      employments: userBusiness,
      monthlyIncome: userIncome,

      mentoringCount: +userMentoringCount,
      educationTypeId: +userEducationType,
      directionTypeID: +userDirectionType,
      mentorID: +mentorId
    };


    evt.preventDefault();
    axios
      .post('https://376e73c485c0.ngrok.io/user/register', data)
      .then((data) => console.log(data))
  };

  return (
    <form 
      className="form container"
      onSubmit={(evt) => handleSubmitForm(evt)}>
      {activePage}

      <ButtonsBlock 
        isNextDisabled={isNextDisabled} 
        isSubmitDisabled={isSubmitDisabled} 
        handleNextPage={handleNextPage} />
    </form>
  )
}

export default Form;