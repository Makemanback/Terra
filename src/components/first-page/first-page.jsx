import React from 'react';

import {repeationData, incomeData, formatData, statusData} from '../../const';

import FormTextInput from '../form-text-input/form-text-input';
import StyledRadioContainer from "../styled-radio-container/styled-radio-container";
import SimpleRadioContainer from "../simple-radio-container/simple-radio-container";
import DirectionRadioContainer from "../direction-radio-container/direction-radio-container";
import Header from '../header/header';
import Registration from '../registration/registration';
import Phone from '../phone/phone';
import TelegramInput from '../telegram-input/telegram-input';
import IncomeRadioContainer from '../income-radio-container/income-radio-container';

const FirstPage = ({
  setUserName, 
  setUserSurname, 
  setUserLastname,
  setUserEmail,
  setUserBusiness,
  setUserTelegram,
  setUserPhone,
  setUserMentoringCount,
  setUserIncome,
  setUserEducationType,
  setUserDirectionType,
  userIncome,
  directionRef}) => {

  return (
    <>
      <Header />
      <Registration />
      <FormTextInput onInputChange={setUserName} title={'Имя'} placeholder={'Ваше имя'} type={'text'} />
      <FormTextInput onInputChange={setUserSurname} title={'Фамилия'} placeholder={'Ваша фамилия'} type={'text'} />
      <FormTextInput onInputChange={setUserLastname} title={'Отчество'} placeholder={'Ваше отчество'} type={'text'} />
      <FormTextInput onInputChange={setUserEmail} title={'Email'} placeholder={'Ваш email'} type={'email'} />
      <FormTextInput onInputChange={setUserBusiness} title={'Введите нишу вашего проекта'} placeholder={'Ваша ниша'} type={'text'} />
      <StyledRadioContainer onRadioChange={setUserMentoringCount} title={'Сколько раз проходили наставничество в клубе Терра?'} listData={repeationData} />
      <Phone onInputChange={setUserPhone} />
      <TelegramInput onInputChange={setUserTelegram} title={'Введите Ваше имя (username) в Телеграм'} placeholder={'Ваш id'} type={'text'} />
      <IncomeRadioContainer onRadioChange={setUserIncome} title={'Ваш ежемесячный чистый доход от вашего проекта?'} listData={incomeData} /> 
      
      <SimpleRadioContainer onRadioChange={setUserEducationType} title={'Как вы планируете проходить наставничество?'} listData={formatData} />
      {userIncome === 'more than 300000' ? <DirectionRadioContainer directionRef={directionRef} onRadioChange={setUserDirectionType} title={'Ваш статус:'} listData={statusData} /> : null}
    </>
  )
};

export default FirstPage;