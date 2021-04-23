import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';
import axios from "axios";
import { requireAuthorization } from '../../store/actions';
import {Path, AuthorizationStatus, BASE_URL} from '../../const';

import './mentor-auth.scss';
import ApiService from '../../store/api-actions';
import Spinner from '../spinner/spinner';

const apiService = new ApiService();

const MentorAuth = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');
  const [errorBlock, setErrorBlock] = useState(false);
  const [spinner, setSpinner] = useState(true);

  const authorizationStatus = useSelector(({LEADERS}) => LEADERS.authorizationStatus);


  useEffect(() => {
    const URL = `${BASE_URL}/mentor/check_auth`;
    const token = localStorage.getItem(`token`);

    axios.get(URL, { 'headers': { 'Authorization': token } })
      .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
      .then(() => setSpinner(false))
      .catch(() => setSpinner(false))
  });

  if (spinner) {
    return <Spinner />
  }

  if (authorizationStatus === AuthorizationStatus.AUTH) {
    return <Redirect to={Path.MENTOR} />;
  }

  const handleAuth = (evt) => {
    const data = {
      username: username,
      password: password
    }


    evt.preventDefault();
    dispatch(
      apiService.login(data))
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
        autoComplete="username" 
        className="auth__input"
        onInput={({target}) => setUsername(target.value)}
        type="login"/>
      </label> 
      <label className="auth__label">
      <span className="auth__label-text">Введите пароль</span>
        <input
          autoComplete="password"
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