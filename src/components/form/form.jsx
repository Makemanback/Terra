import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

import {fetchMentors, getErrorMessage, getTelegramCode} from '../../store/actions';
import {BASE_URL, DirectionTypeId, Income, EducationTypeId} from '../../const';
import ButtonsBlock from '../buttons-block/buttons-block';
import FirstPage from '../first-page/first-page';
import Leaders from '../leaders/leaders';
import Final from '../final/final';
import TelegramScreen from '../telegram-screen/telegram-screen';

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
  const [userMentoringCount, setUserMentoringCount] = useState('0');
  const [userIncome, setUserIncome] = useState(1);
  const [userEducationType, setUserEducationType] = useState(1);
  const [userDirectionType, setUserDirectionType] = useState(null);

  const [mentorId, setMentorId] = useState(null);
  
  const [buttonsBlock, setButtonsBlock] = useState(true);

  const mentors = useSelector(({LEADERS}) => LEADERS.mentors);
  
  const firstPage = <FirstPage
  directionRef={directionRef}
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
  setUserDirectionType={setUserDirectionType}
  
  userName={userName}
  userSurname={userSurname}
  userLastname={userLastname}
  userEmail={userEmail}
  userBusiness={userBusiness}
  userTelegram={userTelegram}
  userPhone={userPhone}
  userMentoringCount={userMentoringCount}
  userIncome={userIncome}
  userEducationType={userEducationType}
  userDirectionType={userDirectionType}
  />

  const [activePage, setPage] = useState(firstPage)

  const [isNextDisabled, setNextButton] = useState(false);
  const [isNextShowed, setNextShow] = useState(true);
  const [isSubmitDisabled, setSubmitButton] = useState(true);
  const [mentorsList, setMentorsList] = useState(null);
  const [isReturnDisabled, setReturnDisabled] = useState(true); 

  useEffect(() => {
    if (!mentors) {
      axios
      .get(`${BASE_URL}/user/fetch_lists_with_mentors`)
      .then(({data}) => dispatch(fetchMentors(data.mentors)))
    }
  }, [mentors, dispatch]);
  
  useEffect(() => {
    setPage(firstPage)
    setNextButton(true);
    
    if (userIncome === Income.MORE_300000) {
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

    if (userIncome !== Income.MORE_300000) {
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
    
    const startMentors = mentors.filter(({directionTypeID}) => {
      return directionTypeID === DirectionTypeId.START 
      || directionTypeID === DirectionTypeId.START_AND_BREAKTHROUGH
    });

    const breakthroughtMentors = mentors.filter(({directionTypeID}) => {
      return directionTypeID === DirectionTypeId.BREAKTHROUGH 
      || directionTypeID === DirectionTypeId.START_AND_BREAKTHROUGH
    });
    
    const startMentorsOffline = startMentors.filter(({educationTypeID}) => {
      return educationTypeID === EducationTypeId.OFFLINE
      || educationTypeID === EducationTypeId.OFFLINE_AND_ONLINE
    });
    
    const startMentorsOnline = startMentors.filter(({educationTypeID}) =>  {
      return educationTypeID === EducationTypeId.ONLINE
      || educationTypeID === EducationTypeId.OFFLINE_AND_ONLINE
    });
    
    const breakthroughMentorsOffline = breakthroughtMentors.filter(({educationTypeID}) => {
      return educationTypeID === EducationTypeId.OFFLINE
      || educationTypeID === EducationTypeId.OFFLINE_AND_ONLINE
    });
    
    const breakthroughMentorsOnline = breakthroughtMentors.filter(({educationTypeID}) => {
      return educationTypeID === EducationTypeId.ONLINE
      || educationTypeID === EducationTypeId.OFFLINE_AND_ONLINE
    });

      if (userIncome === Income.MORE_300000) {
        if ((userEducationType === 
          EducationTypeId.OFFLINE || 
          EducationTypeId.ONLINE ||
          EducationTypeId.OFFLINE_AND_ONLINE)
          && DirectionTypeId.BREAKTHROUGH) {
            setMentorsList(breakthroughtMentors)
          }
      }

      if (userIncome === Income.MORE_300000) {
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

      if (userIncome !== Income.MORE_300000) {
        if (userEducationType === '1') {
          
          return setMentorsList(startMentorsOnline);
        }
        if (userEducationType === '2') {
          return setMentorsList(startMentorsOffline);
        }
      }
    }
    
  }, [userEducationType, userDirectionType, userName, userSurname, userLastname, userEmail, userBusiness, userMentoringCount, userPhone, userTelegram, userIncome, directionRef])

  const scrollPage = () => window.scroll(0, 0);

  const handleNextPage = () => {

    return (
      setPage(<Leaders handleMentorChoice={handleMentorChoice} mentorId={mentorId} setMentor={setMentorId} mentors={mentorsList} />),
      setNextButton(false),
      setNextShow(false),
      setReturnDisabled(false),
      setTimeout(scrollPage, 0)
    )
  };

  const handleMentorChoice = () => {
    return (
      setPage(<Final />),
      setSubmitButton(false)
    )
  };

  const handlePreviousPage = () => {
    if (activePage.type.name === 'Leaders') {
      return (
        setPage(firstPage),
        setReturnDisabled(true),
        setNextButton(false),
        setNextShow(true),
        setSubmitButton(true)
      )
    } else {
      return (
        setPage(<Leaders handleMentorChoice={handleMentorChoice} mentorId={mentorId} setMentor={setMentorId} mentors={mentorsList} />),
        setReturnDisabled(false),
        setSubmitButton(true)
      )
    }
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
      .then(({data}) => data.message ? dispatch(getErrorMessage(data.message)) : dispatch(getTelegramCode(data.tgVerifyCode)))
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
          handleNextPage={handleNextPage}
          isReturnDisabled={isReturnDisabled}
          handlePreviousPage={handlePreviousPage} />
      : null
    }
      
    </form>
  )
}

export default Form;