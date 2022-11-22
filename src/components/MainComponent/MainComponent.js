import React, {  useState } from 'react';
import "./MainComponent.css";
import {Button, TextField} from '@mui/material'

const MainComponent = () => {

  const [ predictedObj, setPredictedObj] = useState({
      City_Code : "",
      Accomodation_Type : "",
      Reco_Insurance_Type: "",
      Upper_Age: 0,
      Lower_Age: 0,
      Is_Spouse: "",
      Health_Indicator: "",
      Holding_Policy_Duration: 0,
      Holding_Policy_Type: 0,
      Reco_Policy_Cat: 0,
      Reco_Policy_Premium: 0
  });
  const [showLoading , setShowLoading] = useState(false);
  const [predictedData , setPredictedData] = useState(null);

  function handleOnClick() {

    setShowLoading(true);
    fetch("/json",
    {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(predictedObj)
    }).then((res) => {
        setPredictedData(res.data);
        setPredictedObj({
            City_Code : "",
            Accomodation_Type : "",
            Reco_Insurance_Type: "",
            Upper_Age : 0,
            Lower_Age : 0,
            Is_Spouse : "",
            Health_Indicator: "",
            Holding_Policy_Duration: 0,
            Holding_Policy_Type: 0,
            Reco_Policy_Cat: 0,
            Reco_Policy_Premium: 0
        });
    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        setShowLoading(false);

    })
  }

  return(
    <div className='outer-container'>
        <h2 className = 'header-title'>
            Insurance Prediction 
        </h2>
        <div className='form-section'>
            <TextField variant="outlined" id="filled-basic" label="city code"  value={predictedObj?.city_Code} onChange={(e) => {setPredictedObj({ ...predictedObj , city_Code : e.target.value})}} />
            <TextField variant="outlined" id="filled-basic" label="Accomodation type"  value={predictedObj?.accomodation_type} onChange={(e) => {setPredictedObj({ ...predictedObj , accomodation_type : e.target.value})}}/>
            <TextField variant="outlined" id="filled-basic" label="Reco Insurance type"  value={predictedObj?.reco_Insurance_type} onChange={(e) => {setPredictedObj({ ...predictedObj , reco_Insurance_type : e.target.value})}} />
            <TextField variant="outlined" id="filled-basic" label="Upper age"  value={predictedObj?.upper_age} onChange={(e) => {setPredictedObj({ ...predictedObj , upper_age : parseInt(e.target.value)})}}/>
            <TextField variant="outlined" id="filled-basic" label="Lower age"  value={predictedObj?.lower_age} onChange={(e) => {setPredictedObj({ ...predictedObj , lower_age : parseInt(e.target.value)})}}/>
            <TextField variant="outlined" id="filled-basic" label="Is Spouse"  value={predictedObj?.is_Spouse} onChange={(e) => {setPredictedObj({ ...predictedObj , is_Spouse : e.target.value})}} />
            <TextField variant="outlined" id="filled-basic" label="Health Indicator"  value={predictedObj?.health_Indicator} onChange={(e) => {setPredictedObj({ ...predictedObj , health_Indicator : e.target.value})}}/>
            <TextField variant="outlined" id="filled-basic" label="Holding Policy Duration"  value={predictedObj?.holding_policy_duration} onChange={(e) => {setPredictedObj({ ...predictedObj , holding_policy_duration : parseInt(e.target.value)})}}/>
            <TextField variant="outlined" id="filled-basic" label="Holding Policy Type"  value={predictedObj?.holding_policy_type} onChange={(e) => {setPredictedObj({ ...predictedObj , holding_policy_type : parseInt(e.target.value)})}}/>
            <TextField variant="outlined" id="filled-basic" label="Reco Policy cat"  value={predictedObj?.reco_policy_type} onChange={(e) => {setPredictedObj({ ...predictedObj , reco_policy_type : parseInt(e.target.value)})}} />
            <TextField variant="outlined" id="filled-basic" label="Reco Policy Premium"  value={predictedObj?.reco_policy_premium} onChange={(e) => {setPredictedObj({ ...predictedObj , reco_policy_premium : parseInt(e.target.value)})}}/>
        </div>
        <Button className='button-icon' variant="contained" onClick={handleOnClick}>Predict</Button>
        <div className='predicted-section'>
            {
                showLoading 
                ? 
                <>
                    Yes, the person will be interested!  
                </> 
                : 
                <>
                   {predictedData} 
                </>
            }
        </div>
    </div>
  )

}

export default MainComponent;