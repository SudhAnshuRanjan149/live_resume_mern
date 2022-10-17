import React from 'react';

import './simple_btns.css';

const SuccessBtn = ({label="Submit",onClick=""}) => {
  return (
	<div className='success_btn' onClick={onClick}>{label}</div>
  )
}

export default SuccessBtn