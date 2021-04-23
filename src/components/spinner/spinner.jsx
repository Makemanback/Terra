import React from 'react';

import './spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <div className="loader">Loading...</div>
      </div>
    </div>
  );
};

export default Spinner;
