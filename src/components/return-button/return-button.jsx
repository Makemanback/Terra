import React from 'react';

import './return-button.scss';
import '../../common.scss';

const ReturnButton = ({handlePreviousPage, isReturnDisabled}) => {

  return (
    <button 
      onClick={() => handlePreviousPage()}
      className="return__button button"
      type="button"
      disabled={isReturnDisabled}>
        назад
    </button>
  )
}

export default ReturnButton;