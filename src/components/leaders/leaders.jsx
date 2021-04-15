import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";


import Leader from '../leader/leader';
import LoadingScreen from '../loading-screen/loading-screen';

import './leaders.scss';


const Leaders = ({setMentor, mentors, userDirectionType, userEducationType}) => {

  const [mentorsList, setList] = useState(mentors);
  
  const startMentors = mentors.filter(({directionTypeID}) => directionTypeID === 1);
  const breakthroughtMentors = mentors.filter(({directionTypeID}) => directionTypeID === 2);

  const startMentorsOffline = startMentors.filter(({educationTypeID}) => educationTypeID === 1);
  const startMentorsOnline = startMentors.filter(({educationTypeID}) => educationTypeID === 2);

  const breakthroughMentorsOffline = breakthroughtMentors.filter(({educationTypeID}) => educationTypeID === 1);
  const breakthroughMentorsOnline = breakthroughtMentors.filter(({educationTypeID}) => educationTypeID === 2);
  
  
    // if (userEducationType === '1' && userDirectionType === '1') {
    //   setList(startMentorsOffline);
    // }
  
    // if (userEducationType === '2' && userDirectionType === '1') {
    //   setList(startMentorsOnline);
    // }
  
    // if (userEducationType === '1' && userDirectionType === '2') {
    //   setList(breakthroughMentorsOffline);
    // }
  
    // if (userEducationType === '2' && userDirectionType === '2') {
    //   setList(breakthroughMentorsOnline);
    // }
  console.log(typeof userDirectionType)


  if (!mentors) {
    return (
      <LoadingScreen />
    );
  }
  
  const searchHandler = (target) => {
    
    const {value} = target;
    const val = value.toLowerCase();

    if (target.value === '') {
      setList(mentors)
    } else {
        const filteredMentors = mentors.filter(({fullName, employes}) => {
          const isFullNameMatches = fullName.toLowerCase().includes(val)

          if (isFullNameMatches) {
            return true;
          }

          return employes.some(({name}) => {
            return (
              name.toLowerCase().includes(val)
            )
          });
        });
      setList(filteredMentors);
    }
  };

  
  return (
    <section className="second">
    <div className="container__inner form__radio-container">
      <h3 className="radio__header">Выберите наставника из списка Наставников Запуск</h3>
      <div className="container__wrapper">
        <h4 className="form__radio-header">Поиск по наставникам</h4>
        <input 
          type="text" 
          className="form__search-field" 
          placeholder="введите имя наставника"
          onChange={({target}) => searchHandler(target)}
           />
      </div>
    </div>

    <div>
      {
        mentorsList.map((mentor, index) => {
          return (
            <Leader key={index} setMentor={setMentor} mentor={mentor} />
          )
        })
      }
    </div>
      
    </section>
  )
}

export default Leaders;