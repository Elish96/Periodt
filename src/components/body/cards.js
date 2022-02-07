import React from 'react';
import ReactDOM from 'react-dom';
import './cards.css';
import Cup5 from '../assets/Images/cup5.jpg';
import Cup6 from '../assets/Images/cup6.jpg';
import Cup7 from '../assets/Images/cup7.jpg';

let Card1 =()=>{
    return <div className='card'>
      {/* there should be a carousel of products */}
        <div className='cad'>
                <div className='cd'>
                <img src={Cup5} alt='buy_this1' className="cadi"/>
                </div>
                <div className="cardInfo">
                   <p className="pp">card 1</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                   <input type='submit' className='sub' />
                </div>
            
        </div>
        <div className='cad'>
                <div className='cd'>
                    <img src={Cup6} alt='buy_this2' className="cadi"/>
               </div>
               <div className="cardInfo">
                  <p className="pp">card 1</p>
                  <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                  <input type='submit' className='sub' />
               </div>
           
        </div>
        <div className='cad'>
                 <div className='cd'>
                 <img src={Cup7} alt='buy_this3' className="cadi"/>
               </div>
               <div className="cardInfo">
                  <p className="pp">card 1</p>
                  <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                   <p>Buy here</p>
                  <input type='submit' className='sub' />
               </div>
            
        </div>
    </div>
}

export default Card1;