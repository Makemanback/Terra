import React, { useState } from 'react';
import axios from 'axios';

import './mentor-auth.scss';

const MentorAuth = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');

  const handleAuth = (evt) => {
    const data = {
      username: username,
      password: password
    }
    console.log(data)
    evt.preventDefault();
    // axios
    //   .post(Set-Cookie, 'https://d1f2737cd8d6.ngrok.io/mentor/auth', data)
      // .then(window.xhr.getResponseHeader('Set-Cookie'))

      axios.request({
        url: "https://d1f2737cd8d6.ngrok.io/mentor/auth",
        method: "post",
        headers:{
            Cookie: "cookie1=value"
        },
        data 
   })
  }

  return (
    <form
    onSubmit={(evt) => handleAuth(evt)} 
    className="auth">
      <label className="auth__login">
        <span>Введите логин</span>
        <input 
        onInput={({target}) => setUsername(target.value)}
        type="login"/>
      </label> 
      <label className="auth__login">
      <span>Введите пароль</span>
        <input 
          onInput={({target}) => setPassword(target.value)}
          type="password"/>
      </label> 
      <button className="auth__submit">Войти</button>
    </form>
  )
}

export default MentorAuth;