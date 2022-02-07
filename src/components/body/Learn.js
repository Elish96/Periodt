import React from 'react';
import './Learn.css';
import LearnBackground from '../assets/Images/learnbackground.jpg'

const Learn = ()=>{
    return(
        <div id='learn'>
            <h1>Learn page</h1>
            <div id="learnpic">
                <img id="l-pic" src={LearnBackground} alt='learn-background'/>
            </div>
            <div id="learnhow">
                    <section className="l-sec">Section One</section>
                    <section className="l-sec">Section Two</section>
            </div>
           <div id="contact">
                <div className="tact">
                <h1>STILL NOT SURE ?</h1>
                <p>ipsum lorem ammcficmcmlpvo mviomimsvvsvosmvsoomvso</p>
                </div>
                <div className="tact">
                    <form id='l-form'>
                        <label for='nn'>NAME</label> <br/>
                        <input id='nn' type='text' name='name' placeholder="Enter Name"  className="puts"/> <br/>
                        <label for='mail'>EMAIL</label> <br/>
                        <input id='mail' type="email" name="email" placeholder="Enter Email" className="puts" /> <br/>
                        <label for='loca'>LOCATON</label><br/>
                        <input id='loca' type='text' name='location' placeholder='Your Location' className="puts"/> <br/>
                        <label for='mes'>MESSAGE</label> <br/>
                        <textarea id='mes' type="text" name="message" placeholder='Type Message Here' className=" puts messa" /> <br/>
                        <input type='submit' placeholder='submit' id='sub'/>
                    </form>
                </div>
           </div>
        
        </div>
    )
};

export default Learn;