import React from 'react';
import Cards from '../body/cards';
import './Shop.css';
import Button from './Button';
import Buy from '../assets/Images/cup1.jpeg'
import Buy1 from '../assets/Images/cup1.jpeg'
import Buy2 from '../assets/Images/cup2.jpg'
import Buy3 from '../assets/Images/cup3.jpg'
import Buy4 from '../assets/Images/cup4.jpeg'
import Buy5 from '../assets/Images/cup5.jpg'
import Buy6 from '../assets/Images/cup6.jpg'


const Shop= ()=>{

    
    return(
        <div id='shop'>
            <div id='validInfo'>
            Shop With Us
            <h2>Select or choose your prefered menstrual cup and call/text the number </h2> <br/>
            <p>+23354****</p>
            </div>
           
            {/* <Cards/> */}

            <div id='shopcontainer'>
                    <div className="item">
                        <img src={Buy} className='myshop'/>
                        <p className='amount'>GHC80.00</p>
                        <Button/>
                       
                    </div>
                    <div className="item">
                        <img src={Buy1} className='myshop'/>
                        <p className='amount'>GHC80.00</p>
                       <Button/> 
                    </div>
                    <div className="item">
                        <img src={Buy2} className='myshop'/>
                        <p className='amount'>GHC80.00</p>
                        <Button/>
                    </div>
                    <div className="item">
                        <img src={Buy3} className='myshop'/>
                        <p className='amount'>GHC80.00</p>
                        <Button/>
                    </div>
                    <div className="item">
                        <img src={Buy4} className='myshop'/>
                        <p className='amount'>GHC80.00</p>
                        <Button/>
                    </div>
                    <div className="item">
                        <img src={Buy5} className='myshop'/>
                        <p className='amount'>GHC80.00</p>
                        <Button/>
                    </div>
                    <div className="item">
                        <img src={Buy6} className='myshop'/>
                        <p className='amount'>GHC80.00</p>
                        <Button/>
                    </div>
            </div>
            <h3>You don't need to leave home to buy menstrual cups, you can do that online</h3>
        </div>
       
    )
}
export default Shop;