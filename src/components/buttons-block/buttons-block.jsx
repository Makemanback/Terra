import React from 'react';
import NextButton from '../next-button/next-button';
import SubmitButton from '../submit-button/submit-button';

import './buttons-block.scss';

const ButtonsBlock = ({handleNextPage, isNextDisabled, isSubmitDisabled}) => {

  return (
    <div className="container__inner next">
      <NextButton handleNextPage={handleNextPage} isNextDisabled={isNextDisabled} />
      <SubmitButton isSubmitDisabled={isSubmitDisabled} />
    </div>
  )
};

export default ButtonsBlock;
