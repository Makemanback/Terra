import React from 'react';

import './submit-button.scss';

const SubmitButton = ({isSubmitDisabled}) => {
  return (
    <button
      disabled={isSubmitDisabled} 
      type="submit" 
      className="submit button">
      отправить
    </button>
  )
};

export default SubmitButton;