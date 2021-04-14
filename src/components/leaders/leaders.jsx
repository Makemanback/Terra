import React, {useState, useEffect} from 'react';
import {useDispatch} from "react-redux";


import Leader from '../leader/leader';
import LoadingScreen from '../loading-screen/loading-screen';

import './leaders.scss';


const Leaders = ({setMentor, mentors, userDirectionType, userEducationType}) => {

  const [mentorsList, setList] = useState(mentors);
  
  const [leader, setLeader] = useState(null);

  if (!mentors) {
    return (
      <LoadingScreen />
    );
  }
  
  

 

  const searchHandler = (target) => {
    

    if (target.value === '') {
      // setList(chosenMentors)
    } else {

      const mentors = chosenMentors.filter(({employes}) => {
        employes.filter(({name}) => {
          return console.log(name.includes(target.value))
        })
      })

      // const mentors = chosenMentors.filter(({fullName}) => {
      //   return fullName
      //   .toLowerCase()
      //   .includes((target.value).toLowerCase())
      // })

      setList(mentors);

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
        mentors.map((mentor, index) => {
          return (
            <Leader key={index} setMentor={setMentor} setLeader={setLeader} mentor={mentor} />
          )
        })
      }
    </div>
      
    </section>
  )
}

export default Leaders;