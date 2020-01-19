import React from 'react';
import './SeassonDispaly.css';

const seassonConfig = {
    Summer: {
        text:"It is hot",
        iconName:"sun"
    },
    Winter:{
        text:"It is cold",
        iconName:"snowflake"
    }
} 
 
const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'Summer' : 'Winter'
    }else{
        return lat > 0 ? 'Winter' : 'Summer'
    }
}  

const SeassonDispaly = (props) =>{
    const seasson = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = seassonConfig[seasson];

    return(
        <div className={` seasson-display ${seasson}`}>
            <i className={` icon-left massive ${iconName} icon`}></i>
            <h1>{text}</h1>
            <i className={` icon-right massive ${iconName} icon`}></i>
        </div>
    )
}

export default SeassonDispaly;