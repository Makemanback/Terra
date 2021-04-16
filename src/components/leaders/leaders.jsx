import React, {useEffect, useState} from 'react';

import Leader from '../leader/leader';
import LoadingScreen from '../loading-screen/loading-screen';

import './leaders.scss';


const Leaders = ({setMentor, mentors, mentorId}) => {

  const [mentorsList, setList] = useState(mentors);

  // useEffect(() => {
  //   if (!mentors) {

  //   }
  // },
  // []);

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
          placeholder="введите имя или нишу наставника"
          onChange={({target}) => searchHandler(target)}
           />
      </div>
    </div>

    <div>
      {
        mentorsList.map((mentor, index) => {
          return (
            <Leader mentorId={mentorId} key={index} setMentor={setMentor} mentor={mentor} />
          )
        })
      }
    </div>
      
    </section>
  )
}

export default Leaders;