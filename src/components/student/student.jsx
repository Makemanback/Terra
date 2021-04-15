import React, {useState, useEffect} from 'react';

const Student = ({name}) => {
  return (
    <li className="student">
      <h3 className="student__name">{name}</h3>
    </li>
  )
};

export default Student;