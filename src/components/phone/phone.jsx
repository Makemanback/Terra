import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/style.css'

import './phone.scss';

const Phone = ({onInputChange}) => {

  const [countryCode, setCountry] = useState('');
  const [phoneNumber, setNumber] = useState(null);

  const getGeoInfo = () => {
    axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        setCountry(data.country_code)
    })
    .then(() => setNumber(localStorage.getItem(`phone`)))
    .catch((error) => {
        console.log(error);
    });
  };

  useEffect(() => {
    getGeoInfo()
  }, [countryCode]);

  
  const setPhoneNumber = (number) => {
    return (
      localStorage.setItem(`phone`, number),
      onInputChange(number)
    )
  };

  return (
  <div className="container__inner">
    <label className="form__label">
      <span className="form__label-text">Телефон:</span>
      <PhoneInput
        className="phone__input"
        value={phoneNumber}
        placeholder={`00000000`}
        onChange={(number) => setPhoneNumber(number)}
        country={countryCode.toLowerCase()}
      />
    </label>
  </div>
  )
}

export default Phone;