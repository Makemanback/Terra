import React from 'react';

import './leader.scss';

const Leader = ({setMentor, mentor}) => {

  const {ID, fullName, photoURL, employes, videoURL} = mentor;

  return (
    <label 
    className="leader"
    >
      <img 
        className="leader__img" 
        src={photoURL} 
        alt="1" 
        width="130" 
        height="175" />
      <div className="leader__wrapper">
        <input
          id={ID}
          onInput={({target}) => setMentor(target.id)}
          type="radio" 
          name="start-leader" 
          className="radio leader__radio" 
          value={fullName}
           />
        <span className="leader__border"></span>
        <span className="leader__name">{fullName}</span>
        <span>
        Презентация наставника: 
        <a href={videoURL} className="leader__video" target="_blank" rel="noreferrer">Посмотреть презентацию</a>
        </span>
        {
          employes.map(({name, id}) => {
            return <span key={id} className="leader__text">Ниша: {name}</span>
          })
        }
        
      </div>
    </label>
  )
}

export default Leader;