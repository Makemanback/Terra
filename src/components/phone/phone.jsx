import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PhoneInput from 'react-phone-input-2'

import 'react-phone-input-2/lib/style.css'


const Phone = ({onInputChange}) => {

  const [number, setNumber] = useState(null);
  const [countryCode, setCountry] = useState('');

  const getGeoInfo = () => {
    axios.get('https://ipapi.co/json/').then((response) => {
        let data = response.data;
        setCountry(data.country_code)
    }).catch((error) => {
        console.log(error);
    });
  };

  useEffect(() => {
    getGeoInfo()
  }, [countryCode]);
  

  return (
  <div className="container__inner">
    <label className="form__label">
      <span className="form__label-text">Телефон:</span>
      <PhoneInput
        onChange={(number) => onInputChange(number)}
        country={countryCode.toLowerCase()}
        value={number}
      />
    </label>
  </div>
  )
}

export default Phone;