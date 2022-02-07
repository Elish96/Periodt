import React from 'react';
import './Contact.css'
import Background from '../assets/Images/background.jpg'

const Contact= ()=>{
    return(
        <div id='contact-main'>
            <div className='contactpic'>
                <img  calssName='mpic' src={Background} alt='contact_backgroud_pic' style={{width:84.3+'rem', height:40+'rem'}} />
            </div>
            <div className='contact '>
                <div className='contactInfo'>
                    <div className="text">
                    <h2>LET'S CHAT</h2> <br/>
                    <p>We love to talk. Here's how you can reach the Periodt team- we look forward to hearing from you!</p> <br/>
                    <p>For questions, and concerns or to say hi: email@periodts.com</p> <br/>
                    <p>For tracking, supply and questions about your order: orders@periodts.com  </p>
                    </div>
                   
                </div>
                <div className='contactInfo form'>
                    <form id='formsubmit'>
                        {/* NOTE: THE for IN THE LABEL SHOULD BE THE SAME AS YOUR
                         ID FOR THE RESPECTIVE INPUT,IN ORDER TO BIND THEM */}
                        <label for='yourname'>NAME</label> <br/>
                            <input id='yourname' className="inp" type='text' name='name' placeholder='Name' /> <br/>
                        <label for='youremail'>EMAIL</label> <br/>
                            <input id='youremail'  className="inp" type='email' name='email' placeholder='Email' /> <br/>
                        <label for="yourlocation">Location</label> <br/>
                            <input id='yourlocation' className="inp" type='text'name="location" placeholder='Your Location' /> <br/>
                        <label for='yourmessage'>MESSAGE</label> <br/>
                            <textarea id='yourmessage'  className="message" type='text' placeholder='Type your message here' /> <br/>
                         
                         <input type='submit' id='send'/>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;
