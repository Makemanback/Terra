import React from 'react';

import './next-button.scss';
import '../../common.scss';

const NextButton = ({handleNextPage, isNextDisabled}) => {

  return (
    <button 
      onClick={() => handleNextPage()}
      className="next__button button"
      type="button"
      disabled={isNextDisabled}>
        далее
    </button>
  )
}

export default NextButton;