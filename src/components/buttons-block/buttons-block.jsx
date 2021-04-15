import React from 'react';
import NextButton from '../next-button/next-button';
import SubmitButton from '../submit-button/submit-button';

import './buttons-block.scss';

const ButtonsBlock = ({handleNextPage, isNextDisabled, isSubmitDisabled, isNextShowed}) => {
  return (
    <div className="container__inner next">
      {isNextShowed ? <NextButton handleNextPage={handleNextPage} isNextDisabled={isNextDisabled} /> : null}
      {isSubmitDisabled ? null : <SubmitButton isSubmitDisabled={isSubmitDisabled} />}
    </div>
  )
};

export default ButtonsBlock;
