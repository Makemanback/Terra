import React, {useState} from 'react';
import './leader.scss';
import ModalVideo from 'react-modal-video'

const Leader = ({setMentor, mentor, handleMentorChoice}) => {
  const [isOpen, setOpen] = useState(false);
  const [isChosen, setChoose] = useState(false);
  
  const {ID, fullName, photoURL, employes, videoURL} = mentor;
  
  let videoId = videoURL.split('v=')[1];
  const ampersandPosition = videoId.indexOf('&');

  if (ampersandPosition != -1) {
    videoId = videoId.substring(0, ampersandPosition);
  }

  const choseMentorHandler = (target) => {
    return (
      setMentor(target.id),
      setChoose(true)
    )
  }

  const setButton = () => {
    if (isChosen) {
      return (
      <button
          onClick={() => handleMentorChoice()} 
          type="button" 
          className="button leader__button"
        >
          Выбрать наставника
      </button>
      )
    } else {
      return null
    }
  }

  return (
    <label className="leader">
      <img 
        className="leader__img" 
        src={photoURL} 
        alt="1" 
        width="130" 
        height="175" />
      <div className="leader__wrapper">
        <input
          id={ID}
          onInput={({target}) => choseMentorHandler(target)}
          type="radio" 
          name="start-leader" 
          className="radio leader__radio" 
          value={fullName}
           />
        <span className="leader__border"></span>
        <span className="leader__name">{fullName}</span>
        <span className="leader__presentation">
        Презентация наставника: 
        <ModalVideo channel='youtube' isOpen={isOpen} videoId={videoId} onClose={() => setOpen(false)} />
        <button type="button" className="leader__video" onClick={()=> setOpen(true)}>Посмотреть презентацию</button>
        </span>
        {
          employes.map(({name, id}) => {
            return <span key={id} className="leader__text">Ниша: {name}</span>
          })
        }

        {setButton()}
        
      </div>
    </label>
  )
}

export default Leader;