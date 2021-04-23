import React, {useState} from 'react';

import Leader from '../leader/leader';
import LoadingScreen from '../loading-screen/loading-screen';

import './leaders.scss';


const Leaders = ({setMentor, mentors, mentorId, handleMentorChoice}) => {

  const [mentorsList, setList] = useState(mentors);

  if (!mentors) {
    return (
      <div className="container__inner">
        <div className="leaders__empty">Всех разобрали или по вашим параметрам никого нет (как говорится: кто не успел - тот опоздал)</div>
      </div>
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
        mentorsList.map((mentor) => {
          return (
            <Leader 
              key={mentor.ID} 
              handleMentorChoice={handleMentorChoice} 
              mentorId={mentorId} 
              setMentor={setMentor} 
              mentor={mentor} />
          )
        })
      }
    </div>
      
    </section>
  )
}

export default Leaders;