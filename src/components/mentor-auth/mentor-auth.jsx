import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import {redirectToRoute} from '../../store/actions';
import {Path} from '../../const';

import './mentor-auth.scss';

const MentorAuth = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

  const handleAuth = (evt) => {
    const data = {
      username: username,
      password: password
    }
    console.log(data)
    evt.preventDefault();
    axios
      .post('https://d1f2737cd8d6.ngrok.io/mentor/auth', data)
      .catch(() => dispatch(redirectToRoute(Path.MENTOR)))
      .catch(() => dispatch(redirectToRoute(Path.MENTOR)))
  }

  return (
    <form
    onSubmit={(evt) => handleAuth(evt)} 
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
      <button className="auth__submit button">Войти</button>
    </form>
  )
}

export default MentorAuth;