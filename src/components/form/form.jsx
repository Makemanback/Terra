import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';

import {fetchMentors, getTelegramCode} from '../../store/actions';
import {BASE_URL} from '../../const';
import ButtonsBlock from '../buttons-block/buttons-block';
import FirstPage from '../first-page/first-page';
import Leaders from '../leaders/leaders';
import Final from '../final/final';
import TelegramScreen from '../telegram-screen/telegram-screeen';

const Form = () => {

  const dispatch = useDispatch();
  const directionRef = useRef();

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
  
  const [buttonsBlock, setButtonsBlock] = useState(true);

  const mentors = useSelector(({LEADERS}) => LEADERS.mentors);
  
  const firstPage = <FirstPage
  directionRef={directionRef}
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
  const [isNextShowed, setNextShow] = useState(true);
  const [isSubmitDisabled, setSubmitButton] = useState(true);
  const [mentorsList, setMentorsList] = useState(null);

  useEffect(() => {
    if (!mentors) {
      axios
      .get(`${BASE_URL}/user/fetch_lists_with_mentors`)
      .then(({data}) => dispatch(fetchMentors(data.mentors)))
    }
  }, []);
  
  useEffect(() => {
    setPage(firstPage)
    setNextButton(true);

    if (userIncome === 'more than 300000') {
      if (userDirectionType 
        && userIncome
        && userEducationType
        && userName 
        && userSurname 
        && userLastname 
        && userEmail 
        && userBusiness 
        && userMentoringCount 
        && userPhone
        && userTelegram
      ) {
        setNextButton(false);
      }
    }

    if (userIncome !== 'more than 300000') {
      if (userName 
        && userSurname 
        && userLastname 
        && userEmail 
        && userBusiness 
        && userMentoringCount 
        && userPhone
        && userTelegram
        && userIncome
        && userEducationType) {
        setNextButton(false);
      }
    }

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
  }, [userEducationType, userDirectionType, userName, userSurname, userLastname, userEmail, userBusiness, userMentoringCount, userPhone, userTelegram, userIncome, directionRef, isNextDisabled])

  const handleNextPage = () => {

    if (activePage.type.name === 'Leaders') {
      return (
        setPage(<Final />),
        setSubmitButton(false),
        setNextButton(true)),
        setNextShow(false)
    }

    return setPage(<Leaders mentorId={mentorId} setMentor={setMentorId} mentors={mentorsList} />) 
  }
  
  const handleSubmitForm = (evt) => {

    const getDirectionTypeId = () => {
      if (userDirectionType) {
        return +userDirectionType
      } else {
        return 1
      }
    };

    const getTelegradId = () => {
      if (userTelegram.includes('@')) {
        return userTelegram.slice(1, userTelegram.length)
      }
      return userTelegram;
    }

    const data = {
      firstname: userName,
      lastname: userSurname,
      patronymic: userLastname,
      email: userEmail,
      tgUsername: getTelegradId(),
      phone: userPhone,
      employments: userBusiness,
      monthlyIncome: userIncome,

      mentoringCount: +userMentoringCount,
      educationTypeId: +userEducationType,
      directionTypeID: getDirectionTypeId(),
      mentorID: +mentorId
    };

    evt.preventDefault();
    axios
      .post(`${BASE_URL}/user/register`, data)
      .then(({data}) => dispatch(getTelegramCode(data.tgVerifyCode)))
      .then(() => setButtonsBlock(false))
      .then(() => setPage(<TelegramScreen />))
  };

  return (
    <form 
      className="form container"
      onSubmit={(evt) => handleSubmitForm(evt)}>
      {activePage}

    {
      buttonsBlock 
      ? <ButtonsBlock
          isNextShowed={isNextShowed}
          isNextDisabled={isNextDisabled} 
          isSubmitDisabled={isSubmitDisabled} 
          handleNextPage={handleNextPage} />
      : null
    }
      
    </form>
  )
}

export default Form;