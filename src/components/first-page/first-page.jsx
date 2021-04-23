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
  directionRef,
  userName,
  userSurname,
  userLastname,
  userEmail,
  userBusiness,
  userTelegram,
  userPhone,
  userMentoringCount,
  userIncome,
  userEducationType,
  userDirectionType
}) => {

  return (
    <>
      <Header />
      <Registration />
      <FormTextInput 
        fieldValue={userSurname} 
        onInputChange={setUserSurname} 
        title={'Фамилия'} 
        placeholder={'Ваша фамилия'} 
        type={'text'} />
      <FormTextInput 
        fieldValue={userName} 
        onInputChange={setUserName} 
        title={'Имя'} 
        placeholder={'Ваше имя'} 
        type={'text'} />
      <FormTextInput 
        fieldValue={userLastname}
        onInputChange={setUserLastname} 
        title={'Отчество'} 
        placeholder={'Ваше отчество'} 
        type={'text'} />
      <FormTextInput
        fieldValue={userEmail} 
        onInputChange={setUserEmail} 
        title={'Email'} 
        placeholder={'Ваш email'} 
        type={'email'} />
      <FormTextInput 
        fieldValue={userBusiness}
        onInputChange={setUserBusiness} 
        title={'Введите нишу вашего проекта'} 
        placeholder={'Ваша ниша'} 
        type={'text'} />
      <StyledRadioContainer
        userMentoringCount={userMentoringCount} 
        onRadioChange={setUserMentoringCount} 
        title={'Сколько раз проходили наставничество в клубе Терра?'} 
        listData={repeationData} />
      <Phone 
        userPhone={userPhone}
        onInputChange={setUserPhone} />
      <TelegramInput 
        userTelegram={userTelegram} 
        onInputChange={setUserTelegram} 
        title={'Введите Ваше имя (username) в Телеграм'} 
        placeholder={'Ваш id'} 
        type={'text'} />
      <IncomeRadioContainer
        userIncome={userIncome} 
        onRadioChange={setUserIncome} 
        title={'Ваш ежемесячный чистый доход от вашего проекта?'} 
        listData={incomeData} /> 
      
      <SimpleRadioContainer 
        userEducationType={userEducationType}
        onRadioChange={setUserEducationType} 
        title={'Как вы планируете проходить наставничество?'} 
        listData={formatData} />

      {
      userIncome === 'more than 300000' ? 
      <DirectionRadioContainer
        userDirectionType={userDirectionType}
        directionRef={directionRef} 
        onRadioChange={setUserDirectionType} 
        title={'Выберите уровень наставника:'} 
        listData={statusData} /> 
      : null
      }
    </>
  )
};

export default FirstPage;