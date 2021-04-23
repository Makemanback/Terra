import React from 'react';
import { useSelector } from 'react-redux';
import LoadingScreen from '../loading-screen/loading-screen';

const ErrorScreen = () => {

  const errorMessage = useSelector(({LEADERS}) => LEADERS.errorMessage);

  if (!errorMessage) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="container__inner">
      <h3 className="registration__header">{errorMessage}</h3>
    </div>
  )
};

export default ErrorScreen;