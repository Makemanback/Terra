import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import LoadingScreen from '../loading-screen/loading-screen'


const TelegramScreen = () => {

  const code = useSelector(({LEADERS}) => LEADERS.code);

  if (!code) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="container__inner">
      <span>Спасибо за регистрацию! Сохраните этот код и отправьте его нашему боту в telegram</span>
      <span>{code}</span>
    </div>
  )
};

export default TelegramScreen;