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
  
  // if (!mentors) {
  //   return (
  //     <LoadingScreen />
  //   );
  // }
  const [activePage, setPage] = useState(
  <FirstPage 
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
    setUserDirectionType={setUserDirectionType} />)

  const [isNextDisabled, setNextButton] = useState(false);
  const [isSubmitDisabled, setSubmitButton] = useState(true);

  useEffect(() => {
    if (!mentors) {
      axios
      .get('http://94.130.230.165:8079/user/fetch_lists_with_mentors')
      .then(({data}) => dispatch(fetchMentors(data.mentors)))
    }

  }, [mentors]);

  const handleNextPage = () => {
    const statusRadio = document.querySelectorAll('[name=business-type]')
    // const allRadio = Array.from(document.querySelectorAll('[type=radio]'));
    const [start, breakthrough] = statusRadio;

    if (activePage.type.name === 'Leaders') {
      return (
        setPage(<Final />),
        setSubmitButton(false),
        setNextButton(true))
    }

    if (start || breakthrough) {
      return setPage(<Leaders userEducationType={userEducationType} userDirectionType={userDirectionType} setMentor={setMentorId} mentors={mentors} />)
    }
  }

//   const startMentors = mentors.filter(({directionTypeID}) => directionTypeID === 1);
//   const breakthroughtMentors = mentors.filter(({directionTypeID}) => directionTypeID === 2);

//   const startMentorsOffline = startMentors.filter(({educationTypeID}) => educationTypeID === 1);
//   const startMentorsOnline = startMentors.filter(({educationTypeID}) => educationTypeID === 2);

//   const breakthroughMentorsOffline = breakthroughtMentors.filter(({educationTypeID}) => educationTypeID === 1);
//   const breakthroughMentorsOnline = breakthroughtMentors.filter(({educationTypeID}) => educationTypeID === 2);

//   let actualMentors;

//   if (userEducationType === 1 && userDirectionType === 1) {
//     actualMentors = startMentorsOffline
//   }

//   if (userEducationType === 2 && userDirectionType === 1) {
//     actualMentors = startMentorsOnline;
//   }

//   if (userEducationType === 1 && userDirectionType === 2) {
//     actualMentors = breakthroughMentorsOffline;
//   }

//   if (userEducationType === 2 && userDirectionType === 2) {
//     actualMentors = breakthroughMentorsOnline;
//   }
// console.log(actualMentors)

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