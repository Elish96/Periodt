import React,{useState} from 'react';
import './Newslider.css';
import dataSlider from './Dataslider';
import BtnSlide from './Btnslide';



const NewSlider =()=>{

    const [slideIndex,setSlideIndex]=useState(1);

    const nextSlide=()=>{
        if(slideIndex !==dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } else if(slideIndex=== dataSlider.length){
            setSlideIndex(1)
        }
    }

    const prevSlide=()=>{
        if(slideIndex !==1){
            setSlideIndex(slideIndex - 1)
        }else if(slideIndex===1){
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot=(index)=>{
        setSlideIndex(index )
    }

    console.log(Array.from({length:6}))
    return(
        <section id="sect">
              <div className='container-slider'>
            {dataSlider.map((obj,index)=>{
                return(
                    <div key={obj.id} className={slideIndex=== index +1 ? "slide active-anim" : "slide"}>
                        <img src={process.env.PUBLIC_URL+ `/images/img-slide${index + 1}.jpg`} />
                    </div>
                )
            })}
            <BtnSlide moveslide={nextSlide} direction={"next"}/>
            <BtnSlide moveslide={prevSlide} direction={"prev"}/>
      
            <div className="container-dots">
                {Array.from({length:6}).map((item,index)=>(
                    <div onClick={()=> moveDot(index + 1)} 
                    className={slideIndex=== index +1 ? "dot active": "dot"}>
                        
                    </div>
                ))}
            </div>
        </div>
        </section>
      
    )
}

export default NewSlider;