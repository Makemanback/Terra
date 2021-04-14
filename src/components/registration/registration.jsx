import React from 'react';

import './registration.scss';

const Registration = () => {
  return (
    <div className="container__inner">
      <h3 className="registration__header">Правила регистрации:</h3>
      <ol className="registration__rules">
        <li className="registration__rule">
          Выбрать нужно только одного наставника. Если ты записался к нескольким наставникам - ты попадёшь  в группу к первому выбранному тобой наставнику.
        </li>
        <li className="registration__rule">
          Окончание регистрации 14.12.2020 в 17:30, успей сделать свой выбор до окончания срока действия ссылки!
        </li>
      </ol>
    </div>
  )
};

export default Registration;