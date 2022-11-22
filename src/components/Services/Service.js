import React from 'react'
import "./Service.css";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

function Service() {
  return (
    <div className="Service1">
      <div className='LeftContainer'>
        <h1>Want to find out whether your client would be interested in the proposed Health Policy or not?</h1>
        <p>Try it out yourself!!</p>
      </div>
      <div className="RightContainer">
        <div className="icon-set">
          <div classname="icon"><PrecisionManufacturingIcon /></div>
          <span>Click here for Prediction</span>
        </div>
        <button type='button' onClick='/analyse'>Predict</button>
      </div>

    </div>
  )
}

export default Service;