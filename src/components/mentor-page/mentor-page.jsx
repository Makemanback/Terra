import React, {useState, useEffect} from 'react';

const MentorPage = () => {
  return (
    <div>
      <ul className="students-list">
        {
          students.map(({name, id}) => {
            return <Student key={id} name={name} />
          })
        }
      </ul>
    </div>
  )
}

export default MentorPage;