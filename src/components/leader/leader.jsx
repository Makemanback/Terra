import React from 'react';

import './leader.scss';

const Leader = ({setLeader, setMentor, mentor}) => {

  const {id, fullName, photoURL, employes} = mentor;

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
          id={id}
          onInput={({target}) => setMentor(target.id)}
          type="radio" 
          name="start-leader" 
          className="radio leader__radio" 
          value={fullName}
          onClick={({target}) => setLeader(target.value)} />
        <span className="leader__name">{fullName}</span>
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