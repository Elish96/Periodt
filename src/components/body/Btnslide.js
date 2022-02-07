import React from 'react';
import leftArrow from '../assets/icons/left-arrow.svg';
import rightArrow from '../assets/icons/right-arrow.svg';

let BtnSlider = ({direction,moveslide})=>{
    console.log(direction, moveslide)
    return(
        <button onClick={moveslide} className={direction==="next"? "btn-slide next" : "btn-slide prev"} >
                <img src={direction=== "next" ? rightArrow: leftArrow}/>
        </button>
    )
};

export default BtnSlider;