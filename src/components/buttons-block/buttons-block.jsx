import React from 'react';
import NextButton from '../next-button/next-button';
import ReturnButton from '../return-button/return-button';
import SubmitButton from '../submit-button/submit-button';

import './buttons-block.scss';

const ButtonsBlock = ({
  handleNextPage, 
  isNextDisabled, 
  isSubmitDisabled, 
  isNextShowed,
  handlePreviousPage,
  isReturnDisabled}) => {

  // if (!isNextShowed) {
  //   return null;
  // };

  return (
    <div className="container__inner next">
      <ReturnButton handlePreviousPage={handlePreviousPage} isReturnDisabled={isReturnDisabled} />
      {isNextShowed ? <NextButton handleNextPage={handleNextPage} isNextDisabled={isNextDisabled} /> : null}
      {isSubmitDisabled ? null : <SubmitButton isSubmitDisabled={isSubmitDisabled} />}
    </div>
  )
};

export default ButtonsBlock;
