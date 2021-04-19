import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';

import {Path, AuthorizationStatus} from '../../const';

import './mentor-auth.scss';
import ApiService from '../../store/api-actions';

const apiService = new ApiService();

const MentorAuth = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [errorBlock, setErrorBlock] = useState(false);

  const authorizationStatus = useSelector(({LEADERS}) => LEADERS.authorizationStatus);

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={Path.MENTOR} />;
  }

  const handleAuth = (evt) => {
    const data = {
      username: username,
      password: password
    }


    evt.preventDefault();
    dispatch(apiService.login(data))
    .catch(() => setErrorBlock(true));
  }

  return (
    <form
    onSubmit={handleAuth} 
    className="auth">
      <h3 className="auth__header">Форма входа для наставника</h3>
      <label className="auth__label">
        <span className="auth__label-text">Введите логин</span>
        <input 
        className="auth__input"
        onInput={({target}) => setUsername(target.value)}
        type="login"/>
      </label> 
      <label className="auth__label">
      <span className="auth__label-text">Введите пароль</span>
        <input
          className="auth__input" 
          onInput={({target}) => setPassword(target.value)}
          type="password"/>
      </label> 
      {errorBlock 
      ? <span className="auth__error">Неверный логин или пароль</span>
      : null}
      <button className="auth__submit button">Войти</button>
    </form>
  )
}

export default MentorAuth;